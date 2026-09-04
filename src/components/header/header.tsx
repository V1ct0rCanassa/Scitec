import { useState, useRef, useEffect } from 'react'
import { ChevronDown, Cpu, Database, Lightbulb, PenTool, Microscope, Menu, X } from 'lucide-react'
import { Link } from 'react-router-dom'

function Header() {
  // ESTADOS DO DESKTOP (PC)
  const [isServicesOpen, setIsServicesOpen] = useState(false)
  const [isDropdownMounted, setIsDropdownMounted] = useState(false)

  // ESTADOS DO MOBILE (CELULAR)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false) // <-- Novo estado independente!

  const dropdownRef = useRef<HTMLDivElement>(null)

  // Lógica do Desktop: Fecha ao clicar fora
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsServicesOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  // Lógica do Desktop: Animação
  useEffect(() => {
    if (!isServicesOpen) {
      const timeout = setTimeout(() => setIsDropdownMounted(false), 200)
      return () => clearTimeout(timeout)
    }
  }, [isServicesOpen])

  // Lógica do Mobile: Fecha o menu inteiro ao clicar em qualquer link
  function closeMobileMenu() {
    setIsMobileMenuOpen(false)
    setIsMobileServicesOpen(false) // Garante que a sanfoninha também resete
  }

  const setores = [
    { nome: 'Tecnologia e Software', descricao: 'Sistemas e produtos digitais', Icone: Cpu, link: '/tecnologia' },
    { nome: 'Dados e Inteligência', descricao: 'Análise e IA aplicada ao negócio', Icone: Database, link: '/dados' },
    { nome: 'Engenharia e Inovação', descricao: 'Soluções técnicas sob medida', Icone: Lightbulb, link: '/engenharia' },
    { nome: 'Design & Concepção', descricao: 'Interfaces, UX e prototipagem', Icone: PenTool, link: '/design' },
    { nome: 'Ciência e Consultoria', descricao: 'Pesquisa avançada e estratégia', Icone: Microscope, link: '/ciencia' },
  ]

  return (
    <header className="relative z-50 bg-roxo-escuro">
      <div className="max-w-7xl mx-auto px-4 w-full flex items-center justify-between">

        {/* Logo */}
        <Link to="/" className="shrink-0" onClick={closeMobileMenu}>
          <img src="/src/assets/logo/branco2.png" alt="Marca" className="h-20 w-auto" />
        </Link>

        {/* --- NAVEGAÇÃO DESKTOP --- */}
        <nav className="hidden md:flex items-center gap-10 font-texto text-lg">
          <Link to="/" className="text-off-white/80 hover:text-off-white transition-colors">Início</Link>
          <a href="/#quem-somos" className="text-off-white/80 hover:text-off-white transition-colors">Quem somos</a>

          <div
            className="relative"
            ref={dropdownRef}
            onMouseEnter={() => {
              setIsDropdownMounted(true)
              setIsServicesOpen(true)
            }}
            onMouseLeave={() => setIsServicesOpen(false)}
          >
            <button className="flex items-center gap-1.5 text-off-white/80 hover:text-off-white pb-2 pt-2">
              Setores
              <ChevronDown size={18} className={`transition-transform duration-200 ${isServicesOpen ? 'rotate-180' : ''}`} />
            </button>

            {isDropdownMounted && (
              <div className={`absolute top-full left-1/2 -translate-x-1/2 mt-1 w-80 bg-off-white shadow-2xl overflow-hidden py-2 transition-all duration-200 ${isServicesOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-2 pointer-events-none'}`}>
                {setores.map((setor) => (
                  <Link
                    key={setor.nome}
                    to={setor.link}
                    onClick={() => setIsServicesOpen(false)}
                    className="flex items-start gap-3 px-5 py-4 hover:bg-roxo-escuro/5"
                  >
                    <setor.Icone size={20} className="text-roxo-escuro shrink-0 mt-0.5" />
                    <div>
                      <p className="font-medium text-preto">{setor.nome}</p>
                      <p className="text-sm text-preto/50">{setor.descricao}</p>
                    </div>
                  </Link>
                ))}
              </div>
            )}
          </div>

          <Link to="/portfolio" className="text-off-white/80 hover:text-off-white transition-colors">Portfólio</Link>
        </nav>

        {/* Botão Fale Conosco Desktop */}
        <Link to ="/contato" className="hidden md:inline-flex font-texto text-lg font-medium bg-verde text-off-white px-6 py-3 shadow-md hover:-translate-y-0.5 transition-all">
          Fale conosco
        </Link>

        {/* --- BOTÃO HAMBÚRGUER (CELULAR) --- */}
        <button
          className="md:hidden text-off-white p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* --- NAVEGAÇÃO MOBILE (CELULAR) --- */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-roxo-escuro border-t border-white/10 shadow-xl pb-4">
          <nav className="flex flex-col font-texto text-lg px-4 pt-2">
            <Link to="/" className="py-3 text-off-white border-b border-white/10" onClick={closeMobileMenu}>Início</Link>
            <a href="/#quem-somos" className="py-3 text-off-white border-b border-white/10" onClick={closeMobileMenu}>Quem somos</a>

            {/* Acordeão de Setores (Mobile) */}
            <div className="py-3 border-b border-white/10">
              <button
                onClick={(e) => {
                  e.preventDefault(); // Evita comportamentos estranhos do navegador
                  setIsMobileServicesOpen(!isMobileServicesOpen); // Abre e fecha perfeitamente
                }}
                className="flex items-center justify-between w-full text-off-white"
              >
                <span>Setores</span>
                <ChevronDown size={18} className={`transition-transform ${isMobileServicesOpen ? 'rotate-180' : ''}`} />
              </button>

              {isMobileServicesOpen && (
                <div className="flex flex-col gap-5 mt-5 pl-4 border-l border-verde/50 ml-2">
                  {setores.map((setor) => (
                    <Link
                      key={setor.nome}
                      to={setor.link}
                      onClick={closeMobileMenu}
                      className="flex items-center gap-3 text-off-white/80 active:text-verde"
                    >
                      <setor.Icone size={20} className="text-verde" />
                      <span>{setor.nome}</span>
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link to="/portfolio" className="py-3 text-off-white border-b border-white/10" onClick={closeMobileMenu}>Portfólio</Link>

            <a href="/#fale-conosco" onClick={closeMobileMenu} className="mt-6 text-center font-medium bg-verde text-off-white px-6 py-3">
              Fale conosco
            </a>
          </nav>
        </div>
      )}
    </header>
  )
}

export default Header
