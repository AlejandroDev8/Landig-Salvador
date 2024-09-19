import {useEffect, useState} from 'react'
import {Scale} from 'lucide-react'

function Header() {

  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  return (
    <header
        className={`px-4 lg:px-6 h-14 flex items-center fixed w-full bg-white z-10 transition-opacity duration-300 ${
          isScrolled ? "opacity-90" : "opacity-100"
        }`}
      >
        <div className="container mx-auto flex justify-between items-center">
          <a className="flex items-center justify-center" href="#inicio">
            <Scale className="h-6 w-6" />
            <span className="sr-only">Bufete Alvarado & Asociados</span>
          </a>
          <nav className="flex gap-4 sm:gap-6">
            <a className="text-sm font-medium hover:underline underline-offset-4" href="#areas-practica">
              Áreas de Práctica
            </a>
            <a className="text-sm font-medium hover:underline underline-offset-4" href="#sobre-nosotros">
              Sobre Nosotros
            </a>
            <a className="text-sm font-medium hover:underline underline-offset-4" href="#localizanos">
              Localízanos
            </a>
          </nav>
        </div>
      </header>
  )
}

export default Header