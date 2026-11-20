import { ContactModalProvider } from './components/ContactModal'
import {
  Bento,
  Finance,
  Footer,
  Hero,
  Manifesto,
  Navbar,
  PreFooter,
  Prices,
  Services,
  Spotlight,
  StemBanner,
  Team,
  TripParallax,
} from './components/sections'

export default function App() {
  return (
    <ContactModalProvider>
      <div className="min-h-screen bg-canvas text-ink">
        <Navbar />
        <main>
          <Hero />
          <Manifesto />
          <Bento />
          <Services />
          <TripParallax />
          <Finance />
          <StemBanner />
          <Prices />
          <Spotlight />
          <Team />
          <PreFooter />
        </main>
        <Footer />
      </div>
    </ContactModalProvider>
  )
}
