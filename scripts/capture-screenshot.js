import { chromium } from 'playwright'
import http from 'http'
import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const distDir = path.join(__dirname, '..', 'dist')
const screenshotsDir = path.join(__dirname, '..', 'screenshots')

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
        '.jpeg': 'image/jpeg',
        '.gif': 'image/gif',
      }[ext] || 'application/octet-stream'
      res.writeHead(200, { 'Content-Type': contentType })
      res.end(data)
    })
  })

  return new Promise((resolve) => {
    server.listen(port, () => resolve(server))
  })
}

async function capture(emailName, port = 3456) {
  const browser = await chromium.launch()
  const context = await browser.newContext()
  const page = await context.newPage()

  await page.setViewportSize({ width: 700, height: 800 })
  await page.goto(`http://localhost:${port}/${emailName}.html`)

  // Wait for fonts and images
  await page.waitForLoadState('networkidle')

  // Capture full-page screenshot at desktop width
  const desktopDir = path.join(screenshotsDir, emailName)
  fs.mkdirSync(desktopDir, { recursive: true })

  const desktopPath = path.join(desktopDir, 'desktop.png')
  await page.screenshot({ path: desktopPath, fullPage: true })
  console.log(`Screenshot saved: ${desktopPath}`)

  // Mobile width
  await page.setViewportSize({ width: 375, height: 800 })
  await page.goto(`http://localhost:${port}/${emailName}.html`)
  await page.waitForLoadState('networkidle')

  const mobilePath = path.join(desktopDir, 'mobile.png')
  await page.screenshot({ path: mobilePath, fullPage: true })
  console.log(`Screenshot saved: ${mobilePath}`)

  await browser.close()
}

const explicitName = process.argv[2]

async function main() {
  let emailNames = [explicitName]

  if (!explicitName) {
    // Auto-discover all top-level .html files in dist/
    emailNames = fs.readdirSync(distDir)
      .filter((f) => f.endsWith('.html') && f !== 'index.html')
      .map((f) => path.basename(f, '.html'))
  }

  const server = await startStaticServer(3456)
  for (const name of emailNames) {
    await capture(name, 3456)
  }
  server.close()
}

main().catch((err) => {
  console.error(err)
  process.exit(1)
})
