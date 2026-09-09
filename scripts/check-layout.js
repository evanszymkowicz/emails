import { chromium } from 'playwright'
import http from 'http'
import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const distDir = path.join(__dirname, '..', 'dist')

function startStaticServer(port) {
  const server = http.createServer((req, res) => {
    const filePath = path.join(distDir, req.url === '/' ? 'index.html' : req.url)
    fs.readFile(filePath, (err, data) => {
      if (err) {
        res.writeHead(404)
        res.end('Not found')
        return
      }
      const ext = path.extname(filePath)
      const contentType = {
        '.html': 'text/html',
        '.png': 'image/png',
        '.jpg': 'image/jpeg',
      }[ext] || 'application/octet-stream'
      res.writeHead(200, { 'Content-Type': contentType })
      res.end(data)
    })
  })
  return new Promise((resolve) => {
    server.listen(port, () => resolve(server))
  })
}

async function check(emailName, port = 3457) {
  const server = await startStaticServer(port)
  const browser = await chromium.launch()
  const page = await browser.newPage()
  await page.setViewportSize({ width: 1200, height: 800 })
  await page.goto(`http://localhost:${port}/${emailName}.html`)
  await page.waitForLoadState('networkidle')

  const info = await page.evaluate(() => {
    const body = document.body
    const article = document.querySelector('[role="article"]')
    const containers = article.querySelectorAll('.max-w-150, [style*="max-width"]')

    const bodyRect = body.getBoundingClientRect()
    const articleRect = article.getBoundingClientRect()

    const containerInfo = []
    containers.forEach((c, i) => {
      const r = c.getBoundingClientRect()
      containerInfo.push({
        index: i,
        className: c.className.substring(0, 60),
        left: r.left,
        width: r.width,
        viewportCenter: window.innerWidth / 2,
        elementCenter: r.left + r.width / 2,
        offsetFromCenter: (r.left + r.width / 2) - (window.innerWidth / 2),
      })
    })

    return {
      viewportWidth: window.innerWidth,
      bodyWidth: bodyRect.width,
      bodyLeft: bodyRect.left,
      articleWidth: articleRect.width,
      articleLeft: articleRect.left,
      articleStyle: article.getAttribute('style'),
      containers: containerInfo,
    }
  })

  console.log(`\n=== ${emailName} ===`)
  console.log(`Viewport: ${info.viewportWidth}px`)
  console.log(`Body: left=${info.bodyLeft}, width=${info.bodyWidth}`)
  console.log(`Article: left=${info.articleLeft}, width=${info.articleWidth}`)
  console.log(`Article style: ${info.articleStyle}`)
  console.log(`Containers:`)
  info.containers.forEach((c) => {
    console.log(`  [${c.index}] ${c.className}`)
    console.log(`      left=${c.left.toFixed(0)}, width=${c.width.toFixed(0)}, offsetFromCenter=${c.offsetFromCenter.toFixed(0)}px`)
  })

  await browser.close()
  server.close()
}

const emailName = process.argv[2] || 'restaurant-emails'
check(emailName).catch((err) => {
  console.error(err)
  process.exit(1)
})
