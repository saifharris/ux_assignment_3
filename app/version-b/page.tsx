"use client"

import { useRef, useEffect, useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { motion, useScroll, useTransform, useInView, useAnimation } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowLeft, BarChart3, BookOpen, GraduationCap, Users } from "lucide-react"

export default function VersionB() {
  // For scroll-based animations
  const { scrollYProgress } = useScroll()

  // Counter state
  const [count, setCount] = useState(0)
  const targetCount = 263

  // Hero section refs and animations
  const heroRef = useRef(null)
  const heroTextControls = useAnimation()
  const heroTextInView = useInView(heroRef, { once: false, amount: 0.3 })

  // Impact metrics section refs and animations
  const metricsRef = useRef(null)
  const metricsInView = useInView(metricsRef, { once: false, amount: 0.2 })
  const metricsControls = useAnimation()

  // Charts section refs and animations
  const chartsRef = useRef(null)
  const chartsInView = useInView(chartsRef, { once: false, amount: 0.3 })
  const chartsControls = useAnimation()

  // Map section refs and animations
  const mapRef = useRef(null)
  const mapInView = useInView(mapRef, { once: false, amount: 0.3 })
  const mapControls = useAnimation()

  // Programs section refs and animations
  const programsRef = useRef(null)
  const programsInView = useInView(programsRef, { once: false, amount: 0.3 })
  const programsControls = useAnimation()

  // Trust section refs and animations
  const trustRef = useRef(null)
  const trustInView = useInView(trustRef, { once: false, amount: 0.3 })
  const trustControls = useAnimation()

  // CTA section refs and animations
  const ctaRef = useRef(null)
  const ctaInView = useInView(ctaRef, { once: false, amount: 0.5 })
  const ctaControls = useAnimation()

  // Parallax effects
  const heroY = useTransform(scrollYProgress, [0, 0.2], [0, -50])
  const metricsScale = useTransform(scrollYProgress, [0.15, 0.3], [0.95, 1])
  const chartsProgress = useTransform(scrollYProgress, [0.3, 0.5], [0, 1])

  // Counter animation
  useEffect(() => {
    if (heroTextInView && count < targetCount) {
      const interval = setInterval(() => {
        setCount((prev) => {
          const newCount = prev + Math.ceil((targetCount - prev) / 10)
          if (newCount >= targetCount) {
            clearInterval(interval)
            return targetCount
          }
          return newCount
        })
      }, 50)

      return () => clearInterval(interval)
    }
  }, [heroTextInView, count])

  // Run animations when sections come into view
  useEffect(() => {
    if (heroTextInView) {
      heroTextControls.start({ opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } })
    } else {
      heroTextControls.start({ opacity: 0, y: 20 })
    }

    if (metricsInView) {
      metricsControls.start({ opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } })
    } else {
      metricsControls.start({ opacity: 0, y: 30 })
    }

    if (chartsInView) {
      chartsControls.start({ opacity: 1, scale: 1, transition: { duration: 0.8, ease: "easeOut" } })
    } else {
      chartsControls.start({ opacity: 0, scale: 0.95 })
    }

    if (mapInView) {
      mapControls.start({ opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } })
    } else {
      mapControls.start({ opacity: 0, y: 30 })
    }

    if (programsInView) {
      programsControls.start({ opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } })
    } else {
      programsControls.start({ opacity: 0, y: 30 })
    }

    if (trustInView) {
      trustControls.start({ opacity: 1, scale: 1, transition: { duration: 0.8, ease: "easeOut" } })
    } else {
      trustControls.start({ opacity: 0, scale: 0.95 })
    }

    if (ctaInView) {
      ctaControls.start({ opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } })
    } else {
      ctaControls.start({ opacity: 0, y: 30 })
    }
  }, [
    heroTextInView,
    heroTextControls,
    metricsInView,
    metricsControls,
    chartsInView,
    chartsControls,
    mapInView,
    mapControls,
    programsInView,
    programsControls,
    trustInView,
    trustControls,
    ctaInView,
    ctaControls,
  ])

  return (
    <main className="relative overflow-x-hidden bg-zinc-900 text-white">
      {/* Navigation */}
      <nav className="fixed left-0 top-0 z-50 w-full bg-zinc-900/80 backdrop-blur-sm">
        <div className="container flex h-16 items-center justify-between px-4">
          <Link href="/" className="text-xl font-bold">
            EduBridge
          </Link>
          <div className="flex items-center gap-2">
            <Link href="/">
              <Button
                variant="outline"
                size="sm"
                className="flex items-center gap-1 border-zinc-700 text-zinc-300 hover:bg-zinc-800 hover:text-white"
              >
                <ArrowLeft className="h-4 w-4" />
                Back
              </Button>
            </Link>
            <Button size="sm" className="bg-purple-600 hover:bg-purple-700">
              Donate Now
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative h-screen w-full pt-16" ref={heroRef}>
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=1920&auto=format&fit=crop"
            alt="Dark background with data visualization"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/70"></div>
        </div>

        <motion.div
          className="container relative z-10 flex h-full flex-col items-center justify-center px-4 text-center"
          style={{ y: heroY }}
          animate={heroTextControls}
          initial={{ opacity: 0, y: 20 }}
        >
          <h1 className="mb-6 text-6xl font-bold md:text-8xl">
            <motion.span>{count}</motion.span> million
          </h1>
          <h2 className="mb-8 text-2xl font-semibold md:text-4xl">children are out of school worldwide</h2>
          <p className="mb-10 max-w-2xl text-lg text-zinc-300 md:text-xl">
            Every child deserves access to quality education regardless of their circumstances. Together, we can change
            this statistic.
          </p>
          <Button size="lg" className="bg-purple-600 hover:bg-purple-700">
            Support the Change
          </Button>
        </motion.div>

        <motion.div
          className="absolute bottom-8 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center"
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Number.POSITIVE_INFINITY, duration: 2 }}
        >
          <p className="mb-2 text-sm text-zinc-400">Scroll to see our impact</p>
          <div className="h-10 w-6 rounded-full border-2 border-zinc-500">
            <motion.div
              className="mx-auto mt-1 h-2 w-2 rounded-full bg-purple-500"
              animate={{ y: [0, 15, 0] }}
              transition={{ repeat: Number.POSITIVE_INFINITY, duration: 2 }}
            />
          </div>
        </motion.div>
      </section>

      {/* Impact Metrics Section */}
      <section className="py-20" ref={metricsRef}>
        <div className="container px-4">
          <motion.h2
            className="mb-16 text-center text-3xl font-bold md:text-4xl"
            animate={metricsControls}
            initial={{ opacity: 0, y: 30 }}
          >
            Our Impact by the Numbers
          </motion.h2>

          <motion.div
            className="mx-auto grid max-w-6xl gap-6 md:grid-cols-2 lg:grid-cols-4"
            style={{ scale: metricsScale }}
            animate={metricsControls}
            initial={{ opacity: 0, y: 30 }}
          >
            {/* Metric 1 */}
            <div className="rounded-xl bg-zinc-800 p-6 text-center">
              <div className="mb-4 flex justify-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-purple-900">
                  <BookOpen className="h-8 w-8 text-purple-300" />
                </div>
              </div>
              <motion.h3
                className="mb-2 text-4xl font-bold text-purple-400"
                animate={{ opacity: [0.5, 1, 0.5] }}
                transition={{ repeat: Number.POSITIVE_INFINITY, duration: 3 }}
              >
                2.1M
              </motion.h3>
              <p className="text-zinc-400">Books Distributed</p>
            </div>

            {/* Metric 2 */}
            <div className="rounded-xl bg-zinc-800 p-6 text-center">
              <div className="mb-4 flex justify-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-purple-900">
                  <Users className="h-8 w-8 text-purple-300" />
                </div>
              </div>
              <motion.h3
                className="mb-2 text-4xl font-bold text-purple-400"
                animate={{ opacity: [0.5, 1, 0.5] }}
                transition={{ repeat: Number.POSITIVE_INFINITY, duration: 3, delay: 0.5 }}
              >
                6.5K
              </motion.h3>
              <p className="text-zinc-400">Students Enrolled</p>
            </div>

            {/* Metric 3 */}
            <div className="rounded-xl bg-zinc-800 p-6 text-center">
              <div className="mb-4 flex justify-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-purple-900">
                  <GraduationCap className="h-8 w-8 text-purple-300" />
                </div>
              </div>
              <motion.h3
                className="mb-2 text-4xl font-bold text-purple-400"
                animate={{ opacity: [0.5, 1, 0.5] }}
                transition={{ repeat: Number.POSITIVE_INFINITY, duration: 3, delay: 1 }}
              >
                94%
              </motion.h3>
              <p className="text-zinc-400">Graduation Rate</p>
            </div>

            {/* Metric 4 */}
            <div className="rounded-xl bg-zinc-800 p-6 text-center">
              <div className="mb-4 flex justify-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-purple-900">
                  <BarChart3 className="h-8 w-8 text-purple-300" />
                </div>
              </div>
              <motion.h3
                className="mb-2 text-4xl font-bold text-purple-400"
                animate={{ opacity: [0.5, 1, 0.5] }}
                transition={{ repeat: Number.POSITIVE_INFINITY, duration: 3, delay: 1.5 }}
              >
                127
              </motion.h3>
              <p className="text-zinc-400">Learning Centers</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Charts + Graphs Section */}
      <section className="bg-zinc-800 py-20" ref={chartsRef}>
        <div className="container px-4">
          <motion.h2
            className="mb-16 text-center text-3xl font-bold md:text-4xl"
            animate={chartsControls}
            initial={{ opacity: 0, scale: 0.95 }}
          >
            Measuring Our Success
          </motion.h2>

          <motion.div
            className="mx-auto grid max-w-6xl gap-8 md:grid-cols-2 lg:grid-cols-3"
            animate={chartsControls}
            initial={{ opacity: 0, scale: 0.95 }}
          >
            {/* Chart 1 - Funding Allocation */}
            <div className="rounded-xl bg-zinc-900 p-6">
              <h3 className="mb-4 text-xl font-semibold">Funding Allocation</h3>
              <div className="relative aspect-square w-full">
                <div className="absolute inset-0 flex items-center justify-center">
                  <svg viewBox="0 0 100 100" className="h-full w-full">
                    {/* Program Expenses */}
                    <motion.circle
                      cx="50"
                      cy="50"
                      r="40"
                      fill="transparent"
                      stroke="#9333ea"
                      strokeWidth="20"
                      strokeDasharray="251.2"
                      strokeDashoffset={251.2 - 251.2 * 0.92 * chartsProgress.get()}
                      transform="rotate(-90 50 50)"
                    />
                    {/* Administrative */}
                    <motion.circle
                      cx="50"
                      cy="50"
                      r="40"
                      fill="transparent"
                      stroke="#4c1d95"
                      strokeWidth="20"
                      strokeDasharray="251.2"
                      strokeDashoffset={251.2 - 251.2 * 0.08 * chartsProgress.get()}
                      strokeDashoffset={251.2 - 251.2 * 0.08}
                      transform="rotate(-90 50 50)"
                      style={{ transformOrigin: "center" }}
                    />
                  </svg>
                  <div className="absolute text-center">
                    <p className="text-3xl font-bold">92%</p>
                    <p className="text-xs text-zinc-400">Program Expenses</p>
                  </div>
                </div>
              </div>
              <div className="mt-4 grid grid-cols-2 gap-2 text-sm">
                <div className="flex items-center gap-2">
                  <div className="h-3 w-3 rounded-full bg-purple-600"></div>
                  <span className="text-zinc-300">Programs (92%)</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="h-3 w-3 rounded-full bg-purple-900"></div>
                  <span className="text-zinc-300">Admin (8%)</span>
                </div>
              </div>
            </div>

            {/* Chart 2 - Gender Ratio */}
            <div className="rounded-xl bg-zinc-900 p-6">
              <h3 className="mb-4 text-xl font-semibold">Student Gender Ratio</h3>
              <div className="relative aspect-square w-full">
                <div className="absolute inset-0 flex items-center justify-center">
                  <svg viewBox="0 0 100 100" className="h-full w-full">
                    {/* Girls */}
                    <motion.circle
                      cx="50"
                      cy="50"
                      r="40"
                      fill="transparent"
                      stroke="#9333ea"
                      strokeWidth="20"
                      strokeDasharray="251.2"
                      strokeDashoffset={251.2 - 251.2 * 0.54 * chartsProgress.get()}
                      transform="rotate(-90 50 50)"
                    />
                    {/* Boys */}
                    <motion.circle
                      cx="50"
                      cy="50"
                      r="40"
                      fill="transparent"
                      stroke="#4c1d95"
                      strokeWidth="20"
                      strokeDasharray="251.2"
                      strokeDashoffset={251.2 - 251.2 * 0.46}
                      transform="rotate(98 50 50)"
                      style={{ transformOrigin: "center" }}
                    />
                  </svg>
                  <div className="absolute text-center">
                    <p className="text-3xl font-bold">54%</p>
                    <p className="text-xs text-zinc-400">Girls</p>
                  </div>
                </div>
              </div>
              <div className="mt-4 grid grid-cols-2 gap-2 text-sm">
                <div className="flex items-center gap-2">
                  <div className="h-3 w-3 rounded-full bg-purple-600"></div>
                  <span className="text-zinc-300">Girls (54%)</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="h-3 w-3 rounded-full bg-purple-900"></div>
                  <span className="text-zinc-300">Boys (46%)</span>
                </div>
              </div>
            </div>

            {/* Chart 3 - Graduation Outcomes */}
            <div className="rounded-xl bg-zinc-900 p-6">
              <h3 className="mb-4 text-xl font-semibold">Graduate Outcomes</h3>
              <div className="flex h-64 flex-col justify-end gap-2">
                <div className="flex items-end gap-4">
                  <motion.div
                    className="w-1/4 rounded-t bg-purple-900"
                    style={{ height: `${65 * chartsProgress.get()}%` }}
                  ></motion.div>
                  <motion.div
                    className="w-1/4 rounded-t bg-purple-700"
                    style={{ height: `${22 * chartsProgress.get()}%` }}
                  ></motion.div>
                  <motion.div
                    className="w-1/4 rounded-t bg-purple-500"
                    style={{ height: `${10 * chartsProgress.get()}%` }}
                  ></motion.div>
                  <motion.div
                    className="w-1/4 rounded-t bg-purple-300"
                    style={{ height: `${3 * chartsProgress.get()}%` }}
                  ></motion.div>
                </div>
                <div className="mt-2 grid grid-cols-4 text-center text-xs text-zinc-400">
                  <div>Higher Ed</div>
                  <div>Employment</div>
                  <div>Vocational</div>
                  <div>Other</div>
                </div>
              </div>
              <div className="mt-4 text-sm text-zinc-300">
                <p>65% of our graduates continue to higher education, with 87% finding employment within one year.</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Interactive World Map */}
      <section className="py-20" ref={mapRef}>
        <div className="container px-4">
          <motion.h2
            className="mb-16 text-center text-3xl font-bold md:text-4xl"
            animate={mapControls}
            initial={{ opacity: 0, y: 30 }}
          >
            Where We Work
          </motion.h2>

          <motion.div className="mx-auto max-w-6xl" animate={mapControls} initial={{ opacity: 0, y: 30 }}>
            <div className="relative aspect-[2/1] w-full overflow-hidden rounded-xl bg-zinc-800">
              <Image
                src="https://images.unsplash.com/photo-1589519160732-57fc6a9dfe37?q=80&w=1440&auto=format&fit=crop"
                alt="World map with location pins"
                fill
                className="object-cover"
              />

              {/* Map Pins */}
              <motion.div
                className="absolute left-[30%] top-[40%] flex h-6 w-6 items-center justify-center rounded-full bg-purple-600"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ repeat: Number.POSITIVE_INFINITY, duration: 2 }}
              >
                <div className="absolute h-full w-full animate-ping rounded-full bg-purple-600 opacity-75"></div>
                <span className="text-xs font-bold">12</span>
              </motion.div>

              <motion.div
                className="absolute left-[60%] top-[35%] flex h-6 w-6 items-center justify-center rounded-full bg-purple-600"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ repeat: Number.POSITIVE_INFINITY, duration: 2, delay: 0.5 }}
              >
                <div className="absolute h-full w-full animate-ping rounded-full bg-purple-600 opacity-75"></div>
                <span className="text-xs font-bold">28</span>
              </motion.div>

              <motion.div
                className="absolute left-[45%] top-[60%] flex h-6 w-6 items-center justify-center rounded-full bg-purple-600"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ repeat: Number.POSITIVE_INFINITY, duration: 2, delay: 1 }}
              >
                <div className="absolute h-full w-full animate-ping rounded-full bg-purple-600 opacity-75"></div>
                <span className="text-xs font-bold">43</span>
              </motion.div>

              <motion.div
                className="absolute left-[75%] top-[55%] flex h-6 w-6 items-center justify-center rounded-full bg-purple-600"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ repeat: Number.POSITIVE_INFINITY, duration: 2, delay: 1.5 }}
              >
                <div className="absolute h-full w-full animate-ping rounded-full bg-purple-600 opacity-75"></div>
                <span className="text-xs font-bold">19</span>
              </motion.div>
            </div>

            <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              <div className="rounded-lg bg-zinc-800 p-4">
                <h3 className="mb-2 font-semibold">Africa</h3>
                <p className="text-sm text-zinc-400">
                  43 learning centers across 12 countries, serving 2,800+ students.
                </p>
              </div>

              <div className="rounded-lg bg-zinc-800 p-4">
                <h3 className="mb-2 font-semibold">South Asia</h3>
                <p className="text-sm text-zinc-400">
                  28 learning centers across 4 countries, serving 1,900+ students.
                </p>
              </div>

              <div className="rounded-lg bg-zinc-800 p-4">
                <h3 className="mb-2 font-semibold">Latin America</h3>
                <p className="text-sm text-zinc-400">
                  19 learning centers across 6 countries, serving 1,200+ students.
                </p>
              </div>

              <div className="rounded-lg bg-zinc-800 p-4">
                <h3 className="mb-2 font-semibold">Middle East</h3>
                <p className="text-sm text-zinc-400">12 learning centers across 3 countries, serving 600+ students.</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Program Portfolio Section */}
      <section className="bg-zinc-800 py-20" ref={programsRef}>
        <div className="container px-4">
          <motion.h2
            className="mb-16 text-center text-3xl font-bold md:text-4xl"
            animate={programsControls}
            initial={{ opacity: 0, y: 30 }}
          >
            Our Programs
          </motion.h2>

          <motion.div
            className="mx-auto grid max-w-6xl gap-6 md:grid-cols-3"
            animate={programsControls}
            initial={{ opacity: 0, y: 30 }}
          >
            {/* Program 1 */}
            <div className="group overflow-hidden rounded-xl bg-zinc-900 transition-all hover:bg-zinc-950">
              <div className="relative aspect-video w-full overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1581726707445-75cbe4efc586?q=80&w=1280&auto=format&fit=crop"
                  alt="Digital Classrooms"
                  fill
                  className="object-cover transition-transform group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                <div className="absolute bottom-4 left-4">
                  <h3 className="text-xl font-bold">Digital Classrooms</h3>
                </div>
              </div>
              <div className="p-6">
                <p className="mb-4 text-zinc-400">
                  Technology-equipped learning spaces with tablets, educational software, and internet access for
                  students in remote areas.
                </p>
                <ul className="mb-6 space-y-2 text-sm text-zinc-300">
                  <li className="flex items-center gap-2">
                    <div className="h-2 w-2 rounded-full bg-purple-500"></div>
                    <span>42 digital classrooms established</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="h-2 w-2 rounded-full bg-purple-500"></div>
                    <span>1,200+ students with digital literacy</span>
                  </li>
                </ul>
                <Button
                  variant="outline"
                  size="sm"
                  className="w-full border-zinc-700 text-zinc-300 hover:bg-zinc-800 hover:text-white"
                >
                  Learn More
                </Button>
              </div>
            </div>

            {/* Program 2 */}
            <div className="group overflow-hidden rounded-xl bg-zinc-900 transition-all hover:bg-zinc-950">
              <div className="relative aspect-video w-full overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=1280&auto=format&fit=crop"
                  alt="Scholarships"
                  fill
                  className="object-cover transition-transform group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                <div className="absolute bottom-4 left-4">
                  <h3 className="text-xl font-bold">Scholarships</h3>
                </div>
              </div>
              <div className="p-6">
                <p className="mb-4 text-zinc-400">
                  Full and partial scholarships covering tuition, books, uniforms, and transportation for high-potential
                  students from low-income families.
                </p>
                <ul className="mb-6 space-y-2 text-sm text-zinc-300">
                  <li className="flex items-center gap-2">
                    <div className="h-2 w-2 rounded-full bg-purple-500"></div>
                    <span>3,500+ scholarships awarded</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="h-2 w-2 rounded-full bg-purple-500"></div>
                    <span>94% graduation rate among scholars</span>
                  </li>
                </ul>
                <Button
                  variant="outline"
                  size="sm"
                  className="w-full border-zinc-700 text-zinc-300 hover:bg-zinc-800 hover:text-white"
                >
                  Learn More
                </Button>
              </div>
            </div>

            {/* Program 3 */}
            <div className="group overflow-hidden rounded-xl bg-zinc-900 transition-all hover:bg-zinc-950">
              <div className="relative aspect-video w-full overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1544717305-2782549b5136?q=80&w=1280&auto=format&fit=crop"
                  alt="Teacher Training"
                  fill
                  className="object-cover transition-transform group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                <div className="absolute bottom-4 left-4">
                  <h3 className="text-xl font-bold">Teacher Training</h3>
                </div>
              </div>
              <div className="p-6">
                <p className="mb-4 text-zinc-400">
                  Professional development programs for local educators, focusing on modern teaching methods, technology
                  integration, and student engagement.
                </p>
                <ul className="mb-6 space-y-2 text-sm text-zinc-300">
                  <li className="flex items-center gap-2">
                    <div className="h-2 w-2 rounded-full bg-purple-500"></div>
                    <span>850+ teachers trained</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="h-2 w-2 rounded-full bg-purple-500"></div>
                    <span>32% increase in student performance</span>
                  </li>
                </ul>
                <Button
                  variant="outline"
                  size="sm"
                  className="w-full border-zinc-700 text-zinc-300 hover:bg-zinc-800 hover:text-white"
                >
                  Learn More
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Trust Signals & Transparency Section */}
      <section className="py-20" ref={trustRef}>
        <div className="container px-4">
          <motion.h2
            className="mb-16 text-center text-3xl font-bold md:text-4xl"
            animate={trustControls}
            initial={{ opacity: 0, scale: 0.95 }}
          >
            Transparency & Trust
          </motion.h2>

          <motion.div className="mx-auto max-w-6xl" animate={trustControls} initial={{ opacity: 0, scale: 0.95 }}>
            <div className="mb-12 rounded-xl bg-zinc-800 p-6 text-center">
              <h3 className="mb-4 text-xl font-semibold">Your Donation at Work</h3>
              <div className="relative mx-auto h-8 max-w-3xl overflow-hidden rounded-full bg-zinc-700">
                <motion.div
                  className="h-full bg-purple-600"
                  style={{ width: `${92 * chartsProgress.get()}%` }}
                ></motion.div>
                <div className="absolute inset-0 flex items-center justify-center text-sm font-medium">
                  92% of donations go directly to programs
                </div>
              </div>
              <div className="mt-4 grid grid-cols-3 text-sm">
                <div className="text-zinc-400">Programs: 92%</div>
                <div className="text-zinc-400">Fundraising: 5%</div>
                <div className="text-zinc-400">Administration: 3%</div>
              </div>
            </div>

            <div className="mb-12 grid gap-6 md:grid-cols-3">
              <div className="rounded-xl bg-zinc-800 p-6">
                <h3 className="mb-4 text-xl font-semibold">Charity Ratings</h3>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-zinc-300">Charity Navigator</span>
                    <div className="flex">
                      <div className="h-5 w-5 text-yellow-400">★</div>
                      <div className="h-5 w-5 text-yellow-400">★</div>
                      <div className="h-5 w-5 text-yellow-400">★</div>
                      <div className="h-5 w-5 text-yellow-400">★</div>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-zinc-300">GuideStar</span>
                    <span className="rounded bg-yellow-400 px-2 py-0.5 text-xs font-medium text-black">Platinum</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-zinc-300">CharityWatch</span>
                    <span className="font-medium text-green-400">A+</span>
                  </div>
                </div>
              </div>

              <div className="rounded-xl bg-zinc-800 p-6">
                <h3 className="mb-4 text-xl font-semibold">Press Coverage</h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="h-8 w-8 rounded bg-white"></div>
                    <span className="text-zinc-300">The New York Times</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="h-8 w-8 rounded bg-white"></div>
                    <span className="text-zinc-300">Forbes</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="h-8 w-8 rounded bg-white"></div>
                    <span className="text-zinc-300">BBC</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="h-8 w-8 rounded bg-white"></div>
                    <span className="text-zinc-300">CNN</span>
                  </div>
                </div>
              </div>

              <div className="rounded-xl bg-zinc-800 p-6">
                <h3 className="mb-4 text-xl font-semibold">Donor Testimonials</h3>
                <div className="space-y-4">
                  <div className="rounded-lg bg-zinc-700 p-3 text-sm">
                    <p className="mb-2 text-zinc-300">
                      "The transparency and impact reports make me confident my donations are making a difference."
                    </p>
                    <p className="text-xs text-zinc-400">— James R., Monthly Donor</p>
                  </div>
                  <div className="rounded-lg bg-zinc-700 p-3 text-sm">
                    <p className="mb-2 text-zinc-300">
                      "I appreciate the detailed updates on how my contributions are being used."
                    </p>
                    <p className="text-xs text-zinc-400">— Sarah M., Corporate Partner</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid gap-6 md:grid-cols-5">
              <div className="flex items-center justify-center rounded-lg bg-zinc-800 p-4">
                <Image
                  src="https://placehold.co/160x80/333/white?text=Partner+1"
                  alt="Partner logo"
                  width={120}
                  height={60}
                  className="h-12 w-auto"
                />
              </div>
              <div className="flex items-center justify-center rounded-lg bg-zinc-800 p-4">
                <Image
                  src="https://placehold.co/160x80/333/white?text=Partner+2"
                  alt="Partner logo"
                  width={120}
                  height={60}
                  className="h-12 w-auto"
                />
              </div>
              <div className="flex items-center justify-center rounded-lg bg-zinc-800 p-4">
                <Image
                  src="https://placehold.co/160x80/333/white?text=Partner+3"
                  alt="Partner logo"
                  width={120}
                  height={60}
                  className="h-12 w-auto"
                />
              </div>
              <div className="flex items-center justify-center rounded-lg bg-zinc-800 p-4">
                <Image
                  src="https://placehold.co/160x80/333/white?text=Partner+4"
                  alt="Partner logo"
                  width={120}
                  height={60}
                  className="h-12 w-auto"
                />
              </div>
              <div className="flex items-center justify-center rounded-lg bg-zinc-800 p-4">
                <Image
                  src="https://placehold.co/160x80/333/white?text=Partner+5"
                  alt="Partner logo"
                  width={120}
                  height={60}
                  className="h-12 w-auto"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="relative py-20" ref={ctaRef}>
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=1920&auto=format&fit=crop"
            alt="CTA background"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/70"></div>
        </div>

        <motion.div
          className="container relative z-10 px-4 text-center"
          animate={ctaControls}
          initial={{ opacity: 0, y: 30 }}
        >
          <h2 className="mb-6 text-3xl font-bold md:text-5xl">Your donation funds real, measurable change.</h2>
          <p className="mx-auto mb-8 max-w-2xl text-lg text-zinc-300 md:text-xl">
            Every dollar you contribute helps us expand our reach and impact, bringing quality education to more
            children in underserved communities.
          </p>

          <div className="mx-auto flex max-w-md flex-col gap-4 sm:flex-row">
            <Button size="lg" className="flex-1 bg-purple-600 hover:bg-purple-700">
              Donate Now
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="flex-1 border-zinc-700 text-zinc-300 hover:bg-zinc-800 hover:text-white"
            >
              Sponsor a Child
            </Button>
          </div>

          <div className="mt-12 grid gap-8 md:grid-cols-3">
            <div className="rounded-lg bg-zinc-800/50 p-6">
              <h3 className="mb-2 text-xl font-semibold">$25 Monthly</h3>
              <p className="text-zinc-400">Provides school supplies for 5 students</p>
            </div>
            <div className="rounded-lg bg-zinc-800/50 p-6">
              <h3 className="mb-2 text-xl font-semibold">$50 Monthly</h3>
              <p className="text-zinc-400">Funds a teacher's salary for one classroom</p>
            </div>
            <div className="rounded-lg bg-zinc-800/50 p-6">
              <h3 className="mb-2 text-xl font-semibold">$100 Monthly</h3>
              <p className="text-zinc-400">Sponsors a child's complete education</p>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="bg-black py-12">
        <div className="container px-4">
          <div className="mb-8 flex flex-col items-center justify-between gap-4 border-b border-zinc-800 pb-8 md:flex-row">
            <div className="text-center md:text-left">
              <h3 className="text-xl font-bold">EduBridge</h3>
              <p className="text-sm text-zinc-500">Education for All</p>
            </div>

            <div className="flex gap-6">
              <a href="#" className="text-zinc-400 hover:text-white">
                Facebook
              </a>
              <a href="#" className="text-zinc-400 hover:text-white">
                Twitter
              </a>
              <a href="#" className="text-zinc-400 hover:text-white">
                Instagram
              </a>
              <a href="#" className="text-zinc-400 hover:text-white">
                LinkedIn
              </a>
            </div>
          </div>

          <div className="grid gap-8 md:grid-cols-4">
            <div>
              <h4 className="mb-4 font-semibold">About Us</h4>
              <ul className="space-y-2 text-sm text-zinc-500">
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
              <ul className="space-y-2 text-sm text-zinc-500">
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
              <ul className="space-y-2 text-sm text-zinc-500">
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
              <ul className="space-y-2 text-sm text-zinc-500">
                <li>123 Education Lane</li>
                <li>New York, NY 10001</li>
                <li>info@edubridge.org</li>
                <li>+1 (555) 123-4567</li>
              </ul>
            </div>
          </div>

          <div className="mt-12 text-center text-xs text-zinc-600">
            <p>© {new Date().getFullYear()} EduBridge. All rights reserved.</p>
            <p className="mt-2">
              <a href="#" className="hover:text-zinc-400">
                Privacy Policy
              </a>{" "}
              |
              <a href="#" className="hover:text-zinc-400">
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
