import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import { Children, isValidElement, useRef, useState } from 'react'

const spring = { type: 'spring', damping: 22, stiffness: 220 }
const popSpring = { type: 'spring', damping: 16, stiffness: 280 }
const easeOut = [0.22, 1, 0.36, 1]

const viewport = { once: true, margin: '-10% 0px -8% 0px', amount: 0.2 }

const revealFrom = {
  up: { opacity: 0, y: 48 },
  down: { opacity: 0, y: -36 },
  left: { opacity: 0, x: -56 },
  right: { opacity: 0, x: 56 },
  pop: { opacity: 0, scale: 0.86, y: 28 },
  fade: { opacity: 0 },
}

const revealTo = {
  up: { opacity: 1, y: 0 },
  down: { opacity: 1, y: 0 },
  left: { opacity: 1, x: 0 },
  right: { opacity: 1, x: 0 },
  pop: { opacity: 1, scale: 1, y: 0 },
  fade: { opacity: 1 },
}

function useMotionSafe() {
  const reduce = useReducedMotion()
  return Boolean(reduce)
}

export function Reveal({
  children,
  className = '',
  delay = 0,
  from = 'up',
  duration = 0.7,
  immediate = false,
}) {
  const reduce = useMotionSafe()
  const variant = revealFrom[from] ? from : 'up'

  if (reduce) {
    return <div className={className}>{children}</div>
  }

  return (
    <motion.div
      className={className}
      initial={revealFrom[variant]}
      {...(immediate
        ? { animate: revealTo[variant] }
        : { whileInView: revealTo[variant], viewport })}
      transition={
        variant === 'pop'
          ? { ...popSpring, delay }
          : { duration, delay, ease: easeOut }
      }
    >
      {children}
    </motion.div>
  )
}

/** Parent for staggered slide / pop grid children */
export function StaggerGrid({
  children,
  className = '',
  from = 'pop',
  stagger = 0.08,
  delay = 0,
}) {
  const reduce = useMotionSafe()
  const variant = revealFrom[from] ? from : 'pop'
  const items = Children.toArray(children)

  if (reduce) {
    return <div className={className}>{children}</div>
  }

  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="show"
      viewport={viewport}
      variants={{
        hidden: {},
        show: {
          transition: { staggerChildren: stagger, delayChildren: delay },
        },
      }}
    >
      {items.map((child, i) => {
        const spanClass =
          isValidElement(child) && typeof child.props.className === 'string'
            ? child.props.className
                .split(/\s+/)
                .filter((c) => /^(?:sm:|md:|lg:)?col-span-/.test(c) || c === 'w-full')
                .join(' ')
            : ''
        return (
          <motion.div
            key={child.key ?? i}
            className={spanClass || undefined}
            variants={{
              hidden: revealFrom[variant],
              show: {
                ...revealTo[variant],
                transition: variant === 'pop' ? popSpring : { duration: 0.65, ease: easeOut },
              },
            }}
          >
            {child}
          </motion.div>
        )
      })}
    </motion.div>
  )
}

export function MotionButton({
  href = '#contact',
  children,
  shortLabel,
  variant = 'dark',
  className = '',
  onClick,
  target,
  rel,
}) {
  const soft = variant === 'soft'
  const light = variant === 'light'
  const label = (
    <>
      {shortLabel ? <span className="sm:hidden">{shortLabel}</span> : null}
      <span className={shortLabel ? 'hidden sm:inline' : undefined}>{children}</span>
    </>
  )
  return (
    <a
      href={href}
      onClick={onClick}
      target={target}
      rel={rel}
      className={[
        'group relative inline-flex shrink-0 items-center gap-2 overflow-hidden rounded-full pl-4 pr-1.5 py-1.5 text-sm font-semibold tracking-tight transition-shadow sm:gap-3 sm:pl-5 sm:pr-2 sm:py-2',
        soft ? 'bg-white text-ink border border-black/8 hover:shadow-lg' : '',
        light ? 'bg-white/15 text-white border border-white/25 backdrop-blur-md hover:bg-white/25' : '',
        !soft && !light ? 'bg-accent text-white hover:shadow-xl hover:shadow-accent/25' : '',
        className,
      ].join(' ')}
    >
      <span className="relative h-5 overflow-hidden">
        <span className="block transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:-translate-y-full">
          {label}
        </span>
        <span
          aria-hidden
          className="absolute inset-0 block translate-y-full transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-y-0"
        >
          {label}
        </span>
      </span>
      <span
        className={[
          'grid h-8 w-8 place-items-center rounded-full transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-x-0.5 group-hover:scale-105 sm:h-9 sm:w-9',
          soft ? 'bg-accent text-white' : '',
          light ? 'bg-white text-accent' : '',
          !soft && !light ? 'bg-white/15 text-white' : '',
        ].join(' ')}
      >
        <ArrowUpRight className="h-4 w-4" strokeWidth={2.2} />
      </span>
    </a>
  )
}

