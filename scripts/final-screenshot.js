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
      }[ext] || 'application/octet-stream'
      res.writeHead(200, { 'Content-Type': contentType })
      res.end(data)
    })
  })
  return new Promise((resolve) => {
    server.listen(port, () => resolve(server))
  })
}

async function capture(emailName, port = 3458) {
  const server = await startStaticServer(port)
  const browser = await chromium.launch()
  const page = await browser.newPage()
  await page.setViewportSize({ width: 700, height: 800 })
  await page.goto(`http://localhost:${port}/${emailName}.html`)
  await page.waitForLoadState('networkidle')

  const outPath = path.join(screenshotsDir, `${emailName}.png`)
  await page.screenshot({ path: outPath, fullPage: true })
  console.log(`Saved: ${outPath}`)

  await browser.close()
  server.close()
}

const emailName = process.argv[2] || 'restaurant-emails'
capture(emailName).catch((err) => {
  console.error(err)
  process.exit(1)
})
