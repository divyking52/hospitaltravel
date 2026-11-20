import { readFileSync, writeFileSync } from 'node:fs'
import { join, dirname } from 'node:path'
import { fileURLToPath } from 'node:url'

const root = join(dirname(fileURLToPath(import.meta.url)), '..')
const posts = JSON.parse(readFileSync(join(root, 'assets', 'blogs-posts.json'), 'utf8'))

const esc = (s = '') =>
  String(s)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')

const logo =
  'https://api.storebox.ai/media/f277f107-42f8-40bb-8b7b-c6964ff012d8/6906f953-cfde-4b21-954f-be7e74e76f37/LOGO_HOSPITALITYCANCUN.svg'

const cards = posts
  .map((p) => {
    const href = `https://hospitalitycancun.com${p.href.startsWith('/') ? p.href : `/${p.href}`}`
    return `<a class="blog-card" href="${esc(href)}" target="_blank" rel="noopener">
  <div class="blog-card-media">
    <img src="${esc(p.image)}" alt="${esc(p.alt || p.title)}" loading="lazy" width="1200" height="630">
  </div>
  <div class="blog-card-body">
    <h2 class="blog-card-title">${esc(p.title)}</h2>
    <p class="blog-card-excerpt">${esc(p.excerpt)}</p>
    <div class="blog-card-meta"><span>${esc(p.date)}</span></div>
  </div>
</a>`
  })
  .join('\n')