export function StaggerHeadline({ text, className = '' }) {
  const reduce = useMotionSafe()
  const words = text.split(' ')

  if (reduce) {
    return <h1 className={className}>{text}</h1>
  }

  return (
    <h1 className={className} aria-label={text}>
      {words.map((word, wi) => (
        <span key={wi} className="mr-[0.22em] inline-block whitespace-nowrap">
          {word.split('').map((char, ci) => (
            <motion.span
              key={`${wi}-${ci}`}
              className="inline-block"
              initial={{ opacity: 0, y: 24, filter: 'blur(4px)' }}
              animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              transition={{ ...spring, delay: Math.min((wi * 3 + ci) * 0.018, 0.9) }}
            >
              {char}
            </motion.span>
          ))}
        </span>
      ))}
    </h1>
  )
}

export function ScrubText({ text, className = '' }) {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start 0.85', 'end 0.35'],
  })
  const words = text.split(' ')
  return (
    <p ref={ref} className={className}>
      {words.map((word, i) => (
        <ScrubWord key={i} word={word} index={i} total={words.length} progress={scrollYProgress} />
      ))}
    </p>
  )
}

function ScrubWord({ word, index, total, progress }) {
  const start = index / total
  const end = (index + 1) / total
  const opacity = useTransform(progress, [start, end], [0.2, 1])
  return (
    <motion.span style={{ opacity }} className="inline-block mr-[0.28em]">
      {word}
    </motion.span>
  )
}

export function TrustWidget({ trust, tone = 'glass' }) {
  const glass = tone === 'glass'
  return (
    <div
      className={[
        'flex w-full min-w-[260px] max-w-md items-center gap-3 rounded-2xl p-3.5 sm:min-w-[300px] sm:gap-3.5 sm:p-4',
        glass
          ? 'bg-white/15 border border-white/20 backdrop-blur-md text-white'
          : 'bg-white border border-black/5 text-ink shadow-sm',
      ].join(' ')}
    >
      <div className="flex shrink-0 -space-x-2.5 sm:-space-x-3">
        {trust.avatars.map((src, i) => (
          <img
            key={i}
            src={src}
            alt=""
            className="h-9 w-9 rounded-full object-cover border-2 border-white/40 sm:h-10 sm:w-10"
          />
        ))}
      </div>
      <div className="min-w-0 flex-1">
        <p className="text-sm font-semibold leading-snug tracking-tight whitespace-normal sm:text-[15px]">
          {trust.title}
        </p>
        <p
          className={`mt-0.5 text-xs leading-snug sm:text-[13px] ${
            glass ? 'text-white/80' : 'text-slate-500'
          }`}
        >
          {trust.subtitle}
        </p>
      </div>
    </div>
  )
}

export function ZoomCard({ children, className = '', from = 'pop', delay = 0 }) {
  const reduce = useMotionSafe()
  const variant = revealFrom[from] ? from : 'pop'

  if (reduce) {
    return <div className={`group overflow-hidden ${className}`}>{children}</div>
  }

  return (
    <motion.div
      className={`group overflow-hidden ${className}`}
      initial={revealFrom[variant]}
      whileInView={revealTo[variant]}
      viewport={viewport}
      transition={
        variant === 'pop'
          ? { ...popSpring, delay }
          : { duration: 0.7, delay, ease: easeOut }
      }
    >
      {children}
    </motion.div>
  )
}

export function Marquee({ children, className = '', duration = 40 }) {
  const [paused, setPaused] = useState(false)
  return (
    <div
      className={`overflow-hidden ${className}`}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <motion.div
        className="marquee-track flex gap-5"
        animate={paused ? { x: 0 } : { x: ['0%', '-50%'] }}
        transition={
          paused
            ? { duration: 0.45, ease: easeOut }
            : { duration, ease: 'linear', repeat: Infinity }
        }
      >
        <div className="flex gap-5">{children}</div>
        <div className="flex gap-5" aria-hidden>
          {children}
        </div>
      </motion.div>
    </div>
  )
}

export { easeOut, spring, popSpring }
