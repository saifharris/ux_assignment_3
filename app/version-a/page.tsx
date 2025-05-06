"use client"

import { useRef, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { motion, useScroll, useTransform, useInView, useAnimation } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Play, Quote } from "lucide-react"
import { ThemeToggle } from "@/components/theme-toggle"

export default function VersionA() {
  // For scroll-based animations
  const { scrollYProgress } = useScroll()

  // Hero section refs and animations
  const heroRef = useRef(null)
  const heroTextControls = useAnimation()
  const heroTextInView = useInView(heroRef, { once: false, amount: 0.3 })

  // Journey section refs and animations
  const journeyRef = useRef(null)
  const journeyInView = useInView(journeyRef, { once: false, amount: 0.2 })
  const journeyControls = useAnimation()

  // Testimonial section refs and animations
  const testimonialRef = useRef(null)
  const testimonialInView = useInView(testimonialRef, { once: false, amount: 0.3 })
  const testimonialControls = useAnimation()

  // Why We Exist section refs and animations
  const whyRef = useRef(null)
  const whyInView = useInView(whyRef, { once: false, amount: 0.3 })
  const whyControls = useAnimation()

  // Video section refs and animations
  const videoRef = useRef(null)
  const videoInView = useInView(videoRef, { once: false, amount: 0.5 })
  const videoControls = useAnimation()

  // CTA section refs and animations
  const ctaRef = useRef(null)
  const ctaInView = useInView(ctaRef, { once: false, amount: 0.5 })
  const ctaControls = useAnimation()

  // Parallax effects
  const heroScale = useTransform(scrollYProgress, [0, 0.2], [1, 1.1])
  const heroOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0.6])
  const journeyY = useTransform(scrollYProgress, [0.15, 0.3], [50, 0])
  const videoSaturation = useTransform(scrollYProgress, [0.5, 0.7], [0, 1])

  // Run animations when sections come into view
  useEffect(() => {
    if (heroTextInView) {
      heroTextControls.start({ opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } })
    } else {
      heroTextControls.start({ opacity: 0, y: 20 })
    }

    if (journeyInView) {
      journeyControls.start({ opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } })
    } else {
      journeyControls.start({ opacity: 0, x: -50 })
    }

    if (testimonialInView) {
      testimonialControls.start({ opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } })
    } else {
      testimonialControls.start({ opacity: 0, y: 30 })
    }

    if (whyInView) {
      whyControls.start({ opacity: 1, scale: 1, transition: { duration: 0.8, ease: "easeOut" } })
    } else {
      whyControls.start({ opacity: 0, scale: 0.95 })
    }

    if (videoInView) {
      videoControls.start({ opacity: 1, transition: { duration: 1.2, ease: "easeOut" } })
    } else {
      videoControls.start({ opacity: 0.7 })
    }

    if (ctaInView) {
      ctaControls.start({ opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } })
    } else {
      ctaControls.start({ opacity: 0, y: 30 })
    }
  }, [
    heroTextInView,
    heroTextControls,
    journeyInView,
    journeyControls,
    testimonialInView,
    testimonialControls,
    whyInView,
    whyControls,
    videoInView,
    videoControls,
    ctaInView,
    ctaControls,
  ])

  return (
    <main className="relative overflow-x-hidden bg-emotional-background dark:bg-emotional-background text-foreground">
      {/* Navigation */}
      <nav className="fixed left-0 top-0 z-50 w-full bg-white/80 dark:bg-emotional-muted/80 backdrop-blur-sm">
        <div className="container flex h-16 items-center justify-between px-4">
          <Link href="/" className="text-xl font-bold">
            EduBridge
          </Link>
          <div className="flex items-center gap-2">
            <ThemeToggle />
            <Link href="/">
              <Button variant="ghost" size="sm" className="flex items-center gap-1">
                <ArrowLeft className="h-4 w-4" />
                Back
              </Button>
            </Link>
            <Button size="sm" className="bg-emotional-primary hover:bg-emotional-primary/90 text-white">
              Donate Now
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative h-screen w-full pt-16" ref={heroRef}>
        <motion.div className="absolute inset-0 z-0" style={{ scale: heroScale, opacity: heroOpacity }}>
          <Image
            src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=1920&auto=format&fit=crop"
            alt="Child in rural classroom"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/40"></div>
        </motion.div>

        <motion.div
          className="container relative z-10 flex h-full flex-col items-center justify-center px-4 text-center text-white"
          animate={heroTextControls}
          initial={{ opacity: 0, y: 20 }}
        >
          <h1 className="mb-6 max-w-4xl text-4xl font-bold leading-tight md:text-6xl lg:text-7xl">
            "Before EduBridge, I never imagined going to school."
          </h1>
          <p className="mb-8 max-w-2xl text-lg md:text-xl">
            Every child deserves a future shaped by knowledge, not by circumstance.
          </p>
          <Button size="lg" className="bg-emotional-primary hover:bg-emotional-primary/90 text-white">
            Help Rewrite Their Story
          </Button>
        </motion.div>

        <motion.div
          className="absolute bottom-8 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center text-white"
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Number.POSITIVE_INFINITY, duration: 2 }}
        >
          <p className="mb-2 text-sm">Scroll to discover their journey</p>
          <div className="h-10 w-6 rounded-full border-2 border-white">
            <motion.div
              className="mx-auto mt-1 h-2 w-2 rounded-full bg-white"
              animate={{ y: [0, 15, 0] }}
              transition={{ repeat: Number.POSITIVE_INFINITY, duration: 2 }}
            />
          </div>
        </motion.div>
      </section>

      {/* Personal Journey Timeline */}
      <section className="py-20" ref={journeyRef}>
        <div className="container px-4">
          <motion.h2
            className="mb-16 text-center text-3xl font-bold md:text-4xl"
            animate={journeyControls}
            initial={{ opacity: 0, x: -50 }}
          >
            Amara's Journey
          </motion.h2>

          <div className="relative mx-auto max-w-4xl">
            {/* Timeline line */}
            <div className="absolute left-1/2 top-0 h-full w-1 -translate-x-1/2 bg-slate-200 md:left-[80px] md:translate-x-0"></div>

            {/* Timeline items */}
            <div className="space-y-24">
              {/* Before */}
              <motion.div
                className="relative flex flex-col md:flex-row"
                style={{ y: journeyY }}
                animate={journeyControls}
                initial={{ opacity: 0, x: -50 }}
              >
                <div className="mb-4 flex justify-center md:mb-0 md:w-[160px]">
                  <div className="relative z-10 flex h-16 w-16 items-center justify-center rounded-full bg-slate-100">
                    <span className="text-lg font-bold">Before</span>
                  </div>
                </div>
                <div className="flex-1 rounded-xl bg-slate-50 p-6 md:ml-8">
                  <h3 className="mb-3 text-xl font-semibold">Life Without Education</h3>
                  <p className="mb-4 text-muted-foreground">
                    At 8 years old, Amara spent her days collecting water and helping at home. The nearest school was 7
                    miles away, and her family couldn't afford the fees or supplies.
                  </p>
                  <div className="relative aspect-video w-full overflow-hidden rounded-lg">
                    <Image
                      src="https://images.unsplash.com/photo-1594608661623-aa0bd3a69799?q=80&w=1280&auto=format&fit=crop"
                      alt="Amara before EduBridge"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              </motion.div>

              {/* During */}
              <motion.div
                className="relative flex flex-col md:flex-row"
                style={{ y: journeyY }}
                animate={journeyControls}
                initial={{ opacity: 0, x: -50 }}
                transition={{ delay: 0.2 }}
              >
                <div className="mb-4 flex justify-center md:mb-0 md:w-[160px]">
                  <div className="relative z-10 flex h-16 w-16 items-center justify-center rounded-full bg-slate-100">
                    <span className="text-lg font-bold">During</span>
                  </div>
                </div>
                <div className="flex-1 rounded-xl bg-slate-50 p-6 md:ml-8">
                  <h3 className="mb-3 text-xl font-semibold">Joining EduBridge</h3>
                  <p className="mb-4 text-muted-foreground">
                    When EduBridge opened a learning center in her village, Amara received her first school supplies,
                    books, and access to qualified teachers. She discovered a love for mathematics.
                  </p>
                  <div className="relative aspect-video w-full overflow-hidden rounded-lg">
                    <Image
                      src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=1280&auto=format&fit=crop"
                      alt="Amara at EduBridge"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              </motion.div>

              {/* After */}
              <motion.div
                className="relative flex flex-col md:flex-row"
                style={{ y: journeyY }}
                animate={journeyControls}
                initial={{ opacity: 0, x: -50 }}
                transition={{ delay: 0.4 }}
              >
                <div className="mb-4 flex justify-center md:mb-0 md:w-[160px]">
                  <div className="relative z-10 flex h-16 w-16 items-center justify-center rounded-full bg-slate-100">
                    <span className="text-lg font-bold">Future</span>
                  </div>
                </div>
                <div className="flex-1 rounded-xl bg-slate-50 p-6 md:ml-8">
                  <h3 className="mb-3 text-xl font-semibold">Dreams Taking Flight</h3>
                  <p className="mb-4 text-muted-foreground">
                    Today, Amara is 12 and at the top of her class. She dreams of becoming an engineer and building
                    infrastructure for her community. "I want to make sure no child has to walk miles for clean water,"
                    she says.
                  </p>
                  <div className="relative aspect-video w-full overflow-hidden rounded-lg">
                    <Image
                      src="https://images.unsplash.com/photo-1577896851231-70ef18881754?q=80&w=1280&auto=format&fit=crop"
                      alt="Amara's future"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="bg-slate-50 py-20" ref={testimonialRef}>
        <div className="container px-4">
          <motion.h2
            className="mb-16 text-center text-3xl font-bold md:text-4xl"
            animate={testimonialControls}
            initial={{ opacity: 0, y: 30 }}
          >
            Voices of Change
          </motion.h2>

          <motion.div
            className="mx-auto flex max-w-6xl snap-x snap-mandatory gap-6 overflow-x-auto pb-8"
            animate={testimonialControls}
            initial={{ opacity: 0, y: 30 }}
          >
            {/* Testimonial 1 */}
            <div className="min-w-[300px] snap-center rounded-xl bg-white p-6 shadow-sm md:min-w-[400px]">
              <Quote className="mb-4 h-8 w-8 text-slate-300" />
              <p className="mb-6 text-muted-foreground">
                "The day my daughter came home and read a story to me was the day I knew our lives had changed forever.
                Education isn't just about books—it's about dignity and hope."
              </p>
              <div className="flex items-center gap-4">
                <div className="h-12 w-12 overflow-hidden rounded-full">
                  <Image
                    src="https://images.unsplash.com/photo-1531123897727-8f129e1688ce?q=80&w=100&auto=format&fit=crop"
                    alt="Parent"
                    width={48}
                    height={48}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div>
                  <p className="font-medium">Fatima L.</p>
                  <p className="text-sm text-muted-foreground">Parent</p>
                </div>
              </div>
            </div>

            {/* Testimonial 2 */}
            <div className="min-w-[300px] snap-center rounded-xl bg-white p-6 shadow-sm md:min-w-[400px]">
              <Quote className="mb-4 h-8 w-8 text-slate-300" />
              <p className="mb-6 text-muted-foreground">
                "I used to think my future was already decided. Now I know I can be anything I want to be. I study every
                night because I want to become a doctor and help my village."
              </p>
              <div className="flex items-center gap-4">
                <div className="h-12 w-12 overflow-hidden rounded-full">
                  <Image
                    src="https://images.unsplash.com/photo-1542909168-82c3e7fdca5c?q=80&w=100&auto=format&fit=crop"
                    alt="Student"
                    width={48}
                    height={48}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div>
                  <p className="font-medium">Malik J.</p>
                  <p className="text-sm text-muted-foreground">Student, Age 11</p>
                </div>
              </div>
            </div>

            {/* Testimonial 3 */}
            <div className="min-w-[300px] snap-center rounded-xl bg-white p-6 shadow-sm md:min-w-[400px]">
              <Quote className="mb-4 h-8 w-8 text-slate-300" />
              <p className="mb-6 text-muted-foreground">
                "Teaching at EduBridge has been the most rewarding experience of my career. Watching children discover
                their potential when given the right tools is nothing short of miraculous."
              </p>
              <div className="flex items-center gap-4">
                <div className="h-12 w-12 overflow-hidden rounded-full">
                  <Image
                    src="https://images.unsplash.com/photo-1580894732444-8ecded7900cd?q=80&w=100&auto=format&fit=crop"
                    alt="Teacher"
                    width={48}
                    height={48}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div>
                  <p className="font-medium">Grace T.</p>
                  <p className="text-sm text-muted-foreground">Teacher</p>
                </div>
              </div>
            </div>

            {/* Testimonial 4 */}
            <div className="min-w-[300px] snap-center rounded-xl bg-white p-6 shadow-sm md:min-w-[400px]">
              <Quote className="mb-4 h-8 w-8 text-slate-300" />
              <p className="mb-6 text-muted-foreground">
                "I've supported many charities, but EduBridge shows me exactly how my donations create change. The
                letters I receive from my sponsored child are priceless."
              </p>
              <div className="flex items-center gap-4">
                <div className="h-12 w-12 overflow-hidden rounded-full">
                  <Image
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=100&auto=format&fit=crop"
                    alt="Donor"
                    width={48}
                    height={48}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div>
                  <p className="font-medium">Robert K.</p>
                  <p className="text-sm text-muted-foreground">Monthly Donor</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Why We Exist Section */}
      <section className="py-20" ref={whyRef}>
        <div className="container px-4">
          <motion.h2
            className="mb-16 text-center text-3xl font-bold md:text-4xl"
            animate={whyControls}
            initial={{ opacity: 0, scale: 0.95 }}
          >
            Why We Exist
          </motion.h2>

          <motion.div
            className="mx-auto grid max-w-6xl gap-8 md:grid-cols-2"
            animate={whyControls}
            initial={{ opacity: 0, scale: 0.95 }}
          >
            <div className="space-y-6 rounded-xl bg-slate-50 p-8">
              <h3 className="text-2xl font-semibold">The Barriers</h3>
              <p className="text-muted-foreground">
                For millions of children, education remains out of reach due to poverty, gender discrimination,
                conflict, and lack of infrastructure. When a child can't access education, their potential remains
                untapped.
              </p>
              <div className="relative aspect-video w-full overflow-hidden rounded-lg">
                <Image
                  src="https://images.unsplash.com/photo-1617529497471-9218633199c0?q=80&w=1280&auto=format&fit=crop"
                  alt="Education barriers"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="rounded-lg bg-white p-4">
                <p className="italic text-muted-foreground">
                  "Education is the most powerful weapon which you can use to change the world."
                </p>
                <p className="mt-2 text-sm font-medium">— Nelson Mandela</p>
              </div>
            </div>

            <div className="space-y-6 rounded-xl bg-slate-50 p-8">
              <h3 className="text-2xl font-semibold">Our Solution</h3>
              <p className="text-muted-foreground">
                EduBridge creates sustainable education ecosystems by building schools, training local teachers,
                providing learning materials, and engaging communities. We don't just build schools—we build futures.
              </p>
              <div className="relative aspect-video w-full overflow-hidden rounded-lg">
                <Image
                  src="https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=1280&auto=format&fit=crop"
                  alt="EduBridge solution"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="rounded-lg bg-white p-4">
                <p className="italic text-muted-foreground">"When you educate a girl, you educate a nation."</p>
                <p className="mt-2 text-sm font-medium">— African Proverb</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Video Feature */}
      <section className="py-20" ref={videoRef}>
        <div className="container px-4">
          <motion.h2
            className="mb-16 text-center text-3xl font-bold md:text-4xl"
            animate={videoControls}
            initial={{ opacity: 0.7 }}
          >
            See the Transformation
          </motion.h2>

          <motion.div
            className="mx-auto max-w-4xl overflow-hidden rounded-xl"
            animate={videoControls}
            initial={{ opacity: 0.7 }}
            style={{ filter: `saturate(${videoSaturation.get()})` }}
          >
            <div className="relative aspect-video w-full">
              <Image
                src="https://images.unsplash.com/photo-1518826778770-a729fb53327c?q=80&w=1280&auto=format&fit=crop"
                alt="Video thumbnail"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <button className="flex h-20 w-20 items-center justify-center rounded-full bg-white/90 text-black transition-transform hover:scale-105">
                  <Play className="h-8 w-8" />
                </button>
              </div>
            </div>
            <div className="bg-slate-900 p-6 text-white">
              <h3 className="mb-2 text-xl font-semibold">A Day in the Life: EduBridge Students</h3>
              <p className="text-slate-300">
                Follow three students as they journey from their homes to our learning centers, and witness how
                education is transforming their communities.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="relative py-20" ref={ctaRef}>
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1497633762265-9d179a990aa6?q=80&w=1920&auto=format&fit=crop"
            alt="CTA background"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/70"></div>
        </div>

        <motion.div
          className="container relative z-10 px-4 text-center text-white"
          animate={ctaControls}
          initial={{ opacity: 0, y: 30 }}
        >
          <h2 className="mb-6 text-3xl font-bold md:text-5xl">Be part of someone's success story.</h2>
          <p className="mx-auto mb-8 max-w-2xl text-lg text-slate-300 md:text-xl">
            Your support doesn't just provide education—it breaks the cycle of poverty and creates lasting change for
            generations to come.
          </p>

          <div className="mx-auto flex max-w-md flex-col gap-4 sm:flex-row">
            <Button size="lg" className="flex-1 bg-emotional-primary hover:bg-emotional-primary/90 text-white">
              Donate Now
            </Button>
            <Button size="lg" variant="outline" className="flex-1 border-white text-white hover:bg-white/10">
              Sponsor a Child
            </Button>
          </div>

          <motion.div
            className="mt-8 text-sm text-slate-400"
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ repeat: Number.POSITIVE_INFINITY, duration: 2 }}
          >
            92% of donations directly fund our education programs
          </motion.div>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 py-12 text-white">
        <div className="container px-4">
          <div className="mb-8 flex flex-col items-center justify-between gap-4 border-b border-slate-700 pb-8 md:flex-row">
            <div className="text-center md:text-left">
              <h3 className="text-xl font-bold">EduBridge</h3>
              <p className="text-sm text-slate-400">Education for All</p>
            </div>

            <div className="flex gap-6">
              <a href="#" className="text-slate-300 hover:text-white">
                Facebook
              </a>
              <a href="#" className="text-slate-300 hover:text-white">
                Twitter
              </a>
              <a href="#" className="text-slate-300 hover:text-white">
                Instagram
              </a>
              <a href="#" className="text-slate-300 hover:text-white">
                LinkedIn
              </a>
            </div>
          </div>

          <div className="grid gap-8 md:grid-cols-4">
            <div>
              <h4 className="mb-4 font-semibold">About Us</h4>
              <ul className="space-y-2 text-sm text-slate-400">
                <li>
                  <a href="#" className="hover:text-white">
                    Our Mission
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Our Team
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Annual Reports
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Careers
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="mb-4 font-semibold">Our Work</h4>
              <ul className="space-y-2 text-sm text-slate-400">
                <li>
                  <a href="#" className="hover:text-white">
                    Programs
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Impact
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Where We Work
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Partners
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="mb-4 font-semibold">Get Involved</h4>
              <ul className="space-y-2 text-sm text-slate-400">
                <li>
                  <a href="#" className="hover:text-white">
                    Donate
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Sponsor a Child
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Volunteer
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Fundraise
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="mb-4 font-semibold">Contact</h4>
              <ul className="space-y-2 text-sm text-slate-400">
                <li>123 Education Lane</li>
                <li>New York, NY 10001</li>
                <li>info@edubridge.org</li>
                <li>+1 (555) 123-4567</li>
              </ul>
            </div>
          </div>

          <div className="mt-12 text-center text-xs text-slate-500">
            <p>© {new Date().getFullYear()} EduBridge. All rights reserved.</p>
            <p className="mt-2">
              <a href="#" className="hover:text-slate-300">
                Privacy Policy
              </a>{" "}
              |
              <a href="#" className="hover:text-slate-300">
                {" "}
                Terms of Service
              </a>
            </p>
          </div>
        </div>
      </footer>
    </main>
  )
}
