import { SiteFooter } from "@/components/layout/SiteFooter";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { About } from "@/components/sections/About";
import { Education } from "@/components/sections/Education";
import { Experience } from "@/components/sections/Experience";
import { Hero } from "@/components/sections/Hero";
import { Projects } from "@/components/sections/Projects";
import { RevealObserver } from "@/components/ui/RevealObserver";

export default function Home() {
  return (
    <div className="relative isolate overflow-x-clip">
      <div aria-hidden="true" className="hero-backdrop pointer-events-none absolute inset-x-0 top-0 -z-10 h-[720px]" />
      <SiteHeader />
      <main id="main" className="mx-auto max-w-5xl px-5 sm:px-8">
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Education />
      </main>
      <SiteFooter />
      <RevealObserver />
    </div>
  );
}
