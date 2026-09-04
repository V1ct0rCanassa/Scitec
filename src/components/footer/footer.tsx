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
    <footer className="relative bg-verde pt-12 pb-6 font-texto overflow-hidden border-t border-white/10">

      {/* Fundo Dotted em branco com baixa opacidade para textura */}
      <div
        aria-hidden="true"
        className="absolute inset-0 z-0 opacity-[0.15] text-white bg-[radial-gradient(currentColor_1px,transparent_1px)] bg-size-[24px_24px]"
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 lg:px-8">

        {/* Top Section - Chamada para Ação (CTA) com paddings e margins menores */}
        <div className="mb-10 md:flex md:items-end md:justify-between border-b border-white/20 pb-6">
          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-2 leading-tight">
              Pronto para <span className="text-roxo-escuro">inovar</span>?
            </h2>
            <p className="text-white/90 text-base md:text-lg">
              Vamos transformar o desafio do seu negócio em uma solução digital de alto impacto.
            </p>
          </div>
          <a
            href="/#fale-conosco"
            className="inline-flex items-center gap-2 mt-6 md:mt-0 bg-roxo-escuro text-white px-6 py-3 font-bold hover:scale-[1.02] hover:shadow-[0_0_20px_rgba(46,26,71,0.4)] transition-all duration-300"
          >
            Fale com a gente
            <ArrowRight size={20} strokeWidth={2.5} />
          </a>
        </div>

        {/* Grid Principal do Footer - gaps e margins reduzidos */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12 mb-8">

          {/* Coluna 1: Marca e Descrição */}
          <div className="md:col-span-5 lg:col-span-4 flex flex-col gap-4">
            <a href="/" className="relative group w-max p-2 inline-block">
              {/* Cantos estruturais em Roxo Escuro */}
              <span className="absolute -top-1 -left-1 w-4 h-4 border-t-2 border-l-2 border-roxo-escuro/80 transition-all duration-500 group-hover:w-full group-hover:h-full group-hover:border-roxo-escuro/30" />
              <span className="absolute -bottom-1 -right-1 w-4 h-4 border-b-2 border-r-2 border-roxo-escuro/80 transition-all duration-500 group-hover:w-full group-hover:h-full group-hover:border-roxo-escuro/30" />

              <img
                src="/src/assets/logo/branco2.png"
                alt="Marca SciTec"
                className="h-10 w-auto relative z-10"
              />
            </a>
            <p className="text-white/80 text-sm leading-relaxed max-w-sm font-medium">
              Transformando desafios de negócios em soluções digitais inteligentes através de tecnologia, dados e engenharia. A excelência da vivência empresarial universitária.
            </p>
          </div>

          {/* Coluna 2: Navegação */}
          <div className="md:col-span-3 lg:col-span-4 flex flex-col gap-4 md:ml-auto">
            <h3 className="text-white font-bold text-sm tracking-widest uppercase">Navegação</h3>
            <nav className="flex flex-col gap-3">
              {links.map((link) => (
                <a
                  key={link.nome}
                  href={link.href}
                  className="group flex items-center gap-3 text-white/80 hover:text-roxo-escuro transition-colors duration-300 w-max text-sm font-semibold"
                >
                  {/* Tracinho animado Roxo ao fazer hover */}
                  <span className="w-0 h-0.5 bg-roxo-escuro transition-all duration-300 group-hover:w-4"></span>
                  {link.nome}
                </a>
              ))}
            </nav>
          </div>

          {/* Coluna 3: Contato & Socials */}
          <div className="md:col-span-4 flex flex-col gap-4">
            <h3 className="text-white font-bold text-sm tracking-widest uppercase">Contato</h3>

            <div className="flex flex-col gap-3 text-sm text-white/80 font-medium">
              <a
                href="mailto:contato@suaempresa.com"
                className="flex items-center gap-3 hover:text-roxo-escuro transition-colors duration-300 w-max group"
              >
                <div className="p-2 bg-white/10 rounded-md group-hover:bg-roxo-escuro transition-colors">
                  <Mail size={16} className="text-white group-hover:text-white transition-colors" />
                </div>
                scitec@scitejr.com
              </a>
              <div className="flex items-center gap-3">
                <div className="p-2 bg-white/10 rounded-md">
                  <MapPin size={16} className="text-white" />
                </div>
                São José dos Campos, SP - Brasil
              </div>
            </div>

            {/* Redes Sociais em blocos quadrados - Menos margin-top */}
            <div className="flex items-center gap-3 mt-2">
              <a
                href="COLE_O_LINK_DO_LINKEDIN_AQUI"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 flex items-center justify-center border border-white/30 rounded-md text-white/90 hover:bg-roxo-escuro hover:text-white hover:border-roxo-escuro transition-all duration-300 hover:-translate-y-1"
                aria-label="LinkedIn"
              >
                <Linkedin size={16} />
              </a>
              <a
                href="https://www.instagram.com/scitecjr/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 flex items-center justify-center border border-white/30 rounded-md text-white/90 hover:bg-roxo-escuro hover:text-white hover:border-roxo-escuro transition-all duration-300 hover:-translate-y-1"
                aria-label="Instagram"
              >
                <Instagram size={16} />
              </a>
            </div>
          </div>

        </div>

        {/* Barra Inferior de Direitos Autorais - Menos espaçamento superior */}
        <div className="mt-8 pt-4 border-t border-white/20 flex flex-col md:flex-row justify-between items-center gap-3 text-xs font-medium text-white/70">
          <p>© {new Date().getFullYear()} SciTec Jr. Todos os direitos reservados.</p>
          <p className="flex items-center gap-1.5">
            Feito com <span className="w-1.5 h-1.5 rounded-full bg-roxo-escuro animate-pulse"></span> dedicação.
          </p>
        </div>

      </div>
    </footer>
  )
}

export default Footer
