import { useEffect, useRef, useState } from 'react'

function TrustedBy() {
  const sectionRef = useRef<HTMLElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const node = sectionRef.current
    if (!node) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          observer.unobserve(node)
        }
      },
      { threshold: 0.15, rootMargin: '0px 0px -80px 0px' }
    )

    observer.observe(node)
    return () => observer.disconnect()
  }, [])

  const empresas = [
    'Empresa A',
    'Empresa B',
    'Empresa C',
    'Empresa D',
    'Empresa E',
    'Empresa F',
  ]

  // Duplicamos a lista algumas vezes para criar a ilusão de rolagem infinita.
  // Quando a primeira metade terminar de rolar, ela volta sutilmente para o início.
  const carroselItens = [...empresas, ...empresas, ...empresas, ...empresas]

  return (
    <section ref={sectionRef} className="relative bg-roxo-escuro py-16 md:py-24 overflow-hidden">
      
      {/* Estilo embutido para a animação do carrossel (Marquee) */}
      <style>
        {`
          @keyframes scroll-infinito {
            0% { transform: translateX(0); }
            /* Move exatamente metade do tamanho total para criar o loop perfeito */
            100% { transform: translateX(-50%); } 
          }
          .animate-marquee {
            display: flex;
            width: max-content;
            animation: scroll-infinito 60s linear infinite;
          }
          /* Pausa a rolagem se o usuário colocar o mouse ou segurar o dedo (opcional, mas legal) */
          .animate-marquee:hover {
            animation-play-state: paused;
          }
        `}
      </style>

      <div className="relative max-w-6xl mx-auto px-6">
        <h2
          className={`text-center font-texto font-semibold text-2xl sm:text-3xl md:text-4xl text-off-white/80 tracking-tight
                      transition-all duration-1000 ease-out
                      ${visible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-10 scale-95'}`}
        >
          Empresas que acreditaram no nosso trabalho
        </h2>
      </div>

      {/* Container do Carrossel (agora ocupa a tela toda de ponta a ponta) */}
      <div
        className={`mt-10 md:mt-16 w-full overflow-hidden
                   transition-all duration-1000 delay-300 ease-out
                   ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
      >
        <div className="relative w-full flex">
          
          {/* Sombras nas laterais para as logos "desaparecerem" no escuro */}
          <div className="absolute inset-0 z-10 pointer-events-none bg-linear-to-r from-roxo-escuro via-transparent to-roxo-escuro" />
          
          {/* Trilho animado que contém os itens */}
          <div className="animate-marquee gap-8 md:gap-16 px-4">
            {carroselItens.map((nome, index) => (
              <div
                key={`${nome}-${index}`}
                className="group shrink-0 flex items-center justify-center h-12 w-32 md:w-40"
              >
                <div className="h-full w-full border border-dashed border-off-white/20 flex items-center justify-center transition-colors duration-300 group-hover:border-verde/50">
                  <span className="font-texto text-xs md:text-sm text-off-white/30 tracking-wide">
                    {nome}
                  </span>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  )
}

export default TrustedBy