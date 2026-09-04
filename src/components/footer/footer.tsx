import { Mail, MapPin, ArrowRight } from 'lucide-react'
import { Linkedin, Instagram } from '../icons/socialIcons'

function Footer() {
  const links = [
    { nome: 'Início', href: '/' },
    { nome: 'Quem somos', href: '/#quem-somos' },
    { nome: 'Setores', href: '/#setores' },
    { nome: 'Portfólio', href: '/portfolio' },
    { nome: 'Fale conosco', href: '/#fale-conosco' },
  ]

  return (
    <footer className="relative bg-verde pt-8 md:pt-12 pb-4 md:pb-6 font-texto overflow-hidden border-t border-white/10">

      <div
        aria-hidden="true"
        className="absolute inset-0 z-0 opacity-[0.15] text-white bg-[radial-gradient(currentColor_1px,transparent_1px)] bg-size-[24px_24px]"
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">

        {/* Top Section - Chamada para Ação */}
        <div className="mb-6 md:mb-16 lg:flex lg:items-end lg:justify-between border-b border-white/20 pb-6 md:pb-8">
          <div className="max-w-2xl">
            <h2 className="text-2xl md:text-4xl font-bold text-white mb-2 leading-tight">
              Pronto para <span className="text-roxo-escuro">inovar</span>?
            </h2>
            <p className="text-white/90 text-sm md:text-lg">
              Vamos transformar o desafio do seu negócio em uma solução digital de alto impacto.
            </p>
          </div>
          <a
            href="/contato"
            className="inline-flex w-full lg:w-auto justify-center items-center gap-2 mt-4 lg:mt-0 bg-roxo-escuro text-white px-6 py-2.5 md:py-3 font-bold  hover:scale-[1.02] hover:shadow-[0_0_20px_rgba(46,26,71,0.4)] transition-all duration-300"
          >
            Fale com a gente
            <ArrowRight size={18} strokeWidth={2.5} />
          </a>
        </div>

        {/* Grid Principal do Footer */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-y-6 lg:gap-8 mb-6 md:mb-8">

          {/* Coluna 1: Marca e Descrição */}
          <div className="lg:col-span-5 flex flex-col gap-3 md:gap-5">
            <a href="/" className="relative group w-max p-1.5 inline-block">
              <span className="absolute -top-1 -left-1 w-4 h-4 border-t-2 border-l-2 border-roxo-escuro/80 transition-all duration-500 group-hover:w-full group-hover:h-full group-hover:border-roxo-escuro/30" />
              <span className="absolute -bottom-1 -right-1 w-4 h-4 border-b-2 border-r-2 border-roxo-escuro/80 transition-all duration-500 group-hover:w-full group-hover:h-full group-hover:border-roxo-escuro/30" />
              <img
                src="/assets/logo/branco2.png"
                alt="Marca SciTec"
                className="h-8 md:h-10 w-auto relative z-10"
              />
            </a>
            <p className="text-white/90 text-[13px] md:text-sm leading-relaxed max-w-sm font-medium">
              Transformando desafios de negócios em soluções digitais inteligentes através de tecnologia, dados e engenharia.
            </p>
          </div>

          {/* Coluna 2: Navegação */}
          <div className="hidden lg:flex lg:col-span-3 flex-col gap-5 lg:ml-auto">
            <h3 className="text-white font-bold text-sm tracking-widest uppercase">Navegação</h3>
            <nav className="flex flex-col gap-4">
              {links.map((link) => (
                <a
                  key={link.nome}
                  href={link.href}
                  className="group flex items-center gap-2 text-white/90 hover:text-roxo-escuro transition-colors duration-300 w-max text-sm font-semibold"
                >
                  <span className="w-0 h-0.5 bg-roxo-escuro transition-all duration-300 group-hover:w-4"></span>
                  {link.nome}
                </a>
              ))}
            </nav>
          </div>

          {/* Coluna 3: Contato & Socials */}
          <div className="lg:col-span-4 flex flex-col gap-3 md:gap-5">
            <h3 className="text-white font-bold text-xs md:text-sm tracking-widest uppercase">Contato</h3>

            <div className="flex flex-col gap-2.5 md:gap-4 text-[13px] md:text-sm text-white/90 font-medium">
              <a href="mailto:scitec@scitejr.com" className="flex items-center gap-2.5 hover:text-roxo-escuro transition-colors duration-300 w-max group">
                <div className="p-1.5 md:p-2 bg-white/10 rounded-md group-hover:bg-roxo-escuro transition-colors">
                  <Mail size={14} className="text-white md:w-4 md:h-4" />
                </div>
                scitec@scitejr.com
              </a>
              <div className="flex items-center gap-2.5">
                <div className="p-1.5 md:p-2 bg-white/10 rounded-md">
                  <MapPin size={14} className="text-white md:w-4 md:h-4" />
                </div>
                SJC, SP - Brasil
              </div>
            </div>

            <div className="flex items-center gap-2.5 mt-1 md:mt-2">
              <a href="COLE_O_LINK_DO_LINKEDIN_AQUI" target="_blank" rel="noopener noreferrer" className="w-8 h-8 md:w-10 md:h-10 flex items-center justify-center border border-white/30 rounded-md text-white/90 hover:bg-roxo-escuro hover:text-white hover:border-roxo-escuro transition-all duration-300 hover:-translate-y-1" aria-label="LinkedIn">
                <Linkedin size={16} />
              </a>
              <a href="https://www.instagram.com/scitecjr/" target="_blank" rel="noopener noreferrer" className="w-8 h-8 md:w-10 md:h-10 flex items-center justify-center border border-white/30 rounded-md text-white/90 hover:bg-roxo-escuro hover:text-white hover:border-roxo-escuro transition-all duration-300 hover:-translate-y-1" aria-label="Instagram">
                <Instagram size={16} />
              </a>
            </div>
          </div>

        </div>

        {/* Barra Inferior */}
        <div className="mt-6 md:mt-12 pt-4 md:pt-6 border-t border-white/20 flex flex-col md:flex-row justify-between items-center gap-2 md:gap-4 text-[10px] md:text-xs font-medium text-white/80 text-center md:text-left">
          <p>© {new Date().getFullYear()} SciTec Jr. Todos os direitos reservados.</p>
          <p className="flex items-center justify-center gap-1.5">
            Feito com <span className="w-1.5 h-1.5 rounded-full bg-roxo-escuro animate-pulse"></span> dedicação.
          </p>
        </div>

      </div>
    </footer>
  )
}

export default Footer
