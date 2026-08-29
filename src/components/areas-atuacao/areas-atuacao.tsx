import { Code, Microscope, Dna, LayoutGrid } from 'lucide-react'

function AreasAtuacao() {
  const areas = [
    {
      id: 'computacao',
      titulo: 'Computação',
      icone: Code,
      descricao: 'Modernize sua empresa com os serviços oferecidos pelo nosso núcleo de computação, que atua nas áreas de análise de dados, web scraping e desenvolvimento de sistemas e web.',
      link: '/computacao',
      gradient: 'bg-gradient-to-br from-blue-50 to-blue-100',
      iconColor: 'text-blue-600',
      bgColor: 'bg-blue-600',
      hoverColor: 'hover:bg-blue-700'
    },
    {
      id: 'biomedica',
      titulo: 'Engenharia Biomédica',
      icone: Microscope,
      descricao: 'A engenharia biomédica é uma área em constante expansão com foco em pesquisa e desenvolvimento de equipamentos utilizados que possam melhorar e otimizar a área de saúde.',
      link: '/biomedica',
      gradient: 'bg-gradient-to-br from-fuchsia-50 to-fuchsia-100',
      iconColor: 'text-fuchsia-600',
      bgColor: 'bg-fuchsia-600',
      hoverColor: 'hover:bg-fuchsia-700'
    },
    {
      id: 'biotecnologia',
      titulo: 'Biotecnologia',
      icone: Dna,
      descricao: 'Pelo núcleo de biotecnologia nós oferecemos soluções de análise em bioinformática e otimização de bioprocessos, aplicando todo o conhecimento acadêmico de ponta de nossos membros.',
      link: '/biotecnologia',
      gradient: 'bg-gradient-to-br from-emerald-50 to-emerald-100',
      iconColor: 'text-emerald-600',
      bgColor: 'bg-emerald-600',
      hoverColor: 'hover:bg-emerald-700'
    }
  ]

  return (
    <section className="py-24 bg-white font-texto" id="setores">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        
        <div className="flex flex-col items-center text-center mb-16">
          <div className="flex items-center gap-2 text-roxo-escuro border border-roxo-escuro/20 bg-roxo-escuro/5 px-3 py-1.5 rounded-md w-max mb-6">
            <LayoutGrid size={16} />
            <span className="text-sm font-bold tracking-widest uppercase">Soluções</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-roxo-escuro mb-6 leading-tight">
            Áreas de Atuação
          </h2>
          
          <p className="text-gray-600 text-lg leading-relaxed max-w-2xl">
            Conheça todas as soluções que oferecemos para você e sua empresa. Clique sobre os cards para descobrir mais sobre nossos núcleos e serviços oferecidos.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {areas.map((area) => (
            <a 
              key={area.id}
              href={area.link}
              className={`group relative flex flex-col p-8 rounded-4xl ${area.gradient} hover:shadow-xl transition-all duration-300 hover:-translate-y-1.5 cursor-pointer border border-white/60 shadow-sm h-full`}
            >
              <div className="mb-6">
                <area.icone size={40} className={`${area.iconColor} transition-transform duration-300 group-hover:scale-110`} />
              </div>
              
              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                {area.titulo}
              </h3>
              
              <p className="text-gray-700 leading-relaxed text-sm grow mb-8">
                {area.descricao}
              </p>

              <div className="mt-auto">
                <span className={`${area.bgColor} ${area.hoverColor} text-white px-5 py-2.5 rounded-md text-sm font-semibold transition-colors duration-300 inline-block`}>
                  Veja mais
                </span>
              </div>
            </a>
          ))}
        </div>

      </div>
    </section>
  )
}

export default AreasAtuacao