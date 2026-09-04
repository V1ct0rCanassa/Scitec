import { useEffect, useRef, useState } from 'react'
import { ChevronLeft, ChevronRight, ImageIcon } from 'lucide-react'

function Projetos() {
  const sectionRef = useRef<HTMLElement>(null)
  const [visible, setVisible] = useState(false)

  // Animação de entrada ao scrollar
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

  const projetos = [
    {
      id: 1, categoria: 'Web', titulo: 'Projeto Alpha',
      iconColor: 'text-verde', bgColor: 'bg-verde',
      borderColor: 'border-roxo-escuro/70', hoverBorderColor: 'group-hover:border-roxo-escuro/60',
      descricao: 'Desenvolvemos uma plataforma web completa do zero, unindo alta performance no back-end e uma interface fluida no front-end para otimizar os processos internos do cliente.'
    },
    {
      id: 2, categoria: 'Dados', titulo: 'Projeto Beta',
      iconColor: 'text-roxo-escuro', bgColor: 'bg-roxo-escuro',
      borderColor: 'border-verde/70', hoverBorderColor: 'group-hover:border-verde/60',
      descricao: 'Estruturação de um pipeline de dados inteligente, transformando gigabytes de dados brutos em dashboards dinâmicos que apoiam a tomada de decisão em tempo real.'
    },
    {
      id: 3, categoria: 'Sistemas', titulo: 'Projeto Gamma',
      iconColor: 'text-verde', bgColor: 'bg-verde',
      borderColor: 'border-roxo-escuro/70', hoverBorderColor: 'group-hover:border-roxo-escuro/60',
      descricao: 'Criação de um sistema de gestão sob medida para resolver gargalos operacionais, integrando setores e automatizando tarefas manuais com segurança e escalabilidade.'
    },
    {
      id: 4, categoria: 'Design', titulo: 'Projeto Delta',
      iconColor: 'text-roxo-escuro', bgColor: 'bg-roxo-escuro',
      borderColor: 'border-verde/70', hoverBorderColor: 'group-hover:border-verde/60',
      descricao: 'Redesign completo da jornada do usuário em um aplicativo financeiro, aplicando metodologias de UX/UI para reduzir o abandono e aumentar o engajamento.'
    },
    {
      id: 5, categoria: 'Mobile', titulo: 'Projeto Epsilon',
      iconColor: 'text-verde', bgColor: 'bg-verde',
      borderColor: 'border-roxo-escuro/70', hoverBorderColor: 'group-hover:border-roxo-escuro/60',
      descricao: 'Aplicativo nativo construído com as melhores práticas de engenharia de software, garantindo funcionamento offline, rapidez e uma experiência nativa impecável.'
    },
  ]

  const [currentIndex, setCurrentIndex] = useState(0)

  const nextProject = () => {
    setCurrentIndex((prev) => (prev === projetos.length - 1 ? 0 : prev + 1))
  }

  const prevProject = () => {
    setCurrentIndex((prev) => (prev === 0 ? projetos.length - 1 : prev - 1))
  }

  return (
    <section ref={sectionRef} className="py-10 md:py-24 bg-off-white font-texto overflow-hidden" id="portfolio">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">

        {/* Cabeçalho */}
        <div
          className={`flex flex-col items-center text-center mb-8 md:mb-16
                      transition-all duration-700 ease-out
                      ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
        >
          <h2 className="text-3xl md:text-5xl font-bold text-roxo-escuro mb-3 md:mb-6 leading-tight">
            Nossos <span className="text-verde">Projetos</span>
          </h2>
          <p className="text-gray-600 text-sm md:text-lg leading-relaxed max-w-2xl">
            Conheça algumas das soluções técnicas e produtos digitais que já desenvolvemos.
          </p>
        </div>

        {/* Container Geral do Carrossel */}
        <div
          className={`relative w-full max-w-5xl mx-auto transition-all duration-700 ease-out delay-200
                      ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
        >

          {/* --- BOTÕES DE NAVEGAÇÃO DESKTOP (Laterais) - Aparecem só no lg pra cima --- */}
          <button
            onClick={prevProject}
            className="hidden lg:flex absolute -left-14 top-1/2 -translate-y-1/2 z-30 w-12 h-12 items-center justify-center bg-roxo-escuro text-white hover:bg-verde rounded-md shadow-lg transition-colors duration-500 ease-in-out"
            aria-label="Projeto anterior"
          >
            <ChevronLeft size={24} strokeWidth={2.5} />
          </button>

          <button
            onClick={nextProject}
            className="hidden lg:flex absolute -right-14 top-1/2 -translate-y-1/2 z-30 w-12 h-12 items-center justify-center bg-verde text-white hover:bg-roxo-escuro rounded-md shadow-lg transition-colors duration-500 ease-in-out"
            aria-label="Próximo projeto"
          >
            <ChevronRight size={24} strokeWidth={2.5} />
          </button>

          {/* --- WRAPPER QUE SEGURA A ALTURA DOS CARDS --- */}
          {/* Altura adaptável: Mais alto em telas menores (para empilhar imagem e texto), e otimizado no PC (lg:) */}
          <div className="relative w-full h-144 sm:h-152 md:h-160 lg:h-128">

            {projetos.map((projeto, index) => {
              const isCurrent = index === currentIndex

              return (
                <div
                  key={projeto.id}
                  className={`absolute inset-0 transition-all duration-700 ease-in-out group p-1.5 md:p-2 flex
                    ${isCurrent ? 'opacity-100 z-20 translate-y-0 scale-100' : 'opacity-0 z-0 translate-y-8 scale-95 pointer-events-none'}
                  `}
                >

                  <div aria-hidden="true" className={`absolute inset-0 -z-10 opacity-[0.15] bg-[radial-gradient(currentColor_1px,transparent_1px)] bg-size-[16px_16px] ${projeto.iconColor}`} />

                  {/* Elementos Quadrados dos Cantos */}
                  <span className={`absolute -top-1 -left-1 w-8 h-8 border-t-2 border-l-2 ${projeto.borderColor}`} />
                  <span className={`absolute -top-1 -right-1 w-8 h-8 border-t-2 border-r-2 ${projeto.borderColor}`} />
                  <span className={`absolute -bottom-1 -left-1 w-8 h-8 border-b-2 border-l-2 ${projeto.borderColor}`} />
                  <span className={`absolute -bottom-1 -right-1 w-8 h-8 border-b-2 border-r-2 ${projeto.borderColor}`} />

                  {/* Container do Card Principal */}
                  {/* Mudamos de md:flex-row para lg:flex-row. Abaixo de lg (celular e tablet), ele empilha (flex-col) */}
                  <div
                    className={`relative z-10 flex flex-col lg:flex-row w-full h-full bg-off-white border border-roxo-escuro/15 ${projeto.hoverBorderColor}
                                shadow-lg md:shadow-[0_25px_50px_-20px_rgba(46,26,71,0.35)] lg:group-hover:shadow-[0_35px_60px_-15px_rgba(46,26,71,0.5)]
                                overflow-hidden transition-all duration-500 ease-out`}
                  >

                    {/* Metade ESQUERDA: Imagem */}
                    {/* Altura proporcional em telas menores e largura de metade no PC (lg:w-1/2) */}
                    <div className="w-full lg:w-1/2 h-44 sm:h-48 md:h-52 lg:h-full bg-gray-200 flex flex-col items-center justify-center relative shrink-0 border-b lg:border-b-0 lg:border-r border-roxo-escuro/5">
                      <ImageIcon size={40} className={`${projeto.iconColor} mb-2 md:mb-4 opacity-40 transition-transform duration-500 group-hover:scale-110 group-hover:-rotate-3 md:w-16 md:h-16`} />
                      <span className="text-gray-500 text-sm md:text-base font-medium">Espaço para Imagem</span>
                    </div>

                    {/* Metade DIREITA: Textos e Informações */}
                    <div className="w-full lg:w-1/2 p-5 sm:p-6 md:p-8 lg:p-12 flex flex-col h-full justify-between">
                      <div>
                        <div className="inline-flex mb-2 md:mb-3">
                          <span className={`${projeto.bgColor} text-white px-2.5 py-1 text-[10px] md:text-xs font-bold tracking-widest uppercase rounded`}>
                            {projeto.categoria}
                          </span>
                        </div>

                        <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-2 md:mb-4">
                          {projeto.titulo}
                        </h3>

                        <p className="text-gray-600 text-sm sm:text-base lg:text-lg leading-relaxed line-clamp-3 lg:line-clamp-none">
                          {projeto.descricao}
                        </p>
                      </div>

                      <div className="mt-4 lg:mt-0">
                        <button className={`w-full lg:w-fit justify-center ${projeto.bgColor} text-white transition-all duration-300 px-6 lg:px-8 py-2.5 lg:py-3.5 rounded-md font-semibold text-sm group-hover:scale-[1.02] hover:shadow-lg flex items-center gap-2`}>
                          Explorar Case
                          <ChevronRight size={18} />
                        </button>
                      </div>
                    </div>

                  </div>
                </div>
              )
            })}

          </div>

          {/* --- BOTÕES DE NAVEGAÇÃO TABLET / MOBILE (Embaixo) - Aparecem até lg --- */}
          <div className="flex lg:hidden items-center justify-center gap-6 mt-6">
            <button
              onClick={prevProject}
              className="w-12 h-12 flex items-center justify-center bg-roxo-escuro text-white active:bg-verde rounded-md shadow-md transition-colors"
              aria-label="Projeto anterior"
            >
              <ChevronLeft size={24} strokeWidth={2.5} />
            </button>
            <button
              onClick={nextProject}
              className="w-12 h-12 flex items-center justify-center bg-verde text-white active:bg-roxo-escuro rounded-md shadow-md transition-colors"
              aria-label="Próximo projeto"
            >
              <ChevronRight size={24} strokeWidth={2.5} />
            </button>
          </div>

        </div>
      </div>
    </section>
  )
}

export default Projetos 