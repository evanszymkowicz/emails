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

async function check(emailName, port = 3459) {
  const server = await startStaticServer(port)
  const browser = await chromium.launch()
  const page = await browser.newPage()
  await page.setViewportSize({ width: 700, height: 800 })
  await page.goto(`http://localhost:${port}/${emailName}.html`)
  await page.waitForLoadState('networkidle')

  const info = await page.evaluate(() => {
    const results = {}

    // Header logo
    const headerLogo = document.querySelector('img[alt="Glen\'s Garden Market"]')
    if (headerLogo) {
      const parent = headerLogo.closest('div[style]') || headerLogo.parentElement
      results['header logo'] = {
        textAlign: getComputedStyle(parent).textAlign,
        parentTag: parent.tagName,
        parentClass: parent.className.substring(0, 50),
      }
    }

    // Beat the heat
    const beatHeat = document.querySelector('h4')
    if (beatHeat && beatHeat.textContent.includes('Beat the heat')) {
      results['beat the heat'] = {
        textAlign: getComputedStyle(beatHeat).textAlign,
        inlineStyle: beatHeat.getAttribute('style'),
      }
    }

    // Upcoming Events
    const upcoming = document.querySelector('h3')
    if (upcoming && upcoming.textContent.includes('Upcoming Events')) {
      results['upcoming events'] = {
        textAlign: getComputedStyle(upcoming).textAlign,
        inlineStyle: upcoming.getAttribute('style'),
      }
    }

    // Click HERE
    const rsvp = Array.from(document.querySelectorAll('h4')).find(el => el.textContent.includes('Click HERE'))
    if (rsvp) {
      results['click here'] = {
        textAlign: getComputedStyle(rsvp).textAlign,
        inlineStyle: rsvp.getAttribute('style'),
      }
    }

    // Footer logo
    const imgs = document.querySelectorAll('img[alt="Glen\'s Garden Market"]')
    if (imgs.length > 1) {
      const footerLogo = imgs[imgs.length - 1]
      const parent = footerLogo.closest('div[style]') || footerLogo.parentElement
      results['footer logo'] = {
        textAlign: getComputedStyle(parent).textAlign,
        parentTag: parent.tagName,
        parentClass: parent.className.substring(0, 50),
      }
    }

    // Address and Hours
    const addr = Array.from(document.querySelectorAll('p')).find(el => el.textContent.includes('Address and Hours'))
    if (addr) {
      results['address and hours'] = {
        textAlign: getComputedStyle(addr).textAlign,
        inlineStyle: addr.getAttribute('style'),
      }
    }

    // Footer (copyright)
    const copyright = Array.from(document.querySelectorAll('a')).find(el => el.textContent.includes('2019'))
    if (copyright) {
      results['copyright'] = {
        textAlign: getComputedStyle(copyright).textAlign,
        inlineStyle: copyright.getAttribute('style'),
        parentTextAlign: getComputedStyle(copyright.parentElement).textAlign,
      }
    }

    return results
  })

  console.log(`\n=== ${emailName} ===`)
  for (const [key, val] of Object.entries(info)) {
    console.log(`${key}:`)
    for (const [k, v] of Object.entries(val)) {
      console.log(`  ${k}: ${v}`)
    }
  }

  await browser.close()
  server.close()
}

const emailName = process.argv[2] || 'restaurant-emails'
check(emailName).catch((err) => {
  console.error(err)
  process.exit(1)
})
