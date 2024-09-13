import {Scale} from 'lucide-react'

function Header() {
  return (
    <header className="px-4 lg:px-6 h-14 flex items-center fixed w-full bg-white z-10">
        <a className="flex items-center justify-center" href="/">
          <Scale className="h-6 w-6" />
          <span className="sr-only">Bufete Alvarado & Asociados</span>
        </a>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <a className="text-sm font-medium hover:underline underline-offset-4" href="#areas-practica">
            Áreas de Práctica
          </a>
          <a className="text-sm font-medium hover:underline underline-offset-4" href="#sobre-nosotros">
            Sobre Nosotros
          </a>
          <a className="text-sm font-medium hover:underline underline-offset-4" href="#contacto">
            Contacto
          </a>
        </nav>
      </header>
  )
}

export default Header