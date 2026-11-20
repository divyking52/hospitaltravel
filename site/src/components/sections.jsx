import { AnimatePresence, motion } from 'framer-motion'
import { ArrowUpRight, Building2, ChevronLeft, ChevronRight, Crosshair, HandHeart, Menu, X } from 'lucide-react'
import { useEffect, useState } from 'react'
import { brand } from '../brand'
import {
  Marquee,
  MotionButton,
  Reveal,
  ScrubText,
  StaggerGrid,
  StaggerHeadline,
  TrustWidget,
  ZoomCard,
} from './ui'

const pillarIcons = [Crosshair, Building2, HandHeart]

export function Navbar() {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  const close = () => setOpen(false)

  return (
    <header className="sticky top-3 z-50 mx-3 sm:top-4 sm:mx-6">
      <div className="relative z-[60] mx-auto flex max-w-[1440px] items-center gap-2 rounded-full border border-black/5 bg-white/85 px-2 py-1.5 shadow-sm backdrop-blur-md sm:gap-4 sm:px-4 sm:py-2">
        <a href="#top" className="flex min-w-0 flex-1 items-center rounded-full bg-white px-2 py-1.5 sm:px-3" onClick={close}>
          <img src={brand.logo} alt={brand.name} className="h-7 w-auto max-w-[140px] object-contain sm:h-8 sm:max-w-none" />
        </a>
        <nav className="hidden items-center gap-1 lg:flex" aria-label="Primary">
          {brand.nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="rounded-full px-3 py-2 text-sm font-medium text-ink/70 transition-opacity hover:text-ink"
            >
              {item.label}
            </a>
          ))}
        </nav>
        {!open ? (
          <MotionButton href={brand.cta.href} shortLabel="Book" className="max-sm:text-[13px]">
            {brand.cta.label}
          </MotionButton>
        ) : null}
        <button
          type="button"
          className="grid h-10 w-10 place-items-center rounded-full bg-ink text-white lg:hidden"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="h-5 w-5" strokeWidth={2.2} /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open ? (
        <div className="fixed inset-0 z-50 bg-ink px-6 pb-10 pt-28 lg:hidden">
          <button
            type="button"
            onClick={close}
            className="absolute right-5 top-5 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2.5 text-sm font-semibold text-white backdrop-blur-md"
            aria-label="Exit menu"
          >
            Exit <X className="h-4 w-4" strokeWidth={2.2} />
          </button>

          <nav className="flex flex-col gap-1" aria-label="Mobile">
            {brand.nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={close}
                className="rounded-2xl px-2 py-3 text-3xl font-semibold tracking-tight text-white"
              >
                {item.label}
              </a>
            ))}
          </nav>
          <div className="absolute bottom-8 left-6 right-6">
            <MotionButton href={brand.cta.href} onClick={close} className="w-full justify-center">
              {brand.cta.label}
            </MotionButton>
          </div>
        </div>
      ) : null}
    </header>
  )
}

