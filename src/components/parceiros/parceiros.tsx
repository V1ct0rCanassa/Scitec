function Parceiros() {
  const parceiros = [
    { nome: 'UNIFESP' },
    { nome: 'Visiona' },
    { nome: 'Núcleo São Paulo' },
    { nome: 'Brains' },
  ]

  return (
    <section className="py-20 bg-roxo-escuro font-texto">
      <div className="max-w-6xl mx-auto px-4">
        
        <div className="flex flex-col items-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Nossos Parceiros
          </h2>
          <div className="w-16 h-1.5 bg-verde"></div> 
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {parceiros.map((parceiro) => (
            <div 
              key={parceiro.nome} 
              className="bg-white rounded-lg shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] h-32 flex items-center justify-center p-6 transition-transform hover:-translate-y-1 duration-300"
            >
              <span className="text-gray-400 font-medium text-sm">
                [ Logo {parceiro.nome} ]
              </span>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}

export default Parceiros