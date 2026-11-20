import { readFileSync, writeFileSync } from 'node:fs'
import { join, dirname } from 'node:path'
import { fileURLToPath } from 'node:url'

const root = join(dirname(fileURLToPath(import.meta.url)), '..')
const h = readFileSync(join(root, 'assets', '_blogs-source.html'), 'utf8')

const decode = (s) =>
  s
    .replace(/<[^>]+>/g, '')
    .replace(/&amp;/g, '&')
    .replace(/&#x27;/g, "'")
    .replace(/&#39;/g, "'")
    .replace(/&quot;/g, '"')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/\s+/g, ' ')
    .trim()

const re =
  /<a[^>]+href="(\/blogs\/[^"]+)"[^>]*>[\s\S]*?<img[^>]+src="(https:\/\/media\.storebox\.ai[^"]+)"[^>]*alt="([^"]*)"[\s\S]*?<h4[^>]*>([\s\S]*?)<\/h4>\s*<p[^>]*>([\s\S]*?)<\/p>\s*<div[^>]*>\s*<span>([\s\S]*?)<\/span>/g

const posts = []
let m
while ((m = re.exec(h)) !== null) {
  const href = m[1]
  if (href === '/blogs/' || href === '/blogs') continue
  posts.push({
    href,
    slug: href.replace(/^\/blogs\//, '').replace(/\/$/, ''),
    image: m[2],
    alt: decode(m[3]),
    title: decode(m[4]),
    excerpt: decode(m[5]),
    date: decode(m[6]),
  })
}

// de-dupe by slug
const seen = new Set()
const unique = []
for (const p of posts) {
  if (seen.has(p.slug)) continue
  seen.add(p.slug)
  unique.push(p)
}

writeFileSync(join(root, 'assets', 'blogs-posts.json'), JSON.stringify(unique, null, 2))
console.log('extracted', unique.length, 'posts')
console.log(unique.slice(0, 2))
