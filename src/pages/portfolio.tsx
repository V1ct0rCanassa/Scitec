import { useEffect, useRef, useState } from "react";

function Portfolio() {
  const sectionRef = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);
  const [filtroAtivo, setFiltroAtivo] = useState("Todos");

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

  const categorias = [
    "Todos",
    "Tecnologia e Software",
    "Dados e Inteligência",
    "Engenharia e Inovação",
    "Design e Concepção",
    "Ciência e Consultoria"
  ];

  const projetos = [
    {
      id: "plataforma-dados",
      titulo: "Dashboard Analytics",
      categoria: "Dados e Inteligência",
      descricao:
        "Plataforma completa para visualização de dados em tempo real, integrando múltiplos bancos de dados para facilitar a tomada de decisão da diretoria.",
      imagem: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop",
      tags: ["React", "Node.js", "PostgreSQL"],
      accentColor: "text-verde",
      borderColor: "border-roxo-escuro/70",
      hoverBorderColor: "hover:border-roxo-escuro/60",
    },
    {
      id: "app-logistica",
      titulo: "App de Rastreamento",
      categoria: "Tecnologia e Software",
      descricao:
        "Aplicativo móvel focado em logística e supply chain, reduzindo o tempo de entrega e melhorando a comunicação entre motoristas e central.",
      imagem: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=800&auto=format&fit=crop",
      tags: ["React Native", "Firebase", "GCP"],
      accentColor: "text-roxo-escuro",
      borderColor: "border-verde/70",
      hoverBorderColor: "hover:border-verde/60",
    },
    {
      id: "ecommerce-ux",
      titulo: "Redesign E-commerce",
      categoria: "Design e Concepção",
      descricao:
        "Reformulação completa da experiência do usuário e interface de um grande e-commerce, resultando em um aumento de 40% na taxa de conversão.",
      imagem: "https://images.unsplash.com/photo-1658297063569-162817482fb6?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      tags: ["Figma", "UI/UX", "Design System"],
      accentColor: "text-verde",
      borderColor: "border-roxo-escuro/70",
      hoverBorderColor: "hover:border-roxo-escuro/60",
    },
    {
      id: "automacao-iot",
      titulo: "Sistema de Automação IoT",
      categoria: "Engenharia e Inovação",
      descricao:
        "Hardware e software integrados para monitoramento de maquinário industrial, prevendo falhas mecânicas através de sensores inteligentes.",
      imagem: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=800&auto=format&fit=crop",
      tags: ["C++", "Python", "IoT"],
      accentColor: "text-roxo-escuro",
      borderColor: "border-verde/70",
      hoverBorderColor: "hover:border-verde/60",
    },
    {
      id: "modelo-preditivo",
      titulo: "Modelo Preditivo de Vendas",
      categoria: "Ciência e Consultoria",
      descricao:
        "Consultoria e desenvolvimento de um modelo estatístico que projeta o volume de vendas trimestral com 94% de precisão para o varejo.",
      imagem: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=800&auto=format&fit=crop",
      tags: ["Python", "Scikit-Learn", "AWS"],
      accentColor: "text-verde",
      borderColor: "border-roxo-escuro/70",
      hoverBorderColor: "hover:border-roxo-escuro/60",
    },
    {
      id: "erp-customizado",
      titulo: "ERP Customizado",
      categoria: "Tecnologia e Software",
      descricao:
        "Sistema de gestão empresarial desenvolvido sob medida, unificando RH, financeiro e estoque em uma única plataforma escalável.",
      imagem: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800&auto=format&fit=crop",
      tags: ["Next.js", "NestJS", "AWS"],
      accentColor: "text-roxo-escuro",
      borderColor: "border-verde/70",
      hoverBorderColor: "hover:border-verde/60",
    },
  ];

  const projetosFiltrados = projetos.filter(
    (projeto) => filtroAtivo === "Todos" || projeto.categoria === filtroAtivo
  );

  return (
    <section
      ref={sectionRef}
      className="py-24 bg-off-white font-texto"
      id="portfolio"
    >
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        <div
          className={`flex flex-col items-center text-center mb-12
                      transition-all duration-700 ease-out
                      ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-roxo-escuro mb-6 leading-tight">
            Projetos em <span className="text-verde">destaque</span>
          </h2>

          <p className="text-gray-600 text-lg leading-relaxed max-w-2xl">
            Conheça alguns dos desafios que resolvemos recentemente. Soluções
            construídas sob medida que geraram impacto real para nossos clientes.
          </p>
        </div>

        {/* Filtros */}
        <div
          className={`flex flex-wrap justify-center gap-3 mb-12 transition-all duration-700 delay-300 ease-out
                     ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
        >
          {categorias.map((categoria) => (
            <button
              key={categoria}
              onClick={() => setFiltroAtivo(categoria)}
              className={`px-5 py-2 rounded-full text-sm font-semibold transition-all duration-300 border
                ${
                  filtroAtivo === categoria
                    ? "bg-roxo-escuro text-white border-roxo-escuro shadow-md"
                    : "bg-transparent text-roxo-escuro border-roxo-escuro/30 hover:border-roxo-escuro hover:bg-roxo-escuro/5"
                }`}
            >
              {categoria}
            </button>
          ))}
        </div>

        {/* Grid de Projetos */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
          {projetosFiltrados.map((projeto, index) => (
            <div
              key={projeto.id}
              className="group relative flex flex-col w-full animate-in fade-in zoom-in duration-500 ease-out"
              style={{
                animationFillMode: "both",
                animationDelay: `${index * 100}ms`,
              }}
            >
              <div
                aria-hidden="true"
                className={`absolute inset-0 -z-10 opacity-[0.15] bg-[radial-gradient(currentColor_1px,transparent_1px)] bg-size-[16px_16px] ${projeto.accentColor}`}
              />

              <div className="relative flex flex-col flex-1 p-0.5 h-full">
                <span className={`absolute -top-1 -left-1 w-8 h-8 border-t-2 border-l-2 ${projeto.borderColor}`} />
                <span className={`absolute -top-1 -right-1 w-8 h-8 border-t-2 border-r-2 ${projeto.borderColor}`} />
                <span className={`absolute -bottom-1 -left-1 w-8 h-8 border-b-2 border-l-2 ${projeto.borderColor}`} />
                <span className={`absolute -bottom-1 -right-1 w-8 h-8 border-b-2 border-r-2 ${projeto.borderColor}`} />

                <div
                  className={`relative z-10 flex flex-col flex-1 bg-off-white border border-roxo-escuro/15 ${projeto.hoverBorderColor}
                              shadow-[0_25px_50px_-20px_rgba(46,26,71,0.35)] hover:shadow-[0_35px_60px_-15px_rgba(46,26,71,0.5)]
                              overflow-hidden transition-all duration-500 ease-out hover:-translate-y-2`}
                >
                  <div className="relative w-full h-56 overflow-hidden border-b border-roxo-escuro/15">
                    <img
                      src={projeto.imagem}
                      alt={`Capa do projeto ${projeto.titulo}`}
                      className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                    />
                    <div className="absolute top-4 left-4 bg-off-white/90 backdrop-blur-sm px-3 py-1.5 rounded text-xs font-semibold text-roxo-escuro shadow-sm">
                      {projeto.categoria}
                    </div>
                  </div>

                  <div className="flex flex-col flex-1 p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-verde transition-colors duration-300">
                      {projeto.titulo}
                    </h3>

                    <p
                      className="text-gray-700 leading-relaxed text-sm mb-6 flex-1"
                      style={{
                        display: "-webkit-box",
                        WebkitLineClamp: 3,
                        WebkitBoxOrient: "vertical",
                        overflow: "hidden",
                      }}
                    >
                      {projeto.descricao}
                    </p>

                    <div className="flex flex-wrap gap-2 mt-auto">
                      {projeto.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-xs font-medium px-2.5 py-1 bg-gray-100 text-gray-600 rounded-md border border-gray-200"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Fallback caso nenhum projeto seja encontrado no filtro */}
        {projetosFiltrados.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">
              Nenhum projeto encontrado para esta categoria.
            </p>
          </div>
        )}

      </div>
    </section>
  );
}

export default Portfolio;
