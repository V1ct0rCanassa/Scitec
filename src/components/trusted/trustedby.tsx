import { useEffect, useRef, useState } from 'react'

function TrustedBy() {
  const sectionRef = useRef<HTMLElement>(null)
  const [visible, setVisible] = useState(false)

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
      { threshold: 0.15, rootMargin: '0px 0px -80px 0px' }
    )

    observer.observe(node)
    return () => observer.disconnect()
  }, [])

  // Placeholder — troque cada "nome" por uma logo real:
  // <img src="/caminho/da/logo.png" alt={nome} className="max-h-full max-w-full w-auto h-auto object-contain brightness-0 invert opacity-50 group-hover:opacity-100 transition-all duration-300" />
  const empresas = [
    'Empresa A',
    'Empresa B',
    'Empresa C',
    'Empresa D',
    'Empresa E',
    'Empresa F',
  ]

  return (
    <section ref={sectionRef} className="relative bg-roxo-escuro py-24 overflow-hidden">
      <div className="relative max-w-6xl mx-auto px-4">
        <h2
          className={`text-center font-texto font-semibold text-3xl sm:text-4xl text-off-white/80 tracking-tight
                      transition-all duration-1000 ease-out
                      ${visible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-10 scale-95'}`}
        >
          Empresas que acreditaram no nosso trabalho
        </h2>

        <div className="mt-12 flex flex-wrap items-center justify-center gap-x-16 gap-y-10">
          {empresas.map((nome, index) => (
            <div
              key={nome}
              className={`group cursor-default flex items-center justify-center h-12 w-32
                         transition-all duration-700 ease-out
                         ${visible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-12 scale-90'}`}
              style={{ transitionDelay: visible ? `${300 + index * 120}ms` : '0ms' }}
            >
              <div className="h-full w-full border border-dashed border-off-white/20 flex items-center justify-center transition-colors duration-300 group-hover:border-verde/50">
                <span className="font-texto text-xs text-off-white/30 tracking-wide">
                  {nome}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default TrustedBy
