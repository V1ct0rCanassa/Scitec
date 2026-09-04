import { useEffect, useState } from 'react'
import { ArrowRight } from 'lucide-react'

function Hero() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    const id = requestAnimationFrame(() => setMounted(true))
    return () => cancelAnimationFrame(id)
  }, [])

  return (
    <section id="inicio" className="relative bg-roxo-escuro overflow-hidden">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center">
        
        {/* Coluna esquerda — texto */}
        <div className="flex flex-col justify-center px-6 py-12 md:py-24 md:pr-14 mt-8 md:mt-0">
          
          
          <h1
            className={`font-texto font-semibold text-off-white text-3xl sm:text-4xl md:text-5xl lg:text-[3.4rem] leading-[1.15] md:leading-[1.08] tracking-tight
                        transition-all duration-700 ease-out
                        ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
          >
            Ideias em
            <br />
            desenvolvimento.
            <br />
            Impacto em{' '}
            <span className="text-verde">produção</span>
            <span
              aria-hidden="true"
              className="inline-block w-0.75 h-[0.85em] bg-verde ml-1 align-middle motion-safe:animate-pulse"
            />
          </h1>

          <p
            className={`mt-6 font-texto text-base md:text-lg text-off-white/70 max-w-md leading-relaxed
                        transition-all duration-700 ease-out
                        ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
            style={{ transitionDelay: mounted ? '150ms' : '0ms' }}
          >
            Unimos estudantes talentosos e tecnologia de ponta pra resolver
            problemas reais de empresas reais — com o cuidado de quem está
            aprendendo e a ambição de quem quer entregar o melhor.
          </p>


          
          <div
            className={`mt-9 flex flex-col sm:flex-row items-center gap-4 w-full
                        transition-all duration-700 ease-out
                        ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
            style={{ transitionDelay: mounted ? '300ms' : '0ms' }}
          >
            <a
              href="#portfolio"
              className="group w-full sm:w-auto justify-center font-texto text-lg font-medium bg-verde text-off-white px-6 py-3 shadow-md hover:shadow-xl hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 inline-flex items-center gap-2"
            >
              Ver portfólio
              <ArrowRight
                size={18}
                className="transition-transform duration-200 group-hover:translate-x-1"
              />
            </a>
            <a
              href="#fale-conosco"
              className="w-full sm:w-auto text-center font-texto text-lg font-medium text-off-white/80 hover:text-off-white border border-off-white/25 hover:border-off-white/50 px-6 py-3 transition-colors duration-200"
            >
              Fale conosco
            </a>
          </div>
        </div>

        {/* Coluna direita — Imagem */}
        <div
          className={`relative flex items-center justify-center px-6 pb-16 pt-8 md:py-24
                     transition-all duration-1000 ease-out
                     ${mounted ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}
          style={{ transitionDelay: mounted ? '200ms' : '0ms' }}
        >
          <div className="relative w-full max-w-70 sm:max-w-sm md:max-w-full aspect-square">
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

            {/* Wrapper com Perspectiva 3D */}
            <div className="absolute inset-6 group perspective-[1000px]">

              {/* Marcas de canto estáticas */}
              <span className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-verde/70 z-20 pointer-events-none" />
              <span className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-verde/70 z-20 pointer-events-none" />
              <span className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-verde/70 z-20 pointer-events-none" />
              <span className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-verde/70 z-20 pointer-events-none" />

              {/* Frente (Pose 1) */}
              <div
                className="absolute inset-0 flex items-center justify-center transition-transform duration-700 ease-in-out
                           backface-hidden [-webkit-backface-visibility:hidden]
                           transform-[rotateY(0deg)] group-hover:transform-[rotateY(180deg)]"
              >
                <img
                  src="/public/assets/logo/pose1.png"
                  alt="Pose 1"
                  className="max-w-[80%] max-h-[80%] w-auto h-auto object-contain"
                />
              </div>

              {/* Verso (Pose 2) */}
              <div
                className="absolute inset-0 flex items-center justify-center transition-transform duration-700 ease-in-out
                           backface-hidden [-webkit-backface-visibility:hidden]
                           transform-[rotateY(-180deg)] group-hover:transform-[rotateY(0deg)]"
              >
                <img
                  src="/public/assets/logo/pose2.png"
                  alt="Pose 2"
                  className="max-w-[80%] max-h-[80%] w-auto h-auto object-contain"
                />
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero