import { Navigation } from './components/Navigation'
import { Hero } from './components/Hero'
import { About } from './components/About'
import { Skills } from './components/Skills'
import { Work } from './components/Work'
import { Contact } from './components/Contact'

export default function Index() {
  return (
    <div className="min-h-screen bg-[#0b0b0b] text-[#ded8ce] font-mono selection:bg-[#ded8ce] selection:text-[#0b0b0b]">
      <Navigation />
      <main>
        <Hero />
        <About />
        <Work />
        <Skills />
        <Contact />
      </main>
    </div>
  )
}
