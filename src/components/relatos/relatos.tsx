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
          <p className="text-gray-600 text-sm md:text-lg lg:text-xl leading-relaxed max-w-2xl">
            Conheça algumas das soluções técnicas e produtos digitais que já desenvolvemos.
          </p>
        </div>

        {/* Container Geral do Carrossel */}
        {/* lg:max-w-6xl expande a largura no PC */}
        <div
          className={`relative w-full max-w-5xl lg:max-w-6xl mx-auto transition-all duration-700 ease-out delay-200
                      ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
        >

          {/* --- BOTÕES DE NAVEGAÇÃO DESKTOP (Laterais) - Aparecem só no lg pra cima --- */}
          <button
            onClick={prevProject}
            className="hidden lg:flex absolute -left-14 top-1/2 -translate-y-1/2 z-30 w-12 h-12 lg:w-14 lg:h-14 items-center justify-center bg-roxo-escuro text-white hover:bg-verde rounded-md shadow-lg transition-colors duration-500 ease-in-out"
            aria-label="Projeto anterior"
          >
            <ChevronLeft size={28} strokeWidth={2.5} />
          </button>

          <button
            onClick={nextProject}
            className="hidden lg:flex absolute -right-14 top-1/2 -translate-y-1/2 z-30 w-12 h-12 lg:w-14 lg:h-14 items-center justify-center bg-verde text-white hover:bg-roxo-escuro rounded-md shadow-lg transition-colors duration-500 ease-in-out"
            aria-label="Próximo projeto"
          >
            <ChevronRight size={28} strokeWidth={2.5} />
          </button>

          {/* --- WRAPPER QUE SEGURA A ALTURA DOS CARDS --- */}
          {/* Seus valores mobile mantidos! No lg, ele sobe para 42rem para ficar imponente no monitor */}
          <div className="relative w-full h-144 sm:h-152 md:h-160 lg:h-168">

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

                  {/* SPANS DOS CANTOS: Adicionado lg:w-12 lg:h-12 para crescerem proporcionalmente no monitor */}
                  <span className={`absolute -top-1 -left-1 w-8 h-8 lg:w-12 lg:h-12 border-t-2 border-l-2 ${projeto.borderColor}`} />
                  <span className={`absolute -top-1 -right-1 w-8 h-8 lg:w-12 lg:h-12 border-t-2 border-r-2 ${projeto.borderColor}`} />
                  <span className={`absolute -bottom-1 -left-1 w-8 h-8 lg:w-12 lg:h-12 border-b-2 border-l-2 ${projeto.borderColor}`} />
                  <span className={`absolute -bottom-1 -right-1 w-8 h-8 lg:w-12 lg:h-12 border-b-2 border-r-2 ${projeto.borderColor}`} />

                  {/* Container do Card Principal */}
                  <div
                    className={`relative z-10 flex flex-col lg:flex-row w-full h-full bg-off-white border border-roxo-escuro/15 ${projeto.hoverBorderColor}
                                shadow-lg md:shadow-[0_25px_50px_-20px_rgba(46,26,71,0.35)] lg:group-hover:shadow-[0_35px_60px_-15px_rgba(46,26,71,0.5)]
                                overflow-hidden transition-all duration-500 ease-out`}
                  >

                    {/* Metade ESQUERDA: Imagem */}
                    {/* Suas alturas mobile mantidas. Imagem e ícone escalam só no lg: */}
                    <div className="w-full lg:w-1/2 h-44 sm:h-48 md:h-52 lg:h-full bg-gray-200 flex flex-col items-center justify-center relative shrink-0 border-b lg:border-b-0 lg:border-r border-roxo-escuro/5">
                      <ImageIcon size={40} className={`${projeto.iconColor} mb-2 md:mb-4 opacity-40 transition-transform duration-500 group-hover:scale-110 group-hover:-rotate-3 md:w-16 md:h-16 lg:w-24 lg:h-24`} />
                      <span className="text-gray-500 text-sm md:text-base lg:text-lg font-medium">Espaço para Imagem</span>
                    </div>

                    {/* Metade DIREITA: Textos e Informações */}
                    {/* lg:p-16 garante que o texto respire no card gigante do PC */}
                    <div className="w-full lg:w-1/2 p-4 sm:p-6 md:p-12 lg:p-16 flex flex-col h-full justify-between lg:justify-center">
                      <div>
                        <div className="inline-flex mb-2 md:mb-4 lg:mb-6">
                          {/* SPAN DA CATEGORIA: Adaptado para ficar maior e mais visível no PC (lg:text-sm lg:px-4 lg:py-1.5) */}
                          <span className={`${projeto.bgColor} text-white px-2 md:px-3 lg:px-4 py-1 lg:py-1.5 text-[10px] md:text-xs lg:text-sm font-bold tracking-widest uppercase rounded`}>
                            {projeto.categoria}
                          </span>
                        </div>

                        {/* Título adaptado para lg:text-5xl */}
                        <h3 className="text-2xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-2 md:mb-6 lg:mb-8">
                          {projeto.titulo}
                        </h3>

                        {/* Texto adaptado para lg:text-xl */}
                        <p className="text-gray-600 text-sm md:text-lg lg:text-xl leading-relaxed mb-4 md:mb-8 line-clamp-4 lg:line-clamp-none">
                          {projeto.descricao}
                        </p>
                      </div>

                      <div className="mt-auto lg:mt-8">
                        {/* Botão cresce em padding e fonte apenas no lg */}
                        <button className={`w-full lg:w-fit justify-center ${projeto.bgColor} text-white transition-all duration-300 px-6 md:px-8 lg:px-10 py-2.5 md:py-3.5 lg:py-4 rounded-md font-semibold text-sm lg:text-base group-hover:scale-[1.02] hover:shadow-lg flex items-center gap-2`}>
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

          {/* --- BOTÕES DE NAVEGAÇÃO MOBILE (Embaixo) --- */}
          {/* Seus valores perfeitamente mantidos */}
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