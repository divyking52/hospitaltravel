import { createContext, useCallback, useContext, useEffect, useId, useState } from 'react'
import { X } from 'lucide-react'

const US_STATES = [
  'Alabama', 'Alaska', 'Arizona', 'Arkansas', 'California', 'Colorado', 'Connecticut', 'Delaware',
  'District of Columbia', 'Florida', 'Georgia', 'Hawaii', 'Idaho', 'Illinois', 'Indiana', 'Iowa',
  'Kansas', 'Kentucky', 'Louisiana', 'Maine', 'Maryland', 'Massachusetts', 'Michigan', 'Minnesota',
  'Mississippi', 'Missouri', 'Montana', 'Nebraska', 'Nevada', 'New Hampshire', 'New Jersey', 'New Mexico',
  'New York', 'North Carolina', 'North Dakota', 'Ohio', 'Oklahoma', 'Oregon', 'Pennsylvania', 'Rhode Island',
  'South Carolina', 'South Dakota', 'Tennessee', 'Texas', 'Utah', 'Vermont', 'Virginia', 'Washington',
  'West Virginia', 'Wisconsin', 'Wyoming',
]

const ContactCtx = createContext({ openContact: () => {}, closeContact: () => {}, isOpen: false })

export function useContactModal() {
  return useContext(ContactCtx)
}

export function ContactModalProvider({ children }) {
  const [open, setOpen] = useState(false)
  const openContact = useCallback(() => setOpen(true), [])
  const closeContact = useCallback(() => setOpen(false), [])

  useEffect(() => {
    if (!open) return undefined
    const prev = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    const onKey = (e) => {
      if (e.key === 'Escape') closeContact()
    }
    window.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = prev
      window.removeEventListener('keydown', onKey)
    }
  }, [open, closeContact])

  // Any #contact link opens the popup
  useEffect(() => {
    const onClick = (e) => {
      const a = e.target.closest?.('a[href="#contact"]')
      if (!a) return
      e.preventDefault()
      openContact()
    }
    document.addEventListener('click', onClick)
    return () => document.removeEventListener('click', onClick)
  }, [openContact])

  return (
    <ContactCtx.Provider value={{ openContact, closeContact, isOpen: open }}>
      {children}
      {open ? <ContactDialog onClose={closeContact} /> : null}
    </ContactCtx.Provider>
  )
}

