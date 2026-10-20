"use client"

import Hero from "@/components/hero"
import AboutSection from "@/components/about-section"

import LabsSection from "@/components/labs-section"
import EventsSection from "@/components/events/EventsSection"
import StartupsSection from "@/components/startups/StartupsSection"
import WinsSection from "@/components/wins/WinsSection"
import UniversitiesSection from "@/components/universities-section"
import PartnersSection from "@/components/partners-section"
import ArticlesSection from "@/components/articles/ArticlesSection"
import { useScrollReveal } from "@/hooks/use-scroll-reveal"

export default function Home() {
  useScrollReveal()

  return (
    <main className="flex flex-col min-h-screen">
      <Hero />
      <AboutSection />
      <EventsSection />
      <PartnersSection />
      <LabsSection />
      <UniversitiesSection />
      <StartupsSection />
      <ArticlesSection />
      <WinsSection />
    </main>
  )
}
