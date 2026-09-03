import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { Hero } from '@/components/sections/Hero'
import { About } from '@/components/sections/About'
import { Projects } from '@/components/sections/Projects'
import { Skills } from '@/components/sections/Skills'
import { Contact } from '@/components/sections/Contact'
import { FadeIn } from '@/components/ui/FadeIn'

function App() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <Hero />
        <FadeIn>
          <About />
        </FadeIn>
        <FadeIn>
          <Projects />
        </FadeIn>
        <FadeIn>
          <Skills />
        </FadeIn>
        <FadeIn>
          <Contact />
        </FadeIn>
      </main>
      <Footer />
    </div>
  )
}

export default App