const html = `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>Blog | Hospitality Cancún</title>
<meta name="description" content="Hospitality Cancún blog: medical travel planning, Costamed care questions, and procedure research guides.">
<meta name="theme-color" content="#143a52">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link rel="preconnect" href="https://media.storebox.ai" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Geist:wght@500;600;700;800&family=Inter:wght@400;500;600&display=swap" rel="stylesheet">
<style>
:root {
  --ink: #143a52;
  --ink-deep: #050e15;
  --mint: #5eb8e8;
  --leaf: #5fad8f;
  --leaf-deep: #3f8f72;
  --muted: rgba(0,0,0,.6);
  --muted-2: rgba(0,0,0,.5);
  --line: rgba(20, 58, 82, 0.12);
  --white: #fff;
  --sans: "Geist", Arial, sans-serif;
  --body: "Inter", system-ui, sans-serif;
}
* { box-sizing: border-box; }
html { scroll-behavior: smooth; }
body {
  margin: 0;
  background: var(--white);
  color: var(--ink-deep);
  font-family: var(--body);
  font-size: 16px;
  line-height: 1.6;
  -webkit-font-smoothing: antialiased;
}
a { color: inherit; text-decoration: none; }
img { display: block; max-width: 100%; }
:focus-visible { outline: 2px solid var(--leaf-deep); outline-offset: 3px; }

.site-nav {
  position: sticky;
  top: 0;
  z-index: 50;
  background: rgba(255,255,255,.92);
  backdrop-filter: blur(10px);
  border-bottom: 1px solid var(--line);
}
.nav-shell {
  width: min(1200px, calc(100% - 48px));
  margin: 0 auto;
  min-height: 72px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
}
.brand img { height: 42px; background: transparent; }
.nav-shell nav {
  display: flex;
  align-items: center;
  gap: 4px 18px;
  flex-wrap: wrap;
}
.nav-shell nav a {
  font-family: var(--sans);
  font-size: 14px;
  font-weight: 600;
  color: var(--ink);
  opacity: .82;
}
.nav-shell nav a:hover,
.nav-shell nav a.is-active { opacity: 1; }
.nav-cta {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 10px 16px;
  border-radius: 999px;
  background: var(--ink);
  color: #fff;
  font-family: var(--sans);
  font-size: 13px;
  font-weight: 600;
}
.nav-cta:hover { background: #0f2f42; }
.burger { display: none; }

.blogs {
  width: min(1200px, calc(100% - 64px));
  margin: 0 auto;
  padding: 64px 0 96px;
}
.blogs-head {
  text-align: center;
  margin-bottom: 48px;
}
.blogs-head h1 {
  margin: 0;
  font-family: var(--sans);
  font-size: clamp(40px, 5vw, 58px);
  font-weight: 700;
  letter-spacing: -0.015em;
  line-height: 1.05;
  color: var(--ink-deep);
}

.blog-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 48px;
}

.blog-card {
  display: block;
  color: inherit;
  overflow: hidden;
  transition: transform .25s ease;
}
.blog-card:hover { transform: translateY(-2px); }
.blog-card-media {
  aspect-ratio: 1200 / 630;
  overflow: hidden;
  background: #eef3f7;
}
.blog-card-media img {
  width: 100%;
  height: 100%;
  object-fit: contain;
  background: #fff;
}
.blog-card-body { padding: 18px 0 0; }
.blog-card-title {
  margin: 0 0 12px;
  font-family: var(--sans);
  font-size: clamp(1.1rem, 1.2vw, 1.42rem);
  font-weight: 600;
  line-height: 1.3;
  letter-spacing: -0.01em;
  color: rgba(0,0,0,.9);
}
.blog-card-excerpt {
  margin: 0 0 16px;
  font-size: 1rem;
  line-height: 1.6;
  color: var(--muted);
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
.blog-card-meta {
  display: flex;
  align-items: center;
  gap: 12px;
  font-size: .875rem;
  color: var(--muted-2);
}

.footer {
  background: #f7f8f7;
  padding: 48px 0 28px;
  border-top: 1px solid var(--line);
}
.foot-wrap {
  width: min(1200px, calc(100% - 64px));
  margin: 0 auto;
}
.footer p, .footer a {
  color: #3d4d58;
  font-size: 14px;
  line-height: 1.6;
}
.footer a:hover { color: var(--ink); }
.foot-bottom {
  display: flex;
  flex-wrap: wrap;
  gap: 12px 24px;
  justify-content: space-between;
  align-items: center;
  margin-top: 28px;
  padding-top: 18px;
  border-top: 1px solid var(--line);
}
.foot-bottom p { margin: 0; font-size: 13px; }

@media (max-width: 980px) {
  .blog-grid { grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 36px; }
  .blogs { width: min(1200px, calc(100% - 48px)); padding: 48px 0 72px; }
}
@media (max-width: 720px) {
  .nav-shell nav { display: none; }
  .blog-grid { grid-template-columns: 1fr; gap: 32px; }
  .blogs { width: min(1200px, calc(100% - 32px)); padding: 36px 0 56px; }
  .blogs-head { margin-bottom: 32px; }
}
</style>
</head>
<body>
<header class="site-nav">
  <div class="nav-shell">
    <a class="brand" href="index.html" aria-label="Hospitality Cancún home"><img src="${logo}" alt="Hospitality Cancún — Medical tourism in Mexico"></a>
    <nav aria-label="Primary">
      <a href="index.html#about">About</a>
      <a href="index.html#services">Services</a>
      <a href="index.html#stem-cells">Stem Cells</a>
      <a href="index.html#prices">Prices</a>
      <a href="index.html#doctors">Doctors</a>
      <a href="index.html#patient-story">Patient Story</a>
      <a class="is-active" href="blogs.html" aria-current="page">Blogs</a>
    </nav>
    <a class="nav-cta" href="index.html#contact">Request Information</a>
  </div>
</header>

<main>
  <section class="blogs">
    <div class="blogs-head">
      <h1>Blog</h1>
    </div>
    <div class="blog-grid">
${cards}
    </div>
  </section>
</main>

<footer class="footer">
  <div class="foot-wrap">
    <a class="brand" href="index.html"><img src="${logo}" alt="Hospitality Cancún" style="height:40px;background:transparent"></a>
    <p style="margin-top:14px;max-width:52ch">HospitalityCancun.com is an information and referral service operated by Smart Strategic Marketing, LLC. We provide general information about medical travel and, with your permission, forward your inquiry to Grupo Médico Costamed.</p>
    <p style="margin-top:12px"><a href="privacy-notice.html">Privacy Notice</a></p>
    <div class="foot-bottom">
      <p>© 2026 Smart Strategic Marketing, LLC · HospitalityCancun.com. All rights reserved.</p>
    </div>
  </div>
</footer>
</body>
</html>
`

writeFileSync(join(root, 'blogs.html'), html)
console.log(`Wrote blogs.html with ${posts.length} posts`)