export function Hero() {
  const { hero } = brand
  return (
    <section id="top" className="mx-3 mt-3 sm:mx-6">
      <div className="relative mx-auto flex min-h-[calc(100svh-5.25rem)] max-w-[1440px] flex-col overflow-hidden rounded-[22px] sm:h-[85vh] sm:min-h-[640px] sm:rounded-[28px]">
        {hero.video ? (
          <video
            className="absolute inset-0 h-full w-full object-cover object-center"
            autoPlay
            muted
            loop
            playsInline
            poster={hero.image}
          >
            <source src={hero.video} type="video/mp4" />
          </video>
        ) : (
          <img src={hero.image} alt="" className="absolute inset-0 h-full w-full object-cover" />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/35 to-black/20" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-transparent to-transparent" />

        <div className="relative z-10 mt-auto flex w-full flex-col gap-4 p-4 pb-[max(1rem,env(safe-area-inset-bottom))] sm:gap-8 sm:p-10 lg:flex-row lg:items-end lg:justify-between lg:p-12">
          <div className="max-w-2xl">
            <Reveal immediate from="up" className="mb-2.5 flex flex-wrap gap-2 text-[10px] font-semibold uppercase tracking-[0.06em] sm:mb-4 sm:text-[11px]">
              <span className="rounded-full bg-mint px-3 py-1.5 text-accent">{hero.badgeStrong}</span>
              <span className="rounded-full border border-white/25 bg-white/10 px-3 py-1.5 text-white/90 backdrop-blur-md">
                {hero.badgeText}
              </span>
            </Reveal>
            <StaggerHeadline
              text={hero.headline}
              className="text-[1.5rem] font-semibold leading-[1.12] tracking-tight text-white sm:text-4xl md:text-6xl lg:text-7xl"
            />
            <Reveal immediate from="up" delay={0.15}>
              <p className="mt-2.5 text-[0.95rem] font-medium italic tracking-tight text-mint sm:mt-4 sm:text-2xl">
                {hero.accent}
              </p>
            </Reveal>
            <Reveal immediate from="up" delay={0.22}>
              <p className="mt-2.5 max-w-xl text-sm leading-relaxed text-white/85 sm:mt-4 sm:text-lg">
                {hero.subheadline}
              </p>
            </Reveal>
            <Reveal immediate from="up" delay={0.3} className="mt-4 flex flex-col gap-2.5 sm:mt-7 sm:flex-row sm:flex-wrap sm:gap-3">
              <MotionButton href="#contact" variant="light" className="w-full justify-center sm:w-auto">
                {hero.cta}
              </MotionButton>
              <a
                href={hero.ctaSecondaryHref}
                className="inline-flex w-full items-center justify-center rounded-full border border-white/40 bg-white/10 px-5 py-3 text-sm font-semibold text-white backdrop-blur-md transition hover:bg-white hover:text-accent sm:w-auto"
              >
                {hero.ctaSecondary}
              </a>
            </Reveal>
          </div>
          <Reveal immediate from="pop" delay={0.35} className="hidden w-full shrink-0 lg:block lg:w-[320px]">
            <TrustWidget trust={hero.trust} />
          </Reveal>
        </div>
      </div>
    </section>
  )
}

export function Manifesto() {
  const { about } = brand
  return (
    <section id="about" className="mx-auto max-w-[1440px] px-3 py-12 sm:px-6 sm:py-28">
      <Reveal from="left" className="mb-6 flex flex-wrap items-center gap-3 sm:mb-10 sm:gap-4">
        <div className="flex -space-x-3">
          {about.portraits.map((src, i) => (
            <img
              key={i}
              src={src}
              alt=""
              className="h-11 w-11 rounded-full object-cover border-2 border-white shadow-sm"
            />
          ))}
        </div>
        <span className="rounded-full border border-black/8 bg-white px-4 py-2 text-sm font-semibold tracking-tight">
          {about.experience}
        </span>
      </Reveal>

      <Reveal from="up">
        <p className="mb-4 text-xs font-semibold uppercase tracking-[0.14em] text-slate-500">
          {about.eyebrow}
        </p>
        <h2 className="mb-6 text-3xl font-semibold tracking-tight md:text-5xl">{about.title}</h2>
      </Reveal>

      <ScrubText
        text={about.manifesto}
        className="max-w-5xl text-xl font-medium leading-[1.3] tracking-tight text-ink sm:text-2xl md:text-4xl"
      />

      <Reveal from="up" className="mt-6 sm:mt-8" delay={0.1}>
        <MotionButton href="#contact" variant="soft" shortLabel="Concierge" className="max-sm:w-full max-sm:justify-center">
          {about.cta}
        </MotionButton>
      </Reveal>

      <StaggerGrid from="pop" stagger={0.12} className="h-scroll h-scroll--3 mt-10 -mx-3 px-3 sm:mx-0 sm:mt-16 sm:px-0">
        {about.pillars.map((pillar, i) => {
          const Icon = pillarIcons[i] || Crosshair
          return (
            <article
              key={pillar.title}
              className="card-grad-hover h-full rounded-[20px] border border-black/[0.06] bg-white p-4 sm:rounded-[24px] sm:p-7"
            >
              <span className="mb-4 grid h-10 w-10 place-items-center rounded-full bg-canvas text-accent sm:mb-5 sm:h-11 sm:w-11">
                <Icon className="h-5 w-5" strokeWidth={1.8} />
              </span>
              <h3 className="text-lg font-semibold tracking-tight sm:text-xl">{pillar.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600 sm:mt-3">{pillar.desc}</p>
            </article>
          )
        })}
      </StaggerGrid>
    </section>
  )
}

export function Bento() {
  const { location, offer } = brand.bento
  return (
    <section id="clinic" className="mx-auto max-w-[1440px] px-3 pb-10 sm:px-6 sm:pb-16">
      <div className="grid grid-cols-1 gap-3 sm:gap-5 lg:grid-cols-12">
        <ZoomCard
          from="left"
          className="relative min-h-[280px] rounded-[20px] sm:min-h-[360px] sm:rounded-[24px] lg:col-span-7 lg:min-h-[480px]"
        >
          <img
            src={location.image}
            alt=""
            className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
          <a
            href={location.href}
            className="absolute right-5 top-5 grid h-11 w-11 place-items-center rounded-full bg-white text-accent shadow-lg transition-transform hover:scale-105"
            aria-label={location.ctaLabel}
          >
            <ArrowUpRight className="h-5 w-5" />
          </a>
          <div className="absolute bottom-0 left-0 p-4 text-white sm:p-8">
            <h3 className="text-xl font-semibold tracking-tight sm:text-3xl">{location.title}</h3>
            <p className="mt-2 text-sm text-white/85 sm:text-base">{location.subtext}</p>
            <a href={location.href} className="mt-3 inline-flex text-sm font-semibold underline-offset-4 hover:underline sm:mt-4">
              {location.ctaLabel}
            </a>
          </div>
        </ZoomCard>

        <ZoomCard
          from="right"
          delay={0.12}
          className="relative min-h-[280px] overflow-hidden rounded-[20px] sm:min-h-[360px] sm:rounded-[24px] lg:col-span-5"
        >
          <img
            src={offer.image}
            alt=""
            className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#143a52]/90 via-[#143a52]/45 to-transparent" />
          <a
            href={offer.href}
            target="_blank"
            rel="noopener noreferrer"
            className="absolute right-5 top-5 grid h-11 w-11 place-items-center rounded-full bg-white text-accent shadow-lg"
            aria-label={offer.ctaLabel}
          >
            <ArrowUpRight className="h-5 w-5" />
          </a>
          <div className="absolute bottom-0 left-0 p-4 text-white sm:p-8">
            <p className="mb-2 text-xs font-semibold uppercase tracking-[0.12em] text-mint">{offer.title}</p>
            <p className="text-lg font-semibold leading-snug tracking-tight sm:text-2xl">{offer.subtext}</p>
            <a
              href={offer.href}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex text-sm font-semibold underline-offset-4 hover:underline"
            >
              {offer.ctaLabel}
            </a>
          </div>
        </ZoomCard>
      </div>
    </section>
  )
}

export function Services() {
  const { services } = brand
  return (
    <section id="services" className="mx-auto max-w-[1440px] px-3 py-12 sm:px-6 sm:py-24">
      <div className="mb-6 flex flex-col gap-4 sm:mb-10 sm:flex-row sm:items-end sm:justify-between sm:gap-5">
        <Reveal from="left" className="min-w-0">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.14em] text-slate-500">
            {services.eyebrow}
          </p>
          <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl md:text-5xl">{services.title}</h2>
          <p className="mt-3 max-w-xl text-sm text-slate-600 sm:text-base">{services.lede}</p>
        </Reveal>
        <Reveal from="right" delay={0.1}>
          <MotionButton href="#contact" variant="soft" shortLabel="Book" className="max-sm:w-full max-sm:justify-center">
            {services.cta}
          </MotionButton>
        </Reveal>
      </div>

      <StaggerGrid
        from="pop"
        stagger={0.09}
        className="h-scroll h-scroll--3 -mx-3 px-3 sm:mx-0 sm:px-0 lg:grid-cols-3"
      >
        {services.items.map((item) => (
          <article
            key={item.title}
            className="card-grad-hover group flex h-full flex-col overflow-hidden rounded-[20px] border border-slate-200/70 bg-white p-3.5 sm:rounded-[24px] sm:p-5"
          >
            <div className="mb-4 overflow-hidden rounded-2xl sm:mb-6">
              <img
                src={item.image}
                alt=""
                className="aspect-[16/10] w-full object-cover transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-105 sm:aspect-[16/11]"
              />
            </div>
            <h3 className="text-lg font-semibold tracking-tight sm:text-2xl">{item.title}</h3>
            <p className="mt-2 line-clamp-3 text-sm leading-relaxed text-slate-600 sm:mt-3 sm:line-clamp-none">
              {item.desc}
            </p>
            <p className="mt-3 text-sm font-semibold text-accent sm:mt-4">{item.note}</p>
            <a
              href={item.href}
              className="mt-3 inline-flex text-sm font-semibold text-leaf hover:text-accent sm:mt-4"
            >
              {item.linkLabel}
            </a>
          </article>
        ))}
      </StaggerGrid>
    </section>
  )
}

const tripSwipeVariants = {
  enter: (dir) => ({ x: dir > 0 ? 280 : -280, opacity: 0, rotate: dir > 0 ? 8 : -8 }),
  center: { x: 0, opacity: 1, rotate: 0 },
  exit: (dir) => ({ x: dir < 0 ? 280 : -280, opacity: 0, rotate: dir < 0 ? 8 : -8 }),
}

function TripStackCard({ card }) {
  return (
    <>
      <div className="relative h-[48%] min-h-[160px] overflow-hidden sm:h-[52%]">
        <img
          src={card.image}
          alt={card.title}
          className="absolute inset-0 h-full w-full object-cover"
          draggable={false}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent" />
      </div>
      <div className="flex flex-1 flex-col p-5 sm:p-6">
        <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-slate-500">{card.note}</p>
        <h3 className="mt-1.5 text-2xl font-semibold tracking-tight text-ink">{card.title}</h3>
        <p className="mt-2 text-sm leading-relaxed text-slate-600">{card.desc}</p>
        <a
          href={card.href}
          className="mt-auto inline-flex items-center gap-1.5 pt-4 text-sm font-semibold text-leaf hover:text-accent"
          onPointerDown={(e) => e.stopPropagation()}
        >
          {card.linkLabel} <ArrowUpRight className="h-4 w-4" />
        </a>
      </div>
    </>
  )
}

function TripSwipeStack({ cards }) {
  const [[page, direction], setPage] = useState([0, 0])
  const total = cards.length
  const index = ((page % total) + total) % total
  const card = cards[index]

  const paginate = (dir) => setPage(([p]) => [p + dir, dir])

  return (
    <div className="mx-auto w-full max-w-md sm:max-w-lg">
      <div className="relative mx-auto h-[440px] w-full sm:h-[480px]">
        {/* stacked peeks behind the front card */}
        {[2, 1].map((depth) => {
          const peek = cards[(index + depth) % total]
          return (
            <div
              key={`${peek.title}-peek-${depth}`}
              aria-hidden
              className="pointer-events-none absolute inset-x-0 top-0 flex h-[calc(100%-28px)] flex-col overflow-hidden rounded-[22px] border border-black/[0.06] bg-white shadow-[0_12px_28px_rgba(20,58,82,.1)] sm:rounded-[26px]"
              style={{
                zIndex: 10 - depth,
                transform: `translateY(${depth * 14}px) scale(${1 - depth * 0.05})`,
                opacity: 1 - depth * 0.18,
              }}
            >
              <TripStackCard card={peek} />
            </div>
          )
        })}

        <AnimatePresence initial={false} custom={direction} mode="popLayout">
          <motion.article
            key={page}
            custom={direction}
            variants={tripSwipeVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ type: 'spring', stiffness: 360, damping: 32 }}
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={0.85}
            onDragEnd={(_, info) => {
              if (info.offset.x < -100 || info.velocity.x < -500) paginate(1)
              else if (info.offset.x > 100 || info.velocity.x > 500) paginate(-1)
            }}
            className="absolute inset-x-0 top-0 z-20 flex h-[calc(100%-28px)] cursor-grab flex-col overflow-hidden rounded-[22px] border border-black/[0.08] bg-white shadow-[0_22px_50px_rgba(20,58,82,.16)] active:cursor-grabbing sm:rounded-[26px]"
          >
            <TripStackCard card={card} />
          </motion.article>
        </AnimatePresence>
      </div>

      <div className="mt-2 flex items-center justify-between gap-3">
        <button
          type="button"
          onClick={() => paginate(-1)}
          className="grid h-10 w-10 place-items-center rounded-full border border-black/10 bg-white text-accent transition hover:border-mint/40"
          aria-label="Previous card"
        >
          <ChevronLeft className="h-5 w-5" />
        </button>

        <div className="flex items-center gap-2" role="tablist" aria-label="Trip cards">
          {cards.map((item, i) => (
            <button
              key={item.title}
              type="button"
              role="tab"
              aria-selected={i === index}
              aria-label={item.title}
              onClick={() => setPage([i, i > index ? 1 : -1])}
              className={[
                'h-2 rounded-full transition-all',
                i === index ? 'w-7 bg-accent' : 'w-2 bg-slate-300 hover:bg-slate-400',
              ].join(' ')}
            />
          ))}
        </div>

        <button
          type="button"
          onClick={() => paginate(1)}
          className="grid h-10 w-10 place-items-center rounded-full border border-black/10 bg-white text-accent transition hover:border-mint/40"
          aria-label="Next card"
        >
          <ChevronRight className="h-5 w-5" />
        </button>
      </div>

      <p className="mt-3 text-center text-xs text-slate-500">
        {index + 1} / {total} · Swipe or use arrows
      </p>
    </div>
  )
}

export function TripParallax() {
  const { trip } = brand

  return (
    <section id={trip.id} className="mx-auto max-w-[1440px] px-3 py-10 sm:px-6 sm:py-16">
      <div className="mb-6 flex flex-col gap-4 sm:mb-8 sm:flex-row sm:items-end sm:justify-between">
        <Reveal from="left" className="max-w-2xl">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.14em] text-slate-500">
            {trip.eyebrow}
          </p>
          <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl md:text-5xl">
            {trip.title}{' '}
            <span className="bg-[linear-gradient(110deg,#5eb8e8_0%,#5fad8f_100%)] bg-clip-text italic text-transparent">
              {trip.titleAccent}
            </span>
          </h2>
          <p className="mt-3 text-sm text-slate-600 sm:text-base">{trip.lede}</p>
        </Reveal>
        <Reveal from="right" delay={0.08}>
          <MotionButton
            href="https://travelmexico.travel/"
            variant="soft"
            shortLabel="Trip"
            className="max-sm:w-full max-sm:justify-center"
            target="_blank"
            rel="noopener noreferrer"
          >
            Optional trip planner
          </MotionButton>
        </Reveal>
      </div>

      <Reveal from="up">
        <TripSwipeStack cards={trip.cards} />
      </Reveal>
    </section>
  )
}

