import { GraduationCap, Handshake, Target } from 'lucide-react'

function AboutUs() {
  const valores = [
    {
      nome: 'Aprendizado contínuo',
      Icone: GraduationCap,
    },
    {
      nome: 'Compromisso profissional',
      Icone: Handshake,
    },
    {
      nome: 'Impacto real',
      Icone: Target,
    },
  ]

  return (
    <section id="quem-somos" className="relative bg-off-white overflow-hidden">
      <div className="max-w-7xl mx-auto grid md:grid-cols-[0.85fr_1.15fr] items-stretch">
        {/* Coluna esquerda — imagem */}
        <div className="relative flex items-center justify-center px-4 md:px-0 md:pr-10 py-24 order-2 md:order-1">
          <div className="relative w-full max-w-2xl aspect-[3/2]">
            {/* Fundo em grade de pontos, sutil, tema "circuito" */}
            <div
              aria-hidden="true"
              className="absolute inset-0 opacity-[0.15]"
              style={{
                backgroundImage:
                  'radial-gradient(currentColor 1px, transparent 1px)',
                backgroundSize: '22px 22px',
                color: '#2E1A47',
              }}
            />
            <div className="absolute inset-4 flex items-center justify-center">
              {/* Marcas de canto, estilo mira/enquadramento */}
              <span className="absolute -top-1 -left-1 w-8 h-8 border-t-2 border-l-2 border-verde/70" />
              <span className="absolute -top-1 -right-1 w-8 h-8 border-t-2 border-r-2 border-verde/70" />
              <span className="absolute -bottom-1 -left-1 w-8 h-8 border-b-2 border-l-2 border-verde/70" />
              <span className="absolute -bottom-1 -right-1 w-8 h-8 border-b-2 border-r-2 border-verde/70" />

              <div className="group w-full h-full border border-roxo-escuro/15 hover:border-verde/60 shadow-[0_25px_50px_-20px_rgba(46,26,71,0.35)] hover:shadow-[0_35px_60px_-15px_rgba(46,26,71,0.5)] overflow-hidden transition-all duration-300 ease-out -translate-y-0 hover:-translate-y-2">
                <img
                  src="/src/assets/about.jpeg"
                  alt="descrição"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Coluna direita — copy */}
        <div className="flex flex-col justify-center px-4 md:px-0 md:pl-10 py-24 order-1 md:order-2">
          <h2 className="max-w-full font-texto font-semibold text-roxo-escuro text-4xl sm:text-5xl leading-[1.08] tracking-tight whitespace-nowrap">
            Quem é a <span className="text-verde">SciTec</span>?
          </h2>

          <p className="mt-6 font-texto text-lg text-preto/60 max-w-xl leading-relaxed">
            Somos uma empresa júnior de tecnologia fundada em 2017 dentro do
            campus da UNIFESP em São José dos Campos, um dos principais polos
            de tecnologia do país. Reunimos estudantes que tratam cada
            projeto como uma chance real de aprender fazendo, com a
            orientação de profissionais e o rigor de quem entrega pra
            empresas de verdade.
          </p>

          <ul className="mt-9 flex flex-col gap-4">
            {valores.map(({ nome, Icone }) => (
              <li key={nome} className="flex items-center gap-3">
                <span className="shrink-0 w-9 h-9 flex items-center justify-center bg-roxo-escuro/5">
                  <Icone size={18} className="text-roxo-escuro" strokeWidth={1.75} />
                </span>
                <span className="font-texto text-base text-preto/80">
                  {nome}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}

export default AboutUs
