import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { Menu } from "lucide-react"

export default function Navbar1() {
  return (
    <header className="bg-black text-beige px-6 py-4">
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        <div className="flex items-center space-x-2">
        </div>
        <nav className=" text-white hidden md:flex space-x-8 text-sm font-medium">
          <a href="/" className="hover:underline">Home</a>
          <a href="/work" className="hover:underline">Work</a>
          <a href="/contact" className="hover:underline">Contact</a>
        </nav>
        <Button variant="ghost" size="icon" className="md:hidden">
          <Menu className="w-5 h-5" />
        </Button>
      </div>
    </header>
  )
}
