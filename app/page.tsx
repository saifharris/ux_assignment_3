import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <div className="container mx-auto px-4 py-12 md:py-24">
        <div className="mb-12 text-center">
          <h1 className="mb-4 text-4xl font-bold tracking-tight md:text-6xl">EduBridge A/B Test</h1>
          <p className="mx-auto mb-8 max-w-2xl text-lg text-muted-foreground">
            Compare two different approaches to our landing page design. Version A focuses on storytelling and emotion,
            while Version B emphasizes statistics and impact.
          </p>

          <div className="mx-auto mb-12 grid max-w-5xl gap-8 md:grid-cols-2">
            <div className="overflow-hidden rounded-xl border bg-white shadow-sm transition-all hover:shadow-md">
              <div className="relative aspect-video w-full overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1577896851231-70ef18881754?q=80&w=1280&auto=format&fit=crop"
                  alt="Version A Preview"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="text-xl font-bold">Version A</h3>
                  <p>Storytelling & Emotion Focus</p>
                </div>
              </div>
              <div className="p-6">
                <p className="mb-4 text-muted-foreground">
                  An emotionally immersive experience telling personal stories from real beneficiaries, with
                  scroll-based animations and transitions.
                </p>
                <Link href="/version-a">
                  <Button className="w-full">
                    View Version A
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </div>

            <div className="overflow-hidden rounded-xl border bg-white shadow-sm transition-all hover:shadow-md">
              <div className="relative aspect-video w-full overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=1280&auto=format&fit=crop"
                  alt="Version B Preview"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="text-xl font-bold">Version B</h3>
                  <p>Statistics & Impact Focus</p>
                </div>
              </div>
              <div className="p-6">
                <p className="mb-4 text-muted-foreground">
                  A data-driven approach using program metrics and visual evidence of success to persuade visitors, with
                  animated charts and counters.
                </p>
                <Link href="/version-b">
                  <Button className="w-full" variant="outline">
                    View Version B
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>

          <div className="mx-auto max-w-2xl rounded-lg bg-slate-50 p-6">
            <h2 className="mb-2 text-xl font-semibold">About This A/B Test</h2>
            <p className="text-muted-foreground">
              We're testing which approach creates a better user experience and motivates donors more effectively. After
              viewing both versions, you'll be asked to rate your experience and provide feedback.
            </p>
          </div>
        </div>
      </div>
    </main>
  )
}
