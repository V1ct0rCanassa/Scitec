import { useEffect, useRef, useState } from 'react'
import { Quote, User, ArrowRight } from 'lucide-react'

function Relatos() {
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
      { threshold: 0.15 }
    )

    observer.observe(node)
    return () => observer.disconnect()
  }, [])

  const relatos = [
    {
      id: 1,
      nome: 'Ana Souza',
      cargo: 'Ex-membro | Desenvolvedora Full Stack',
      empresaAtual: 'Atualmente na TechCorp',
      texto: 'A Scitec foi o meu principal laboratório durante a faculdade. Lidar com clientes reais, prazos e a arquitetura de sistemas do zero me deu uma bagagem que nenhum projeto acadêmico conseguiria igualar.',
    },
    {
      id: 2,
      nome: 'Carlos Mendes',
      cargo: 'Ex-Diretor de Projetos | Cientista de Dados',
      empresaAtual: 'Atualmente no DataBank',
      texto: 'A vivência empresarial que tive na Scitec mudou minha carreira. Aprender a transformar dados complexos em valor real para o negócio me colocou anos à frente no mercado de trabalho logo após formado.',
    },
    {
      id: 3,
      nome: 'Beatriz Lima',
      cargo: 'Ex-membro | Engenheira de Software',
      empresaAtual: 'Atualmente na Inovação.io',
      texto: 'Muito além do código, a Scitec me ensinou sobre liderança, trabalho em equipe e metodologias ágeis. Foi a ponte perfeita entre a teoria da universidade e a exigência das grandes empresas de tecnologia.',
    },
    {
      id: 4,
      nome: 'Diego Costa',
      cargo: 'Ex-Diretor de Mercado | Product Manager',
      empresaAtual: 'Atualmente na FintechX',
      texto: 'A autonomia que tivemos para planejar, errar e pivotar estratégias na Scitec foi fundamental. Aprendi a gerenciar produtos e pessoas com uma visão de negócios que aplico todos os dias no mercado corporativo.',
    }
  ]

  return (
    <section ref={sectionRef} className="relative py-16 md:py-24 bg-roxo-escuro font-texto overflow-hidden" id="relatos">

      {/* Estilo para esconder a barra de rolagem nativa no celular */}
      <style>
        {`
          .hide-scrollbar::-webkit-scrollbar {
            display: none;
          }
          .hide-scrollbar {
            -ms-overflow-style: none;
            scrollbar-width: none;
          }
        `}
      </style>

      <div
        aria-hidden="true"
        className="absolute inset-0 z-0 opacity-[0.05] text-white bg-[radial-gradient(currentColor_1px,transparent_1px)] bg-size-[24px_24px]"
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 lg:px-8">
        
        <div
          className={`flex flex-col items-center text-center mb-6 md:mb-10
                      transition-all duration-700 ease-out
                      ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
        >
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 md:mb-6 leading-tight">
            Nossa história através dos <span className="text-verde">ex-membros</span>
          </h2>
          <p className="text-gray-300 text-sm md:text-lg leading-relaxed max-w-2xl">
            A Scitec é uma escola de talentos. Veja o impacto da experiência na empresa júnior na carreira de quem já passou por aqui.
          </p>
        </div>

        {/* Indicador visual de "Deslize" (Aparece SÓ NO CELULAR/TABLET -> lg:hidden) */}
        <div 
          className={`flex lg:hidden justify-end transition-all duration-1000 delay-300
                      ${visible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-4'}`}
        >
          <span className="flex items-center gap-2 text-verde/90 text-sm font-semibold animate-pulse mb-2 mr-2">
            Deslize para ler <ArrowRight size={16} strokeWidth={2.5} />
          </span>
        </div>

      </div>

      {/* Container Principal */}
      <div
        className={`relative w-full transition-all duration-1000 delay-200 ease-out
                    ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
      >
        <div className="relative w-full lg:max-w-7xl lg:mx-auto">
          
          {/* Sombras laterais (Aparecem SÓ NO CELULAR para dar efeito de carrossel infinito) */}
          <div className="lg:hidden absolute left-0 top-0 bottom-0 w-4 z-20 pointer-events-none bg-gradient-to-r from-roxo-escuro to-transparent" />
          <div className="lg:hidden absolute right-0 top-0 bottom-0 w-16 z-20 pointer-events-none bg-gradient-to-l from-roxo-escuro to-transparent" />
          
          {/* MÁGICA RESPONSIVA AQUI:
            Mobile: flex, overflow-x-auto (carrossel)
            PC (lg): grid, grid-cols-2 (layout 2x2 estático)
          */}
          <div className="flex lg:grid lg:grid-cols-2 overflow-x-auto lg:overflow-visible snap-x snap-mandatory lg:snap-none gap-6 md:gap-8 px-4 lg:px-8 py-4 items-stretch hide-scrollbar scroll-smooth w-full">
            
            {relatos.map((relato) => (
              <div
                key={relato.id}
                // Mobile: largura fixa (85vw) e snap-center | PC (lg): largura 100% da coluna do grid
                className="group relative flex flex-col shrink-0 lg:shrink w-[85vw] sm:w-[24rem] lg:w-full h-auto snap-center lg:snap-align-none"
              >
                <div
                  aria-hidden="true"
                  className="absolute inset-0 -z-10 opacity-[0.15] bg-[radial-gradient(currentColor_1px,transparent_1px)] bg-size-[16px_16px] text-verde"
                />

                <div className="relative flex flex-col h-full p-0.5 mt-2">
                  <span className="absolute -top-1 -left-1 w-8 h-8 border-t-2 border-l-2 border-verde/90" />
                  <span className="absolute -top-1 -right-1 w-8 h-8 border-t-2 border-r-2 border-verde/90" />
                  <span className="absolute -bottom-1 -left-1 w-8 h-8 border-b-2 border-l-2 border-verde/90" />
                  <span className="absolute -bottom-1 -right-1 w-8 h-8 border-b-2 border-r-2 border-verde/90" />

                  {/* Card em si */}
                  <div
                    className="relative z-10 flex flex-col h-full bg-off-white border border-verde/20 group-hover:border-verde/60
                               shadow-[0_15px_30px_-15px_rgba(0,0,0,0.5)] md:shadow-[0_25px_50px_-20px_rgba(0,0,0,0.5)] 
                               group-hover:shadow-[0_35px_60px_-15px_rgba(0,0,0,0.7)]
                               overflow-hidden transition-all duration-500 ease-out md:group-hover:-translate-y-2 p-6 md:p-8"
                  >
                    <Quote size={48} className="absolute top-4 right-4 md:top-6 md:right-6 md:w-16 md:h-16 text-roxo-escuro/5 -rotate-12 transition-transform duration-500 group-hover:scale-110 group-hover:-rotate-6" />

                    <div className="relative z-10 mb-6 md:mb-8 grow">
                      <p className="text-gray-700 text-sm md:text-base leading-relaxed italic">
                        "{relato.texto}"
                      </p>
                    </div>

                    <div className="relative z-10 flex items-center gap-3 md:gap-4 pt-4 md:pt-6 border-t border-gray-200">
                      <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-gray-200 flex items-center justify-center shrink-0 border border-verde/30">
                        <User size={20} className="text-gray-400 md:w-6 md:h-6" />
                      </div>

                      <div className="flex flex-col">
                        <h4 className="text-base md:text-lg font-bold text-roxo-escuro leading-tight">
                          {relato.nome}
                        </h4>
                        <span className="text-verde text-[10px] md:text-xs font-bold uppercase tracking-wide mt-0.5 md:mt-1">
                          {relato.cargo}
                        </span>
                        <span className="text-gray-500 text-[10px] md:text-xs mt-0.5">
                          {relato.empresaAtual}
                        </span>
                      </div>
                    </div>

                  </div>
                </div>
              </div>
            ))}
            
            {/* Espaçador invisível no final (Aparece SÓ NO CELULAR) para a margem da direita não colar */}
            <div className="lg:hidden shrink-0 w-4 sm:w-8" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Relatos