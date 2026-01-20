import Hero from "@/components/sections/hero"
import About from "@/components/sections/about"
import TechStack from "@/components/sections/tech-stack"
import Projects from "@/components/sections/projects"
import Contact from "@/components/sections/contact"
import Footer from "@/components/sections/footer"
import { MobileNav } from "@/components/mobile-nav"

export default function Home() {
  return (
    <main className="relative">
      <MobileNav />
      <Hero />
      <About />
      <TechStack />
      <Projects />
      <Contact />
      <Footer />
    </main>
  )
}
