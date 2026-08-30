import { useEffect, useRef, useState } from 'react'
import { Quote, User } from 'lucide-react'

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
    <section ref={sectionRef} className="relative py-24 bg-roxo-escuro font-texto overflow-hidden" id="relatos">

      <div
        aria-hidden="true"
        className="absolute inset-0 z-0 opacity-[0.05] text-white [background-image:radial-gradient(currentColor_1px,transparent_1px)] [background-size:24px_24px]"
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 lg:px-8">

        <div
          className={`flex flex-col items-center text-center mb-16
                      transition-all duration-700 ease-out
                      ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
            Nossa história através dos <span className="text-verde">ex-membros</span>
          </h2>
          <p className="text-gray-300 text-lg leading-relaxed max-w-2xl">
            A Scitec é uma escola de talentos. Veja o impacto da experiência na empresa júnior na carreira de quem já passou por aqui.
          </p>
        </div>

        {/* Layout 2x2 no Desktop (md:grid-cols-2) para os 4 cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
          {relatos.map((relato, index) => (
            <div
              key={relato.id}
              className={`group relative flex flex-col w-full
                          transition-all duration-700 ease-out
                          ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
              style={{ transitionDelay: visible ? `${200 + index * 100}ms` : '0ms' }}
            >

              <div
                aria-hidden="true"
                className="absolute inset-0 -z-10 opacity-[0.15] [background-image:radial-gradient(currentColor_1px,transparent_1px)] [background-size:16px_16px] text-verde"
              />

              <div className="relative flex flex-col flex-1 p-0.5 mt-2">

                <span className="absolute -top-1 -left-1 w-8 h-8 border-t-2 border-l-2 border-verde/90" />
                <span className="absolute -top-1 -right-1 w-8 h-8 border-t-2 border-r-2 border-verde/90" />
                <span className="absolute -bottom-1 -left-1 w-8 h-8 border-b-2 border-l-2 border-verde/90" />
                <span className="absolute -bottom-1 -right-1 w-8 h-8 border-b-2 border-r-2 border-verde/90" />

                <div
                  className="relative z-10 flex flex-col flex-1 bg-off-white border border-verde/20 group-hover:border-verde/60
                             shadow-[0_25px_50px_-20px_rgba(0,0,0,0.5)] group-hover:shadow-[0_35px_60px_-15px_rgba(0,0,0,0.7)]
                             overflow-hidden transition-all duration-500 ease-out group-hover:-translate-y-2 p-8"
                  style={{ transitionTimingFunction: 'cubic-bezier(0.22, 1, 0.36, 1)' }}
                >

                  <Quote size={64} className="absolute top-6 right-6 text-roxo-escuro/5 -rotate-12 transition-transform duration-500 group-hover:scale-110 group-hover:-rotate-6" />

                  <div className="relative z-10 mb-8 grow">
                    <p className="text-gray-700 leading-relaxed italic">
                      "{relato.texto}"
                    </p>
                  </div>

                  <div className="relative z-10 flex items-center gap-4 pt-6 border-t border-gray-200">
                    <div className="w-12 h-12 rounded-full bg-gray-200 flex items-center justify-center shrink-0 border border-verde/30">
                      <User size={24} className="text-gray-400" />
                    </div>

                    <div className="flex flex-col">
                      <h4 className="text-lg font-bold text-roxo-escuro leading-tight">
                        {relato.nome}
                      </h4>
                      <span className="text-verde text-xs font-bold uppercase tracking-wide mt-1">
                        {relato.cargo}
                      </span>
                      <span className="text-gray-500 text-xs mt-0.5">
                        {relato.empresaAtual}
                      </span>
                    </div>
                  </div>

                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Relatos
