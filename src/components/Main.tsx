import Contact from './Contact'
import {Card, CardContent} from '@/components/ui/card'
import { Scale, Book, Users} from "lucide-react"
import Location from './Location'

function Main() {
  return (
    <main className="flex-1 pt-14">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-black" id='inicio'>
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none text-white">
                  Bufete Alvarado & Asociados
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-300 md:text-xl">
                  Defendiendo sus derechos con experiencia y dedicación. Justicia para todos, cada día.
                </p>
              </div>
              <Contact />
            </div>
          </div>
        </section>
        <section id="areas-practica" className="w-full py-12 md:py-24 lg:py-32 bg-gray-100">
          <div className="container mx-auto px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-8">
              Áreas de Práctica
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card>
                <CardContent className="flex flex-col items-center p-6">
                  <Scale className="h-12 w-12 mb-4 text-primary" />
                  <h3 className="text-lg font-bold mb-2">Derecho Civil</h3>
                  <p className="text-center text-sm text-gray-500">
                    Resolución de conflictos entre particulares y protección de derechos individuales.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="flex flex-col items-center p-6">
                  <Book className="h-12 w-12 mb-4 text-primary" />
                  <h3 className="text-lg font-bold mb-2">Derecho Penal</h3>
                  <p className="text-center text-sm text-gray-500">
                    Defensa efectiva en casos criminales y protección de sus derechos constitucionales.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="flex flex-col items-center p-6">
                  <Users className="h-12 w-12 mb-4 text-primary" />
                  <h3 className="text-lg font-bold mb-2">Derecho Familiar</h3>
                  <p className="text-center text-sm text-gray-500">
                    Asistencia en divorcios, custodia de menores y otros asuntos familiares.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        <section id="sobre-nosotros" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid items-center gap-6 lg:grid-cols-[1fr_500px] lg:gap-12 xl:grid-cols-[1fr_550px]">
              <div className="flex flex-col justify-center space-y-4">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Conozca al Abogado Alvarado</h2>
                <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  El Abogado Alvarado no es solo un profesional del derecho, es un defensor apasionado de la justicia. Con más de una década de experiencia, ha dedicado su carrera a proteger los derechos de sus clientes, tanto dentro como fuera de la sala del tribunal.
                </p>
                <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Su enfoque personalizado y su profundo conocimiento del sistema legal le permiten ofrecer soluciones efectivas y creativas para cada caso único que maneja.
                </p>
              </div>
              <div className="flex justify-center lg:justify-end">
                <img
                  alt="Abogado Alvarado"
                  className="aspect-[3/4] overflow-hidden rounded-xl object-cover object-center"
                  height="550"
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/salvador-s89u8Hyd3EafXx7wA7JtKkSlifG9vR.jpg"
                  width="413"
                  loading='lazy'
                />
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100">
          <div className="container mx-auto px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-8">
              Lo que dicen nuestros clientes
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card>
                <CardContent className="p-6">
                  <p className="text-sm text-gray-500 mb-4">
                    "El Abogado Alvarado fue fundamental para ganar mi caso. Su dedicación y experiencia son incomparables."
                  </p>
                  <p className="font-bold">- María R.</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <p className="text-sm text-gray-500 mb-4">
                    "Gracias al Bufete Alvarado & Asociados, pude resolver mi disputa legal de manera rápida y eficiente."
                  </p>
                  <p className="font-bold">- Juan P.</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <p className="text-sm text-gray-500 mb-4">
                    "Su asesoramiento experto me dio la tranquilidad que necesitaba durante todo el proceso legal."
                  </p>
                  <p className="font-bold">- Ana L.</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        <Location />
      </main>
  )
}

export default Main