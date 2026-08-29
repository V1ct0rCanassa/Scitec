import { ArrowRight } from 'lucide-react'

function Hero() {
  return (
    <section id="inicio" className="relative bg-roxo-escuro overflow-hidden">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 items-stretch">
        {/* Coluna esquerda — copy */}
        <div className="flex flex-col justify-center px-2 py-24 md:pr-14">
          <h1 className="font-texto font-semibold text-off-white text-4xl sm:text-5xl lg:text-[3.4rem] leading-[1.08] tracking-tight">
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

          <p className="mt-6 font-texto text-lg text-off-white/70 max-w-md leading-relaxed">
            Unimos estudantes talentosos e tecnologia de ponta pra resolver
            problemas reais de empresas reais — com o cuidado de quem está
            aprendendo e a ambição de quem quer entregar o melhor.
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-4">
            <a
              href="#portfolio"
              className="group font-texto text-lg font-medium bg-verde text-off-white px-6 py-3 shadow-md hover:shadow-xl hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 inline-flex items-center gap-2"
            >
              Ver portfólio
              <ArrowRight
                size={18}
                className="transition-transform duration-200 group-hover:translate-x-1"
              />
            </a>
            <a
              href="#fale-conosco"
              className="font-texto text-lg font-medium text-off-white/80 hover:text-off-white border border-off-white/25 hover:border-off-white/50 px-6 py-3 transition-colors duration-200"
            >
              Fale conosco
            </a>
          </div>
        </div>

        {/* Coluna direita — espaço reservado pra imagem */}
        <div className="relative flex items-center justify-center px-2 py-24 min-h-95 md:min-h-0 border-t md:border-t-0 md:border-l border-off-white/1">
          <div className="relative w-full max-w-full aspect-square">
            {/* Fundo em grade de pontos, sutil, tema "circuito" */}
            <div
              aria-hidden="true"
              className="absolute inset-0 opacity-[0.15]"
              style={{
                backgroundImage:
                  'radial-gradient(currentColor 1px, transparent 1px)',
                backgroundSize: '22px 22px',
                color: '#FDFCFA',
              }}
            />

            <div className="absolute inset-6 flex items-center justify-center">
              {/* Marcas de canto, estilo mira/enquadramento */}
              <span className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-verde/70" />
              <span className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-verde/70" />
              <span className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-verde/70" />
              <span className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-verde/70" />

              <img
                src="/src/assets/logo/pose1.png"
                alt="descrição"
                className="max-w-[80%] max-h-[80%] w-auto h-auto object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
