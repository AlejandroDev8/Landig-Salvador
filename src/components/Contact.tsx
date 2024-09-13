import {useState} from 'react'
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger,} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"

function Contact() {

  const [isModalOpen, setIsModalOpen] = useState(false)

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    // Aquí iría la lógica para manejar el envío del formulario
    console.log("Formulario enviado")
    setIsModalOpen(false)
  }

  return (
    <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
                <DialogTrigger asChild>
                  <Button className="bg-white text-black hover:bg-gray-200" size="lg">
                    Consulta Gratuita
                  </Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[425px]">
                  <DialogHeader>
                    <DialogTitle>Solicitar Consulta Gratuita</DialogTitle>
                    <DialogDescription>
                      Complete el formulario y nos pondremos en contacto con usted a la brevedad.
                    </DialogDescription>
                  </DialogHeader>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Nombre</Label>
                      <Input id="name" placeholder="Su nombre completo" required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input id="email" type="email" placeholder="Su correo electrónico" required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">Teléfono</Label>
                      <Input id="phone" type="tel" placeholder="Su número de teléfono" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="message">Mensaje</Label>
                      <Textarea id="message" placeholder="Describa brevemente su caso" />
                    </div>
                    <Button type="submit" className="w-full">Enviar Solicitud</Button>
                  </form>
                </DialogContent>
              </Dialog>
  )
}

export default Contact