export function Finance() {
  const { finance } = brand

  return (
    <section id={finance.id} className="mx-auto max-w-[1440px] px-3 pb-10 sm:px-6 sm:pb-16">
      <Reveal
        from="pop"
        className="card-grad-hover card-grad-hover--dark relative overflow-hidden rounded-[22px] border border-white/20 bg-[linear-gradient(160deg,#143a52_0%,#1a4660_100%)] px-5 py-8 text-center text-white sm:rounded-[28px] sm:px-10 sm:py-11"
      >
        <span
          aria-hidden
          className="pointer-events-none absolute -left-16 -top-16 h-48 w-48 rounded-full bg-mint/25 blur-3xl"
        />
        <span
          aria-hidden
          className="pointer-events-none absolute -bottom-20 -right-16 h-56 w-56 rounded-full bg-leaf/20 blur-3xl"
        />

        <div className="relative z-10 mx-auto max-w-2xl">
          <span className="inline-block rounded-full border border-white/30 bg-white/15 px-3.5 py-1.5 text-[11px] font-bold uppercase tracking-[0.12em]">
            {finance.pill}
          </span>
          <h2 className="mt-4 text-2xl font-semibold tracking-tight sm:text-3xl md:text-4xl">
            {finance.title}{' '}
            <span className="bg-[linear-gradient(110deg,#e8f6ff_0%,#5eb8e8_45%,#5fad8f_100%)] bg-clip-text text-transparent">
              {finance.titleAccent}
            </span>
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-sm leading-relaxed text-white/85 sm:text-base">
            {finance.lede}
          </p>

          <div className="mx-auto mt-6 grid max-w-lg gap-3 rounded-[20px] bg-white p-4 text-left text-ink sm:grid-cols-2 sm:p-5">
            {finance.estimates.map((item) => (
              <div key={item.label} className="max-sm:text-center">
                <span className="block text-[12px] font-semibold text-slate-500">{item.label}</span>
                <strong className="mt-1 block text-2xl font-semibold tracking-tight">{item.value}</strong>
              </div>
            ))}
            <div className="flex justify-center sm:col-span-2">
              <MotionButton
                href={finance.href}
                target="_blank"
                rel="noopener noreferrer"
                shortLabel="Choose payment"
                className="w-full justify-center sm:w-auto"
              >
                {finance.cta}
              </MotionButton>
            </div>
          </div>

          <p className="mt-4 text-xs text-white/70 sm:text-sm">{finance.note}</p>
        </div>
      </Reveal>
    </section>
  )
}

