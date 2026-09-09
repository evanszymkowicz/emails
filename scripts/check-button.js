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
      res.writeHead(200, { 'Content-Type': 'text/html' })
      res.end(data)
    })
  })
  return new Promise((resolve) => {
    server.listen(port, () => resolve(server))
  })
}

async function check(emailName, port = 3460) {
  const server = await startStaticServer(port)
  const browser = await chromium.launch()
  const page = await browser.newPage()
  await page.setViewportSize({ width: 700, height: 800 })
  await page.goto(`http://localhost:${port}/${emailName}.html`)
  await page.waitForLoadState('networkidle')

  const info = await page.evaluate(() => {
    const button = Array.from(document.querySelectorAll('a')).find(a => a.textContent.includes('Redeem Now'))
    const container = button.closest('[role="article"]')
    const containerRect = container.getBoundingClientRect()
    const buttonRect = button.getBoundingClientRect()
    const containerCenter = containerRect.left + containerRect.width / 2
    const buttonCenter = buttonRect.left + buttonRect.width / 2
    return {
      container: { left: containerRect.left, width: containerRect.width },
      button: { left: buttonRect.left, width: buttonRect.width },
      containerCenter,
      buttonCenter,
      offset: buttonCenter - containerCenter,
    }
  })

  console.log(`Container: left=${info.container.left}, width=${info.container.width}`)
  console.log(`Button: left=${info.button.left}, width=${info.button.width}`)
  console.log(`Container center: ${info.containerCenter.toFixed(2)}`)
  console.log(`Button center: ${info.buttonCenter.toFixed(2)}`)
  console.log(`Offset: ${info.offset.toFixed(2)}px`)

  await browser.close()
  server.close()
}

check('restaurant-emails').catch((err) => {
  console.error(err)
  process.exit(1)
})