function ContactDialog({ onClose }) {
  const titleId = useId()
  const [note, setNote] = useState('')
  const [ok, setOk] = useState(false)

  const onSubmit = (e) => {
    e.preventDefault()
    const form = e.currentTarget
    setNote('')
    setOk(false)

    if (!form.checkValidity()) {
      form.reportValidity()
      setNote('Please complete all required fields to submit your inquiry.')
      return
    }

    const data = new FormData(form)
    const lines = [
      'Information inquiry — HospitalityCancun.com',
      '',
      'Full name: ' + data.get('fullName'),
      'Email: ' + data.get('email'),
      'Phone / WhatsApp: ' + data.get('phone'),
      'U.S. state: ' + data.get('state'),
      'Procedure of interest: ' + data.get('procedure'),
      'Preferred treatment timeline: ' + data.get('timeline'),
      'Financing required: ' + data.get('financing'),
      'Willing to travel to Mexico: ' + data.get('travel'),
      'Preferred contact method: ' + data.get('contactMethod'),
      'Preferred contact time: ' + data.get('contactTime'),
      'Communication consent: Yes',
    ]
    const body = lines.join('\n')
    const method = String(data.get('contactMethod') || '')

    if (method === 'Email') {
      window.location.href =
        'mailto:info@hospitalitycancun.com' +
        '?subject=' +
        encodeURIComponent('Information inquiry — ' + data.get('fullName')) +
        '&body=' +
        encodeURIComponent(body)
      setNote('Opening your email app with your inquiry details…')
    } else {
      window.open(
        'https://wa.me/529878729400?text=' + encodeURIComponent(body),
        '_blank',
        'noopener',
      )
      setNote('Opening WhatsApp with your inquiry details…')
    }

    setOk(true)
    form.reset()
  }

  const field =
    'mt-1.5 w-full rounded-xl border border-black/10 bg-canvas px-3.5 py-2.5 text-sm text-ink outline-none transition focus:border-mint focus:ring-2 focus:ring-mint/30'
  const label = 'block text-[13px] font-semibold text-ink'

  return (
    <div className="fixed inset-0 z-[100] flex items-end justify-center p-0 sm:items-center sm:p-4" role="presentation">
      <button
        type="button"
        className="absolute inset-0 bg-[#0c1c1a]/78 backdrop-blur-[2px]"
        aria-label="Close inquiry form"
        onClick={onClose}
      />

      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        className="relative z-10 flex max-h-[92vh] w-full max-w-[720px] flex-col overflow-hidden rounded-t-[24px] bg-white shadow-[0_30px_80px_rgba(0,0,0,.35)] sm:rounded-[28px]"
      >
        <div className="flex items-start justify-between gap-3 border-b border-black/[0.06] px-5 py-4 sm:px-7 sm:py-5">
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-slate-500">
              Begin your healthcare retreat
            </p>
            <h2 id={titleId} className="mt-1 text-xl font-semibold tracking-tight text-ink sm:text-2xl">
              Request Information
            </h2>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-canvas text-accent transition hover:bg-accent hover:text-white"
            aria-label="Close"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <form
          className="grid flex-1 gap-3 overflow-y-auto px-5 py-5 sm:grid-cols-2 sm:gap-4 sm:px-7 sm:py-6"
          onSubmit={onSubmit}
          noValidate
        >
          <label className={label}>
            Full name
            <input className={field} type="text" name="fullName" autoComplete="name" required placeholder="Your full name" />
          </label>
          <label className={label}>
            Email
            <input className={field} type="email" name="email" autoComplete="email" required placeholder="you@email.com" />
          </label>
          <label className={label}>
            Phone or WhatsApp
            <input className={field} type="tel" name="phone" autoComplete="tel" required placeholder="+1 or WhatsApp number" />
          </label>
          <label className={label}>
            U.S. state
            <select className={field} name="state" required defaultValue="">
              <option value="" disabled>
                Select state
              </option>
              {US_STATES.map((s) => (
                <option key={s}>{s}</option>
              ))}
              <option value="Outside US">Outside the U.S.</option>
            </select>
          </label>
          <label className={label}>
            Procedure of interest
            <select className={field} name="procedure" required defaultValue="">
              <option value="" disabled>
                Select procedure area
              </option>
              <option>Plastic & Aesthetic Surgery</option>
              <option>Stem Cells & Exosomes</option>
              <option>Dental Care</option>
              <option>Gastroenterology</option>
              <option>Gynecology</option>
              <option>Otorhinolaryngology</option>
              <option>General Surgery</option>
              <option>Other / Not sure yet</option>
            </select>
          </label>
          <label className={label}>
            Preferred treatment timeline
            <select className={field} name="timeline" required defaultValue="">
              <option value="" disabled>
                Select timeline
              </option>
              <option>As soon as possible</option>
              <option>1–3 months</option>
              <option>3–6 months</option>
              <option>6+ months</option>
              <option>Flexible</option>
            </select>
          </label>

          <fieldset className="sm:col-span-2">
            <legend className="text-[13px] font-semibold text-ink">Is financing required?</legend>
            <div className="mt-2 flex flex-wrap gap-x-4 gap-y-2 text-sm text-slate-700">
              {['Yes', 'No', 'Not sure'].map((v) => (
                <label key={v} className="inline-flex items-center gap-2 font-medium">
                  <input type="radio" name="financing" value={v} required className="accent-accent" />
                  {v}
                </label>
              ))}
            </div>
          </fieldset>

          <fieldset className="sm:col-span-2">
            <legend className="text-[13px] font-semibold text-ink">Able and willing to travel to Mexico?</legend>
            <div className="mt-2 flex flex-wrap gap-x-4 gap-y-2 text-sm text-slate-700">
              {['Yes', 'Need more information', 'Not yet'].map((v) => (
                <label key={v} className="inline-flex items-center gap-2 font-medium">
                  <input type="radio" name="travel" value={v} required className="accent-accent" />
                  {v}
                </label>
              ))}
            </div>
          </fieldset>

          <label className={label}>
            Preferred contact method
            <select className={field} name="contactMethod" required defaultValue="">
              <option value="" disabled>
                Select method
              </option>
              <option>WhatsApp</option>
              <option>Phone</option>
              <option>Email</option>
            </select>
          </label>
          <label className={label}>
            Preferred contact time
            <select className={field} name="contactTime" required defaultValue="">
              <option value="" disabled>
                Select time
              </option>
              <option>Morning</option>
              <option>Afternoon</option>
              <option>Evening</option>
              <option>Anytime</option>
            </select>
          </label>

          <label className="flex gap-3 text-sm leading-relaxed text-slate-600 sm:col-span-2">
            <input type="checkbox" name="consent" value="yes" required className="mt-1 accent-accent" />
            <span>
              I authorize Smart Strategic Marketing, LLC to share the contact details needed for this inquiry
              with Grupo Médico Costamed so its team can follow up. I have read the{' '}
              <a
                href="/privacy-notice.html"
                target="_blank"
                rel="noopener noreferrer"
                className="font-bold underline underline-offset-2 hover:text-leaf"
              >
                Privacy Notice
              </a>
              .
            </span>
          </label>

          <div className="flex flex-col gap-3 sm:col-span-2 sm:flex-row sm:items-center sm:justify-between">
            <button
              type="submit"
              className="inline-flex items-center justify-center rounded-full bg-accent px-5 py-3 text-sm font-semibold text-white transition hover:bg-ink"
            >
              Request information from Costamed
            </button>
            <a
              href="https://wa.me/529878729400"
              target="_blank"
              rel="noopener noreferrer"
              className="text-center text-sm font-semibold text-leaf hover:text-accent"
            >
              Or message WhatsApp directly
            </a>
          </div>

          {note ? (
            <p
              className={`sm:col-span-2 text-sm ${ok ? 'text-leaf' : 'text-red-600'}`}
              role="status"
              aria-live="polite"
            >
              {note}
            </p>
          ) : null}
        </form>
      </div>
    </div>
  )
}
