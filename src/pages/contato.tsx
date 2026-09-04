import { useEffect, useState, useRef } from 'react'
import type { SyntheticEvent } from 'react'
import emailjs from '@emailjs/browser'
import { Send } from 'lucide-react'

function Contato() {
  const [mounted, setMounted] = useState<boolean>(false)
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false)
  const form = useRef<HTMLFormElement>(null)

  useEffect(() => {
    const id = requestAnimationFrame(() => setMounted(true))
    return () => cancelAnimationFrame(id)
  }, [])

  const sendEmail = (e: SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (!form.current) return

    const formData = new FormData(form.current)
    const userName = formData.get('user_name')?.toString().trim()
    const userEmail = formData.get('user_email')?.toString().trim()
    const message = formData.get('message')?.toString().trim()

    if (!userName || !userEmail || !message) {
      alert("Por favor, preencha todos os campos obrigatórios corretamente.")
      return
    }

    setIsSubmitting(true)

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        form.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(
        (result: { text: unknown }) => {
          console.log(result.text)
          form.current?.reset()
          alert("Mensagem enviada com sucesso!")
        },
        (error: { text: unknown }) => {
          console.log(error.text)
          alert("Erro ao enviar a mensagem. Tente novamente.")
        }
      )
      .finally(() => {
        setIsSubmitting(false)
      })
  }

  return (
    <section id="fale-conosco" className="relative bg-roxo-escuro overflow-hidden">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-8 md:gap-12">

        {/* Coluna Esquerda — Imagem */}
        <div
          className={`relative flex items-center justify-center px-6 pt-12 pb-8 md:py-24
                     transition-all duration-1000 ease-out order-2 md:order-1
                     ${mounted ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}
          style={{ transitionDelay: mounted ? '150ms' : '0ms' }}
        >
          <div className="relative w-full max-w-[70%] sm:max-w-sm md:max-w-full aspect-square">
            {/* Fundo em grade de pontos */}
            <div
              aria-hidden="true"
              className="absolute inset-0 opacity-[0.15]"
              style={{
                backgroundImage: 'radial-gradient(currentColor 1px, transparent 1px)',
                backgroundSize: '22px 22px',
                color: '#FDFCFA',
              }}
            />

            {/* Wrapper da Imagem */}
            <div className="absolute inset-6 group">
              <span className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-verde/70 z-20 pointer-events-none" />
              <span className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-verde/70 z-20 pointer-events-none" />
              <span className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-verde/70 z-20 pointer-events-none" />
              <span className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-verde/70 z-20 pointer-events-none" />

              <div className="absolute inset-0 flex items-center justify-center">
                <img
                  src="/assets/logo/pose1.png"
                  alt="Mascote / Logo em pose de contato"
                  className="max-w-[80%] max-h-[80%] w-auto h-auto object-contain transition-transform duration-700 group-hover:scale-105"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Coluna Direita — Texto e Formulário */}
        <div className="flex flex-col justify-center px-6 py-8 md:py-24 order-1 md:order-2">

          <h2
            className={`font-texto font-semibold text-off-white text-3xl sm:text-4xl md:text-5xl leading-tight tracking-tight
                        transition-all duration-700 ease-out
                        ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
          >
            Vamos criar algo
            <br />
            <span className="text-verde">incrível juntos.</span>
            <span
              aria-hidden="true"
              className="inline-block w-2 h-2 rounded-full bg-verde ml-2 align-baseline motion-safe:animate-pulse"
            />
          </h2>

          <p
            className={`mt-4 font-texto text-base md:text-lg text-off-white/70 max-w-md leading-relaxed
                        transition-all duration-700 ease-out
                        ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
            style={{ transitionDelay: mounted ? '150ms' : '0ms' }}
          >
            Tem um projeto em mente ou quer tirar alguma dúvida? Preencha os dados abaixo e entraremos em contato o mais rápido possível.
          </p>

          {/* Formulário integrado com EmailJS */}
          <form
            ref={form}
            onSubmit={sendEmail}
            className={`mt-8 flex flex-col gap-4 w-full max-w-lg
                        transition-all duration-700 ease-out
                        ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
            style={{ transitionDelay: mounted ? '300ms' : '0ms' }}
          >
            <div className="flex flex-col gap-1">
              <label htmlFor="user_name" className="font-texto text-sm text-off-white/80">Nome</label>
              <input
                type="text"
                id="user_name"
                name="user_name"
                placeholder="Seu nome completo"
                className="w-full bg-transparent border border-off-white/25 hover:border-off-white/50 focus:border-verde focus:ring-1 focus:ring-verde text-off-white px-4 py-3 outline-none transition-all duration-200 font-texto disabled:opacity-50"
                required
                disabled={isSubmitting}
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex flex-col gap-1">
                <label htmlFor="user_email" className="font-texto text-sm text-off-white/80">E-mail</label>
                <input
                  type="email"
                  id="user_email"
                  name="user_email"
                  placeholder="voce@empresa.com"
                  className="w-full bg-transparent border border-off-white/25 hover:border-off-white/50 focus:border-verde focus:ring-1 focus:ring-verde text-off-white px-4 py-3 outline-none transition-all duration-200 font-texto disabled:opacity-50"
                  required
                  disabled={isSubmitting}
                />
              </div>

              <div className="flex flex-col gap-1">
                <label htmlFor="user_phone" className="font-texto text-sm text-off-white/80">Telefone</label>
                <input
                  type="tel"
                  id="user_phone"
                  name="user_phone"
                  placeholder="(00) 00000-0000"
                  className="w-full bg-transparent border border-off-white/25 hover:border-off-white/50 focus:border-verde focus:ring-1 focus:ring-verde text-off-white px-4 py-3 outline-none transition-all duration-200 font-texto disabled:opacity-50"
                  disabled={isSubmitting}
                />
              </div>
            </div>

            <div className="flex flex-col gap-1">
              <label htmlFor="message" className="font-texto text-sm text-off-white/80">Mensagem</label>
              <textarea
                id="message"
                name="message"
                rows={4}
                placeholder="Como podemos te ajudar?"
                className="w-full bg-transparent border border-off-white/25 hover:border-off-white/50 focus:border-verde focus:ring-1 focus:ring-verde text-off-white px-4 py-3 outline-none transition-all duration-200 font-texto resize-none disabled:opacity-50"
                required
                disabled={isSubmitting}
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="group mt-2 w-full justify-center font-texto text-lg font-medium bg-verde text-off-white px-6 py-3 shadow-md hover:shadow-xl hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 inline-flex items-center gap-2 disabled:opacity-70 disabled:hover:translate-y-0 disabled:cursor-not-allowed"
            >
              {isSubmitting ? "Enviando..." : "Enviar mensagem"}
              {!isSubmitting && (
                <Send
                  size={18}
                  className="transition-transform duration-200 group-hover:translate-x-1 group-hover:-translate-y-1"
                />
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Contato
