import { useState } from 'react'
import { ChevronLeft, ChevronRight, ImageIcon } from 'lucide-react'

function Projetos() {
  // Criamos uma lista com 5 projetos para o efeito de rotação ficar perfeito
  const projetos = [
    { id: 1, categoria: 'Web', titulo: 'Projeto Alpha' },
    { id: 2, categoria: 'Dados', titulo: 'Projeto Beta' },
    { id: 3, categoria: 'Sistemas', titulo: 'Projeto Gamma' },
    { id: 4, categoria: 'Design', titulo: 'Projeto Delta' },
    { id: 5, categoria: 'Mobile', titulo: 'Projeto Epsilon' },
  ]

  // Estado para controlar qual card está no meio
  const [currentIndex, setCurrentIndex] = useState(0)

  // Funções para passar os slides (indo e voltando e fazendo o "giro" infinito)
  const nextProject = () => {
    setCurrentIndex((prev) => (prev === projetos.length - 1 ? 0 : prev + 1))
  }

  const prevProject = () => {
    setCurrentIndex((prev) => (prev === 0 ? projetos.length - 1 : prev - 1))
  }

  return (
    <section className="py-24 bg-slate-50 font-texto overflow-hidden" id="portfolio">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        
        {/* Cabeçalho */}
        <div className="flex flex-col items-center text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-roxo-escuro mb-6 leading-tight">
            Nossos Projetos
          </h2>
          <div className="w-16 h-1.5 bg-verde"></div>
        </div>

        {/* Container do Carrossel 3D */}
        <div className="relative w-full h-125 flex justify-center items-center">
          
          {/* Botão Voltar */}
          <button 
            onClick={prevProject}
            className="absolute left-2 md:left-10 z-30 p-3 bg-white/80 hover:bg-white text-roxo-escuro rounded-full shadow-lg transition-all hover:scale-110"
          >
            <ChevronLeft size={32} strokeWidth={3} />
          </button>

          {/* Botão Avançar */}
          <button 
            onClick={nextProject}
            className="absolute right-2 md:right-10 z-30 p-3 bg-white/80 hover:bg-white text-roxo-escuro rounded-full shadow-lg transition-all hover:scale-110"
          >
            <ChevronRight size={32} strokeWidth={3} />
          </button>

          {/* Cards Mapeados */}
          {projetos.map((projeto, index) => {
            // Lógica para descobrir a posição do card em relação ao centro
            const isCurrent = index === currentIndex
            const isPrev = index === (currentIndex === 0 ? projetos.length - 1 : currentIndex - 1)
            const isNext = index === (currentIndex === projetos.length - 1 ? 0 : currentIndex + 1)

            // Classes base do card (com transição suave para animar quando mudar de posição)
            const baseClasses = "absolute transition-all duration-500 ease-in-out rounded-3xl flex flex-col overflow-hidden shadow-2xl border border-white/10 "
            let positionClasses;

            // Configurando as posições (Centro, Esquerda, Direita e Ocultos)
            if (isCurrent) {
              positionClasses = "z-20 scale-100 opacity-100 translate-x-0 bg-[#5C34AD]"
            } else if (isPrev) {
              // Fica na esquerda, menor (scale-75) e um pouco transparente
              positionClasses = "z-10 scale-[0.8] md:scale-75 -translate-x-[60%] md:-translate-x-[110%] opacity-40 hover:opacity-80 cursor-pointer bg-[#5C34AD]"
            } else if (isNext) {
              // Fica na direita, menor (scale-75) e um pouco transparente
              positionClasses = "z-10 scale-[0.8] md:scale-75 translate-x-[60%] md:translate-x-[110%] opacity-40 hover:opacity-80 cursor-pointer bg-[#5C34AD]"
            } else {
              // Esconde os outros cards que não estão visíveis no momento
              positionClasses = "z-0 scale-50 opacity-0 pointer-events-none translate-x-0"
            }

            return (
              <div 
                key={projeto.id}
                // Se clicar em um card lateral, ele vem pro meio!
                onClick={() => { if (isPrev || isNext) setCurrentIndex(index) }}
                className={`${baseClasses} ${positionClasses} w-72 md:w-95 h-112.5`}
              >
                
                {/* Metade de Cima: Imagem */}
                <div className="w-full h-48 bg-white/10 flex flex-col items-center justify-center relative shrink-0">
                  <ImageIcon size={40} className="text-white/30 mb-2" />
                  <span className="text-white/40 text-sm font-medium">Espaço para Imagem</span>
                  
                  {/* <img src="/sua-imagem.jpg" alt="Projeto" className="w-full h-full object-cover absolute inset-0" /> */}
                </div>

                {/* Metade de Baixo: Textos */}
                <div className="p-6 flex flex-col grow">
                  <span className="text-verde text-xs font-bold tracking-widest uppercase mb-2">
                    {projeto.categoria}
                  </span>
                  
                  <h3 className="text-2xl font-bold text-white mb-3">
                    {projeto.titulo}
                  </h3>
                  
                  <p className="text-white/70 text-sm leading-relaxed grow">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore.
                  </p>
                  
                  <button className="mt-4 w-full bg-verde/10 hover:bg-verde text-verde hover:text-roxo-escuro border border-verde transition-colors duration-300 py-2.5 rounded-lg font-bold text-sm">
                    Ver Projeto
                  </button>
                </div>

              </div>
            )
          })}

        </div>
      </div>
    </section>
  )
}

export default Projetos