import { Card, CardContent } from "@/components/ui/card"

function Location() {
  return (
    <section id="localizanos" className="w-full py-12 md:py-24 lg:py-32 bg-gray-100">
          <div className="container mx-auto px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-8">
              Localízanos
            </h2>
            <div className="flex flex-col md:flex-row items-center justify-center gap-8">
              <div className="w-full md:w-1/2 max-w-[600px]">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d306.89595299552406!2d-99.0177294917029!3d21.986517030183627!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d672ab8332391b%3A0xeb8bcce43e32afc7!2sC.%20B.%20Ju%C3%A1rez%20115%2C%20Zona%20Centro%2C%2079000%20Cdad.%20Valles%2C%20S.L.P.!5e0!3m2!1sen!2smx!4v1726787346095!5m2!1sen!2smx" 
                  width="100%" 
                  height="450" 
                  style={{ border: 0 }} 
                  allowFullScreen 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Ubicación de Bufete García & Asociados"
                ></iframe>
              </div>
              <div className="w-full md:w-1/2 max-w-[600px]">
                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold mb-4">Nuestra Ubicación</h3>
                    <p className="text-gray-500 mb-2">C. B. Juárez 115</p>
                    <p className="text-gray-500 mb-2">Zona Centro</p>
                    <p className="text-gray-500 mb-4">79000 Ciudad Valles, S.L.P.</p>
                    <p className="text-gray-500 mb-2">Teléfono: (123) 456-7890</p>
                    <p className="text-gray-500">Email: info@bufetealvarado.com</p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
  )
}

export default Location