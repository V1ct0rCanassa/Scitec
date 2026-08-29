import { Mail, MapPin, Camera, Briefcase } from 'lucide-react'

function Footer() {
  const links = [
    { nome: 'Início', href: '#inicio' },
    { nome: 'Quem somos', href: '#quem-somos' },
    { nome: 'Setores', href: '#setores' },
    { nome: 'Portfólio', href: '#portfolio' },
    { nome: 'Fale conosco', href: '#fale-conosco' },
  ]

  return (
    <footer className="bg-roxo-escuro border-t border-off-white/10 pt-8 pb-6 font-texto text-off-white/80">
      <div className="max-w-6xl mx-auto px-2 grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
        
        <div className="flex flex-col gap-3">
          <a href="#inicio" className="shrink-0 w-max">
            <img
              src="/src/assets/logo/branco2.png"
              alt="Marca"
              className="h-12 w-auto" 
            />
          </a>
          <p className="text-sm leading-relaxed max-w-sm mt-1">
            Transformando desafios de negócios em soluções digitais inteligentes através de tecnologia, dados e engenharia.
          </p>
        </div>

        <div className="flex flex-col gap-3">
          <h3 className="text-off-white font-medium text-lg">Links Rápidos</h3>
          <nav className="flex flex-col gap-2">
            {links.map((link) => (
              <a
                key={link.nome}
                href={link.href}
                className="w-max hover:text-verde transition-colors duration-200"
              >
                {link.nome}
              </a>
            ))}
          </nav>
        </div>

        <div className="flex flex-col gap-3">
          <h3 className="text-off-white font-medium text-lg">Contato</h3>
          
          <div className="flex flex-col gap-2 text-sm">
            <a 
              href="mailto:contato@suaempresa.com" 
              className="flex items-center gap-2 hover:text-verde transition-colors duration-200 w-max"
            >
              <Mail size={18} />
              contato@suaempresa.com
            </a>
            <div className="flex items-center gap-2">
              <MapPin size={18} />
              São José dos Campos, SP - Brasil
            </div>
          </div>

          <div className="flex items-center gap-4 mt-2">
            <a 
              href="COLE_O_LINK_DO_LINKEDIN_AQUI" 
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-verde transition-transform hover:-translate-y-1 duration-200" 
              aria-label="LinkedIn"
            >
              <Briefcase size={22} /> 
            </a>
            <a 
              href="https://www.instagram.com/scitecjr/" 
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-verde transition-transform hover:-translate-y-1 duration-200" 
              aria-label="Instagram"
            >
              <Camera size={22} />
            </a>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-2 mt-8 pt-4 border-t border-off-white/10 text-center text-sm flex flex-col md:flex-row justify-between items-center gap-2">
        <p>© {new Date().getFullYear()} SciTec Jr. Todos os direitos reservados.</p>
        <p>Feito com dedicação.</p>
      </div>
    </footer>
  )
}

export default Footer