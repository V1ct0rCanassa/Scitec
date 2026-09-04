import { useEffect, useRef, useState } from "react";
import { Cpu, Database, Lightbulb, PenTool, Microscope } from "lucide-react";
import { Link } from 'react-router-dom';

function AreasAtuacao() {
  const sectionRef = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = sectionRef.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(node);
        }
      },
      { threshold: 0.15 },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  const areas = [
    {
      id: "tecnologia",
      titulo: "Tecnologia e Software",
      icone: Cpu,
      descricao:
        "Sistemas e produtos digitais sob medida — do back-end ao front, unindo boas práticas de engenharia de software pra resolver o problema real do seu negócio.",
      link: "/tecnologia",
      iconColor: "text-verde",
      bgColor: "bg-verde",
      borderColor: "border-roxo-escuro/70",
      hoverBorderColor: "hover:border-roxo-escuro/60",
    },
    {
      id: "dados",
      titulo: "Dados e Inteligência",
      icone: Database,
      descricao:
        "Análise e inteligência artificial aplicada ao negócio: transformamos dados brutos em decisões, com modelos pensados pro seu contexto e sua operação.",
      link: "/dados",
      iconColor: "text-roxo-escuro",
      bgColor: "bg-roxo-escuro",
      borderColor: "border-verde/70",
      hoverBorderColor: "hover:border-verde/60",
    },
    {
      id: "engenharia",
      titulo: "Engenharia e Inovação",
      icone: Lightbulb,
      descricao:
        "Soluções técnicas sob medida pra desafios específicos, unindo rigor de engenharia e criatividade pra resolver problemas que fogem do padrão.",
      link: "/engenharia",
      iconColor: "text-verde",
      bgColor: "bg-verde",
      borderColor: "border-roxo-escuro/70",
      hoverBorderColor: "hover:border-roxo-escuro/60",
    },
    {
      id: "design",
      titulo: "Design e Concepção",
      icone: PenTool,
      descricao:
        "Criação de interfaces, experiência do usuário (UX) e prototipagem, garantindo que o produto seja intuitivo, acessível e visualmente impactante.",
      link: "/design",
      iconColor: "text-roxo-escuro",
      bgColor: "bg-roxo-escuro",
      borderColor: "border-verde/70",
      hoverBorderColor: "hover:border-verde/60",
    },
    {
      id: "ciencia",
      titulo: "Ciência e Consultoria",
      icone: Microscope,
      descricao:
        "Pesquisa avançada, estratégia e análise científica para embasar decisões complexas e guiar o futuro tecnológico do seu negócio.",
      link: "/ciencia",
      iconColor: "text-verde",
      bgColor: "bg-verde",
      borderColor: "border-roxo-escuro/70",
      hoverBorderColor: "hover:border-roxo-escuro/60",
    },
  ];

  return (
    <section
      ref={sectionRef}
      className="py-16 md:py-24 bg-off-white font-texto"
      id="setores"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div
          className={`flex flex-col items-center text-center mb-12 md:mb-16
                      transition-all duration-700 ease-out
                      ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-roxo-escuro mb-4 md:mb-6 leading-tight">
            Conheça mais nossos <span className="text-verde">setores</span>
          </h2>

          <p className="text-gray-600 text-base md:text-lg leading-relaxed max-w-2xl">
            Conheça todas as soluções que oferecemos para você e sua empresa.
            Clique sobre os cards para descobrir mais sobre nossos núcleos e
            serviços oferecidos.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-6 md:gap-8 items-stretch">
          {areas.map((area, index) => (
            <Link
              key={area.id}
              to={area.link} 
              className={`group relative flex flex-col w-full h-full
                          lg:col-span-2 ${index === 3 ? "lg:col-start-2" : ""}
                          transition-all duration-700 ease-out
                          ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
              style={{
                transitionDelay: visible ? `${200 + index * 150}ms` : "0ms",
              }}
            >
              <div
                aria-hidden="true"
                className={`absolute inset-0 -z-10 opacity-[0.15] bg-[radial-gradient(currentColor_1px,transparent_1px)] bg-size-[16px_16px] ${area.iconColor}`}
              />

              <div className="relative flex flex-col flex-1 p-0.5">
                <span className={`absolute -top-1 -left-1 w-8 h-8 border-t-2 border-l-2 ${area.borderColor}`} />
                <span className={`absolute -top-1 -right-1 w-8 h-8 border-t-2 border-r-2 ${area.borderColor}`} />
                <span className={`absolute -bottom-1 -left-1 w-8 h-8 border-b-2 border-l-2 ${area.borderColor}`} />
                <span className={`absolute -bottom-1 -right-1 w-8 h-8 border-b-2 border-r-2 ${area.borderColor}`} />

                <div
                  className={`relative z-10 flex flex-col flex-1 bg-off-white border border-roxo-escuro/15 ${area.hoverBorderColor}
                              shadow-[0_25px_50px_-20px_rgba(46,26,71,0.35)] hover:shadow-[0_35px_60px_-15px_rgba(46,26,71,0.5)]
                              overflow-hidden transition-all duration-500 ease-out hover:-translate-y-2 p-5 md:p-6 `}
                  style={{
                    transitionTimingFunction: "cubic-bezier(0.22, 1, 0.36, 1)",
                  }}
                >
                  <div className="mb-3 md:mb-4">
                    <area.icone
                      size={32}
                      className={`${area.iconColor} md:w-9 md:h-9 transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-6`}
                    />
                  </div>

                  <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-2">
                    {area.titulo}
                  </h3>

                  <p
                    className="text-gray-700 leading-relaxed text-sm grow mb-4"
                    style={{
                      display: "-webkit-box",
                      WebkitLineClamp: 3,
                      WebkitBoxOrient: "vertical",
                      overflow: "hidden",
                    }}
                  >
                    {area.descricao}
                  </p>

                  <div className="mt-auto">
                    {/* CORREÇÃO: Removido o 'rounded-md' para deixar quadrado */}
                    <span
                      className={`${area.bgColor} text-white px-4 py-2 text-xs md:text-sm font-semibold transition-transform duration-300 inline-block group-hover:scale-105`}
                    >
                      Veja mais
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

export default AreasAtuacao;