export function StemBanner() {
  const { stem } = brand
  const [active, setActive] = useState(stem.packageTabs[0].id)
  const tab = stem.packageTabs.find((t) => t.id === active) || stem.packageTabs[0]

  return (
    <section id={stem.id} className="mx-auto max-w-[1440px] px-3 py-12 sm:px-6 sm:py-20">
      <Reveal from="up" className="rounded-[20px] border border-black/[0.06] bg-white p-5 sm:rounded-[28px] sm:p-10">
        <p className="text-xs font-semibold uppercase tracking-[0.14em] text-slate-500">{stem.eyebrow}</p>
        <h2 className="mt-3 text-2xl font-semibold tracking-tight sm:text-3xl md:text-5xl">{stem.title}</h2>
        <p className="mt-4 max-w-4xl text-sm leading-relaxed text-slate-600 sm:mt-5 sm:text-lg">{stem.lead}</p>
        {stem.packageNote ? (
          <p className="mt-3 max-w-4xl text-sm leading-relaxed text-slate-500">{stem.packageNote}</p>
        ) : null}
      </Reveal>

      <Reveal from="up" delay={0.08} className="mt-8 sm:mt-10">
        <div
          role="tablist"
          aria-label="Therapy type"
          className="flex w-full max-w-full flex-nowrap gap-1 overflow-x-auto rounded-full border border-accent/10 bg-accent/[0.05] p-1.5 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {stem.packageTabs.map((item) => {
            const selected = item.id === active
            return (
              <button
                key={item.id}
                type="button"
                role="tab"
                id={`stem-tab-${item.id}`}
                aria-selected={selected}
                aria-controls={`stem-panel-${item.id}`}
                onClick={() => setActive(item.id)}
                className={[
                  'shrink-0 whitespace-nowrap rounded-full px-3 py-2 text-[12px] font-semibold tracking-tight transition sm:px-3.5 sm:py-2.5 sm:text-[13px]',
                  selected
                    ? 'bg-ink text-white shadow-[0_8px_18px_rgba(20,58,82,.18)]'
                    : 'text-slate-500 hover:bg-white/70 hover:text-ink',
                ].join(' ')}
              >
                {item.label}
              </button>
            )
          })}
        </div>
      </Reveal>

      <div
        role="tabpanel"
        id={`stem-panel-${tab.id}`}
        aria-labelledby={`stem-tab-${tab.id}`}
        className="mt-6 sm:mt-8"
      >
        <StaggerGrid
          key={tab.id}
          from="pop"
          stagger={0.1}
          className="h-scroll h-scroll--3 -mx-3 px-3 sm:mx-0 sm:px-0"
        >
          {tab.tiers.map((tier) => (
            <article
              key={tier.name}
              className={[
                'card-grad-hover flex h-full flex-col overflow-hidden rounded-[20px] border p-4 sm:rounded-[28px] sm:p-6',
                tier.featured
                  ? 'card-grad-hover--dark border-transparent bg-[linear-gradient(165deg,#143a52_0%,#1a5f8a_52%,#143a52_100%)] text-white shadow-[0_18px_42px_rgba(20,58,82,.2)]'
                  : 'border-accent/10 bg-[linear-gradient(180deg,#fff_0%,#f7fafc_100%)] shadow-[0_12px_28px_rgba(20,58,82,.06)]',
              ].join(' ')}
            >
              {tier.featured ? (
                <span className="mb-3 w-fit rounded-full border border-white/25 bg-white/10 px-2.5 py-1 text-[11px] font-bold uppercase tracking-[0.1em] text-mint">
                  Most popular
                </span>
              ) : null}
              <h3 className="text-2xl font-semibold tracking-tight">{tier.name}</h3>
              <p
                className={[
                  'mt-2 text-sm font-semibold leading-snug',
                  tier.featured ? 'text-[#9fd6c0]' : 'text-leaf',
                ].join(' ')}
              >
                {tier.dose}
              </p>
              <p
                className={[
                  'mt-1 text-sm',
                  tier.featured ? 'text-white/70' : 'text-slate-500',
                ].join(' ')}
              >
                {tier.time}
              </p>
              <ul
                className={[
                  'mt-5 space-y-2 border-t pt-4 text-sm leading-relaxed',
                  tier.featured ? 'border-white/15 text-white/90' : 'border-black/[0.06] text-slate-600',
                ].join(' ')}
              >
                {tier.includes.map((item) => (
                  <li key={item} className="flex gap-2.5">
                    <span
                      className={[
                        'mt-0.5 grid h-3.5 w-3.5 shrink-0 place-items-center rounded-full text-[9px] font-bold text-white',
                        tier.featured ? 'bg-leaf' : 'bg-leaf',
                      ].join(' ')}
                    >
                      ✓
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </StaggerGrid>
      </div>

      <Reveal
        from="up"
        delay={0.1}
        className="mt-8 flex flex-col gap-4 rounded-[20px] border border-black/[0.06] bg-white p-5 sm:mt-10 sm:flex-row sm:items-center sm:justify-between sm:rounded-[24px] sm:p-7"
      >
        <p className="max-w-xl text-sm text-slate-600 sm:text-base">{stem.ctaNote}</p>
        <MotionButton href="#contact" className="max-sm:w-full max-sm:justify-center">
          {stem.cta}
        </MotionButton>
      </Reveal>
    </section>
  )
}

export function Prices() {
  const { prices } = brand
  const [active, setActive] = useState(prices.tabs[0].id)
  const [showAll, setShowAll] = useState(false)
  const tab = prices.tabs.find((t) => t.id === active) || prices.tabs[0]
  const featured = tab.items.find((item) => item.featured)
  const rest = tab.items.filter((item) => !item.featured)
  // Keep the first viewport to 4 packages total (featured counts as one)
  const previewLimit = featured ? 3 : 4
  const visibleRest = showAll ? rest : rest.slice(0, previewLimit)
  const hiddenCount = Math.max(0, rest.length - previewLimit)

  useEffect(() => {
    setShowAll(false)
  }, [active])

  return (
    <section id={prices.id} className="relative overflow-clip bg-accent py-14 text-white sm:py-24">
      <span
        aria-hidden
        className="pointer-events-none absolute -left-24 top-0 h-[420px] w-[420px] rounded-full bg-mint/20 blur-3xl"
      />
      <span
        aria-hidden
        className="pointer-events-none absolute -right-16 bottom-10 h-[360px] w-[360px] rounded-full bg-leaf/20 blur-3xl"
      />

      <div className="relative mx-auto max-w-[1440px] px-3 sm:px-6">
        <Reveal from="left" className="mb-8 max-w-3xl sm:mb-12">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.16em] text-mint">
            {prices.eyebrow}
          </p>
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl md:text-6xl">
            {prices.title}{' '}
            <span className="italic text-mint">{prices.titleAccent}</span>
          </h2>
          <p className="mt-4 max-w-xl text-sm leading-relaxed text-white/75 sm:text-base">
            {prices.lede}
          </p>
          {prices.includesNote ? (
            <p className="mt-3 max-w-xl text-xs leading-relaxed text-white/65 sm:text-sm">{prices.includesNote}</p>
          ) : null}
        </Reveal>

        <div className="overflow-hidden rounded-[24px] bg-canvas text-ink shadow-[0_30px_80px_rgba(0,0,0,.25)] sm:rounded-[32px]">
          {/* Specialty switcher */}
          <div className="border-b border-black/[0.06] bg-white px-3 py-3 sm:px-5 sm:py-4">
            <div
              role="tablist"
              aria-label="Specialty"
              className="-mx-1 flex gap-1 overflow-x-auto px-1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
            >
              {prices.tabs.map((item) => {
                const selected = item.id === active
                return (
                  <button
                    key={item.id}
                    type="button"
                    role="tab"
                    id={`tab-${item.id}`}
                    aria-selected={selected}
                    aria-controls={`panel-${item.id}`}
                    onClick={() => {
                      setActive(item.id)
                      setShowAll(false)
                    }}
                    className={[
                      'shrink-0 rounded-full px-4 py-2.5 text-[13px] font-semibold tracking-tight transition',
                      selected
                        ? 'bg-accent text-white'
                        : 'text-slate-500 hover:bg-canvas hover:text-ink',
                    ].join(' ')}
                  >
                    {item.label}
                  </button>
                )
              })}
            </div>
          </div>

          <div
            role="tabpanel"
            id={`panel-${tab.id}`}
            aria-labelledby={`tab-${tab.id}`}
            className="p-3 sm:p-5 lg:p-7"
          >
            <div className="mb-5 flex items-end justify-between gap-3">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-slate-500">
                  {tab.label}
                </p>
                <p className="mt-1 text-sm text-slate-600">
                  {tab.items.length} packages · transparent USD pricing
                </p>
              </div>
              <MotionButton href="#contact" variant="soft" shortLabel="Quote" className="max-sm:hidden">
                {prices.cta}
              </MotionButton>
            </div>

            {featured ? (
              <Reveal from="pop" className="mb-4 overflow-hidden rounded-[20px] bg-accent text-white sm:mb-5 sm:rounded-[24px]">
                <div className="relative grid gap-5 p-5 sm:grid-cols-[1.4fr_auto] sm:items-end sm:gap-8 sm:p-7">
                  <span
                    aria-hidden
                    className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-mint/25 blur-2xl"
                  />
                  <div className="relative">
                    <span className="inline-flex rounded-full border border-white/20 bg-white/10 px-3 py-1 text-[11px] font-bold uppercase tracking-[0.1em] text-mint">
                      {featured.label || 'Featured'}
                    </span>
                    <h3 className="mt-3 text-2xl font-semibold tracking-tight sm:text-3xl">
                      {featured.name}
                    </h3>
                    {featured.stay ? (
                      <p className="mt-2 text-sm text-white/70">{featured.stay}</p>
                    ) : null}
                  </div>
                  <div className="relative flex flex-col items-start gap-3 sm:items-end">
                    <p className="text-[clamp(2rem,4vw,2.75rem)] font-semibold tracking-[-0.04em] leading-none">
                      {featured.amount}
                      <span className="ml-1.5 text-base font-semibold text-white/60">USD</span>
                    </p>
                    <a
                      href="#contact"
                      className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2.5 text-sm font-semibold text-accent transition hover:bg-mint"
                    >
                      {prices.cta} <ArrowUpRight className="h-4 w-4" />
                    </a>
                  </div>
                </div>
              </Reveal>
            ) : null}

            <StaggerGrid
              key={`${tab.id}-${showAll ? 'all' : 'preview'}`}
              from="up"
              stagger={0.04}
              className="overflow-hidden rounded-[18px] border border-black/[0.06] bg-white sm:rounded-[20px]"
            >
              {visibleRest.map((item, i) => (
                <article
                  key={item.name}
                  className={[
                    'group grid gap-3 px-4 py-4 transition-colors hover:bg-[linear-gradient(90deg,rgba(94,184,232,.08),rgba(95,173,143,.06),transparent)] sm:grid-cols-[minmax(0,1.4fr)_auto_auto] sm:items-center sm:gap-6 sm:px-5 sm:py-5',
                    i !== visibleRest.length - 1 ? 'border-b border-black/[0.05]' : '',
                  ].join(' ')}
                >
                  <div className="min-w-0">
                    <h3 className="text-base font-semibold tracking-tight text-ink sm:text-lg">
                      {item.name}
                    </h3>
                    {item.stay ? (
                      <p className="mt-1 text-xs font-medium text-slate-500 sm:text-sm">{item.stay}</p>
                    ) : (
                      <p className="mt-1 text-xs font-medium text-slate-400">Outpatient package</p>
                    )}
                  </div>
                  <p className="text-xl font-semibold tracking-tight text-accent sm:justify-self-end sm:text-2xl">
                    {item.amount}
                    <span className="ml-1 text-xs font-semibold text-slate-400">USD</span>
                  </p>
                  <a
                    href="#contact"
                    className="inline-flex w-fit items-center gap-1.5 text-sm font-semibold text-leaf transition group-hover:text-accent sm:justify-self-end"
                  >
                    Quote <ArrowUpRight className="h-4 w-4" />
                  </a>
                </article>
              ))}
            </StaggerGrid>

            {hiddenCount > 0 ? (
              <div className="mt-4 flex justify-center">
                <button
                  type="button"
                  onClick={() => setShowAll((v) => !v)}
                  className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white px-5 py-2.5 text-sm font-semibold text-accent transition hover:border-mint/40 hover:bg-canvas"
                  aria-expanded={showAll}
                >
                  {showAll ? 'Show fewer packages' : `View more packages (${hiddenCount})`}
                  <ArrowUpRight
                    className={`h-4 w-4 transition ${showAll ? 'rotate-90' : 'rotate-45'}`}
                  />
                </button>
              </div>
            ) : null}
          </div>

          <div className="border-t border-black/[0.06] bg-white px-4 py-4 sm:px-6 sm:py-5">
            <details className="group">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-3 text-sm font-semibold tracking-tight text-ink marker:content-none [&::-webkit-details-marker]:hidden">
                {prices.notIncludedTitle}
                <span className="grid h-8 w-8 place-items-center rounded-full bg-canvas text-accent transition group-open:rotate-45">
                  +
                </span>
              </summary>
              <ul className="mt-4 grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
                {prices.notIncluded.map((item) => (
                  <li key={item} className="flex gap-2 text-sm text-slate-600">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-slate-300" />
                    {item}
                  </li>
                ))}
              </ul>
            </details>
            <p className="mt-4 text-xs text-slate-500 sm:text-sm">{prices.fine}</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export function Spotlight() {
  const { spotlight } = brand
  const [open, setOpen] = useState(false)

  return (
    <section id="stories" className="mx-auto max-w-[1440px] px-3 py-10 sm:px-6 sm:py-16">
      <Reveal from="up" className="mb-6 text-center sm:mb-8">
        <p className="text-xs font-semibold uppercase tracking-[0.14em] text-slate-500">{spotlight.eyebrow}</p>
        <h2 className="mt-3 text-2xl font-semibold tracking-tight sm:text-3xl md:text-5xl">{spotlight.title}</h2>
      </Reveal>

      <Reveal from="pop" delay={0.08}>
      <div
        role="button"
        tabIndex={0}
        aria-expanded={open}
        aria-label={`${spotlight.author} patient story. Hover or tap to read more.`}
        onClick={() => {
          if (window.matchMedia('(hover: none)').matches) setOpen((v) => !v)
        }}
        onMouseLeave={() => setOpen(false)}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault()
            setOpen((v) => !v)
          }
        }}
        className={[
          'group relative min-h-[420px] cursor-pointer overflow-hidden rounded-[20px] outline-none sm:min-h-[480px] sm:rounded-[28px]',
          'focus-visible:ring-2 focus-visible:ring-mint focus-visible:ring-offset-2',
          open ? 'is-open' : '',
        ].join(' ')}
      >
        <img
          src={spotlight.image}
          alt="Gilbert Trill patient story at Costamed"
          className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-105 group-[.is-open]:scale-105"
        />

        {/* resting shade */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent transition-opacity duration-500 group-hover:opacity-0 group-[.is-open]:opacity-0" />

        {/* details shade */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/92 via-black/70 to-black/35 opacity-0 transition-opacity duration-500 group-hover:opacity-100 group-[.is-open]:opacity-100 sm:bg-gradient-to-r sm:from-black/90 sm:via-black/65 sm:to-black/20" />

        {/* front content */}
        <div className="relative z-10 flex min-h-[420px] flex-col justify-between p-5 text-white transition-all duration-500 group-hover:pointer-events-none group-hover:translate-y-3 group-hover:opacity-0 group-[.is-open]:pointer-events-none group-[.is-open]:translate-y-3 group-[.is-open]:opacity-0 sm:min-h-[480px] sm:p-10">
          <span className="w-fit rounded-full border border-white/20 bg-white/15 px-3 py-1.5 text-xs font-semibold backdrop-blur-md sm:px-4 sm:py-2 sm:text-sm">
            {spotlight.videoLabel}
          </span>
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.12em] text-white/75">
              Real Patient Experience
            </p>
            <h3 className="mt-2 text-2xl font-semibold tracking-tight sm:text-3xl">{spotlight.author}</h3>
            <p className="mt-1 text-sm text-white/80">{spotlight.role}</p>
            <span className="mt-5 inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-3 py-2 text-xs font-semibold backdrop-blur-md">
              <span className="grid h-5 w-5 place-items-center rounded-full bg-mint text-accent text-[11px]">+</span>
              Hover or tap to read more
            </span>
          </div>
        </div>

        {/* details panel */}
        <div className="absolute inset-0 z-20 flex flex-col justify-end p-5 text-white opacity-0 translate-y-4 transition-all duration-500 pointer-events-none group-hover:pointer-events-auto group-hover:translate-y-0 group-hover:opacity-100 group-[.is-open]:pointer-events-auto group-[.is-open]:translate-y-0 group-[.is-open]:opacity-100 sm:p-10 lg:max-w-2xl lg:justify-center">
          <blockquote>
            <p className="text-lg font-medium leading-snug tracking-tight sm:text-2xl">
              “{spotlight.quote}”
            </p>
            <cite className="mt-4 block text-sm not-italic">
              <span className="font-semibold">{spotlight.author}</span>
              <span className="mt-1 block text-white/75">{spotlight.role}</span>
            </cite>
          </blockquote>
          <p className="mt-4 text-sm leading-relaxed text-white/85 sm:mt-5">{spotlight.lede}</p>

          <div className="-mx-1 mt-5 overflow-x-auto px-1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            <div className="flex w-max flex-nowrap gap-2">
              {spotlight.tags.map((tag) => (
                <span
                  key={tag}
                  className="shrink-0 rounded-full border border-white/25 bg-white/10 px-3 py-1.5 text-xs font-semibold whitespace-nowrap"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <div className="mt-5 flex flex-wrap items-center gap-3">
            <a
              href={spotlight.videoHref}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="inline-flex items-center gap-2 text-sm font-semibold underline-offset-4 hover:underline"
            >
              Open on YouTube <ArrowUpRight className="h-4 w-4" />
            </a>
            <button
              type="button"
              className="rounded-full border border-white/25 bg-white/10 px-3 py-1.5 text-xs font-semibold backdrop-blur-md sm:hidden"
              onClick={(e) => {
                e.stopPropagation()
                setOpen(false)
              }}
            >
              Close
            </button>
          </div>
        </div>
      </div>
      </Reveal>
    </section>
  )
}

export function Team() {
  const { team } = brand
  return (
    <section id="team" className="overflow-hidden py-12 sm:py-24">
      <div className="mx-auto mb-6 max-w-[1440px] px-3 sm:mb-10 sm:px-6">
        <Reveal from="left">
          <span className="rounded-full border border-black/8 bg-white px-4 py-1.5 text-sm font-semibold">
            {team.badge}
          </span>
          <h2 className="mt-4 text-2xl font-semibold tracking-tight sm:text-3xl md:text-5xl">{team.title}</h2>
          <p className="mt-3 max-w-2xl text-sm text-slate-600 sm:text-base">{team.lede}</p>
        </Reveal>
      </div>

      <Reveal from="up" delay={0.1}>
        <Marquee duration={50} className="pb-4">
          {team.members.map((member) => (
            <article
              key={member.name}
              className="group w-[180px] shrink-0 overflow-hidden rounded-[20px] border border-black/[0.06] bg-white p-2.5 sm:w-[280px] sm:rounded-[24px] sm:p-3"
            >
              <div className="overflow-hidden rounded-2xl">
                <img
                  src={member.image}
                  alt={member.name}
                  className="aspect-[3/4] w-full object-cover transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-105"
                />
              </div>
              <div className="px-2 pb-2 pt-4">
                <h3 className="font-semibold tracking-tight">{member.name}</h3>
                <p className="mt-1 text-sm text-slate-500">{member.role}</p>
              </div>
            </article>
          ))}
        </Marquee>
      </Reveal>
    </section>
  )
}

export function PreFooter() {
  const { prefooter, hero } = brand
  return (
    <section id="contact" className="mx-3 mb-4 sm:mx-6 sm:mb-6">
      <Reveal from="up" className="relative mx-auto min-h-[380px] max-w-[1440px] overflow-hidden rounded-[20px] sm:min-h-[420px] sm:rounded-[28px]">
        <img src={prefooter.image} alt="" className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/45 to-black/20" />
        <div className="relative z-10 flex min-h-[380px] flex-col items-start justify-end gap-5 p-5 text-white sm:min-h-[420px] sm:gap-6 sm:p-12 lg:flex-row lg:items-end lg:justify-between">
          <Reveal from="left" delay={0.1} className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-white/70">
              {prefooter.eyebrow}
            </p>
            <h2 className="mt-3 text-2xl font-semibold tracking-tight sm:text-5xl">{prefooter.title}</h2>
            <p className="mt-3 text-sm leading-relaxed text-white/85 sm:mt-4 sm:text-base">{prefooter.lede}</p>
          </Reveal>
          <Reveal from="pop" delay={0.2} className="flex w-full flex-col gap-3 sm:w-auto sm:items-end sm:gap-4">
            <TrustWidget trust={hero.trust} />
            <MotionButton href="#contact" variant="light" shortLabel="Book" className="w-full justify-center sm:w-auto">
              {prefooter.cta}
            </MotionButton>
          </Reveal>
        </div>
      </Reveal>
    </section>
  )
}

export function Footer() {
  const { footer, name, logo } = brand
  return (
    <footer className="bg-ink text-white">
      <div className="mx-auto grid max-w-[1440px] gap-10 px-3 py-14 sm:px-6 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <img src={logo} alt={name} className="h-9 brightness-0 invert" />
          <p className="mt-4 text-sm leading-relaxed text-white/70">{footer.blurb}</p>
        </div>
        <div>
          <h3 className="text-xs font-semibold uppercase tracking-[0.14em] text-white/50">Navigation</h3>
          <ul className="mt-4 space-y-2 text-sm text-white/85">
            {footer.links.map((l) => (
              <li key={l.href}>
                <a href={l.href} className="hover:text-white">
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="text-xs font-semibold uppercase tracking-[0.14em] text-white/50">
            Costamed Hospital Centers
          </h3>
          <ul className="mt-4 space-y-2 text-sm text-white/85">
            {footer.hospitals.map((h) => (
              <li key={h}>{h}</li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="text-xs font-semibold uppercase tracking-[0.14em] text-white/50">Contact</h3>
          <ul className="mt-4 space-y-2 text-sm text-white/85">
            <li>
              <a href={`mailto:${footer.contact.email}`}>{footer.contact.email}</a>
            </li>
            <li>
              <a href={`tel:${footer.contact.phoneUS.replace(/\s/g, '')}`}>
                Toll-Free USA & Canada {footer.contact.phoneUS}
              </a>
            </li>
            <li>
              <a href={`tel:${footer.contact.phoneIntl.replace(/\s/g, '')}`}>
                International Direct {footer.contact.phoneIntl}
              </a>
            </li>
            <li>{footer.contact.address}</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="mx-auto max-w-[1440px] px-3 py-5 sm:px-6">
          <p className="text-xs leading-relaxed text-white/45">{footer.fine}</p>
          <p className="mt-4 text-xs text-white/50">{footer.copyright}</p>
        </div>
      </div>
    </footer>
  )
}
