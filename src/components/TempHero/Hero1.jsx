import { Button } from "@/components/ui/button"  // Assuming ShadCN Button
import { cn } from "@/lib/utils"  // Utility class handler if necessary

export default function Hero1() {
  return (
    <section className="relative bg-black text-white py-24">
      <div className="max-w-6xl mx-auto text-center">
        <h1 className="text-5xl md:text-6xl font-bold tracking-tight mb-6">
          Build your future with creativity and design
        </h1>
        <p className="text-xl md:text-2xl mb-8">
          Creating powerful digital experiences that make a lasting impact.
        </p>
        <div className="flex justify-center gap-4">
          <Button variant="primary" className="px-8 py-3">
            Get Started
          </Button>
          <Button variant="ghost" className="px-8 py-3">
            View Portfolio
          </Button>
        </div>
      </div>

      {/* Optional background image */}
      <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('your-background-image-url.jpg')" }}></div>
    </section>
  )
}
