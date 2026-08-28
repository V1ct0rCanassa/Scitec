import { useState, useRef, useEffect } from 'react'
import { ChevronDown, Cpu, Database, Lightbulb } from 'lucide-react'

function Header() {
  const [isServicesOpen, setIsServicesOpen] = useState(false)
  const [isDropdownMounted, setIsDropdownMounted] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsServicesOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  useEffect(() => {
    if (!isServicesOpen) {
      const timeout = setTimeout(() => setIsDropdownMounted(false), 200)
      return () => clearTimeout(timeout)
    }
  }, [isServicesOpen])

  function toggleServices() {
    setIsServicesOpen((prev) => {
      const next = !prev
      if (next) setIsDropdownMounted(true)
      return next
    })
  }

  const setores = [
    {
      nome: 'Tecnologia e Software',
      descricao: 'Sistemas e produtos digitais',
      Icone: Cpu,
    },
    {
      nome: 'Dados e Inteligência',
      descricao: 'Análise e IA aplicada ao negócio',
      Icone: Database,
    },
    {
      nome: 'Engenharia e Inovação',
      descricao: 'Soluções técnicas sob medida',
      Icone: Lightbulb,
    },
  ]

  return (
    <header className="relative z-50 bg-roxo-escuro ">
      <div className="max-w-6xl mx-auto px-2 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="shrink-0">
          <img
            src="/src/assets/logo/branco2.png"
            alt="Marca"
            className="h-20 w-auto"
          />
        </a>

        {/* Navegação central */}
        <nav className="hidden md:flex items-center gap-10 font-texto text-lg">
          <a
            href="#inicio"
            className="relative text-off-white/80 hover:text-off-white transition-colors duration-200 after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-full after:bg-verde after:origin-center after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300 after:ease-out"
          >
            Início
          </a>

          <a
            href="#quem-somos"
            className="relative text-off-white/80 hover:text-off-white transition-colors duration-200 after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-full after:bg-verde after:origin-center after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300 after:ease-out"
          >
            Quem somos
          </a>

          {/* Dropdown Setores */}
          <div className="relative" ref={dropdownRef}>
            <button
              onClick={toggleServices}
              className="relative flex items-center gap-1.5 text-off-white/80 hover:text-off-white transition-colors duration-200 after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-full after:bg-verde after:origin-center after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300 after:ease-out"
              aria-expanded={isServicesOpen}
            >
              Setores
              <ChevronDown
                size={18}
                className={`transition-transform duration-200 ${
                  isServicesOpen ? 'rotate-180' : ''
                }`}
              />
            </button>

            {isDropdownMounted && (
              <div
                className={`absolute top-full left-1/2 -translate-x-1/2 mt-3 w-80 bg-off-white shadow-2xl overflow-hidden py-2 origin-top transition-all duration-200 ease-out ${
                  isServicesOpen
                    ? 'opacity-100 scale-100 translate-y-0'
                    : 'opacity-0 scale-95 -translate-y-2 pointer-events-none'
                }`}
              >
                {setores.map((setor, index) => (
                  <a
                    key={setor.nome}
                    href="#"
                    style={{ transitionDelay: isServicesOpen ? `${index * 40}ms` : '0ms' }}
                    className={`flex items-start gap-3 px-5 py-4 hover:bg-roxo-escuro/5 transition-all duration-200 ease-out group ${
                      isServicesOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-1'
                    }`}
                  >
                    <setor.Icone
                      size={20}
                      className="text-roxo-escuro shrink-0 mt-0.5"
                      strokeWidth={1.75}
                    />
                    <div>
                      <p className="font-texto font-medium text-base text-preto group-hover:text-roxo-escuro transition-colors">
                        {setor.nome}
                      </p>
                      <p className="font-texto text-sm text-preto/50 mt-0.5">
                        {setor.descricao}
                      </p>
                    </div>
                  </a>
                ))}
              </div>
            )}
          </div>

          <a
            href="#portfolio"
            className="relative text-off-white/80 hover:text-off-white transition-colors duration-200 after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-full after:bg-verde after:origin-center after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300 after:ease-out"
          >
            Portfólio
          </a>
        </nav>

        {/* CTA */}
        <a
          href="#fale-conosco"
          className="font-texto text-lg font-medium bg-verde text-off-white px-6 py-3 shadow-md hover:shadow-xl hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200"
        >
          Fale conosco
        </a>
      </div>
    </header>
  )
}

export default Header
