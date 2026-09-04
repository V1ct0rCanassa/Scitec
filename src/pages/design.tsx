import { useEffect, useState } from "react";
import {
  PenTool,
  Layout,
  Users,
  Layers,
  Sparkles,
  Eye,
  MessageSquare,
  Lightbulb,
  Target,
  RefreshCcw,
  CheckCircle,
  Search, // Opcional, se o Lucide na sua versão tiver. Se der erro, troque por MonitorSmartphone
} from "lucide-react";

export function DesignEConcepcao() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(true);
    }, 50);
    return () => clearTimeout(timer);
  }, []);

  const hardSkills = [
    {
      icone: Layout,
      titulo: "UI Design",
      desc: "Criação de interfaces visuais atraentes, sistemas de design consistentes e componentes de alta fidelidade.",
    },
    {
      icone: Users,
      titulo: "UX Design",
      desc: "Pesquisa de usuário, mapeamento de jornadas e testes de usabilidade para garantir uma navegação fluida e intuitiva.",
    },
    {
      icone: Layers,
      titulo: "Prototipagem",
      desc: "Desenvolvimento de wireframes e protótipos interativos para validar ideias antes de escrever qualquer linha de código.",
    },
    {
      icone: Sparkles,
      titulo: "Identidade Visual",
      desc: "Construção de identidades fortes e guias de estilo que refletem a essência e os valores do seu negócio na tela.",
    },
  ];

  const softSkills = [
    { icone: Users, texto: "Empatia e Foco no Usuário" },
    { icone: MessageSquare, texto: "Comunicação e Recebimento de Feedback" },
    { icone: Lightbulb, texto: "Resolução Criativa de Problemas" },
    { icone: Eye, texto: "Atenção Extrema aos Detalhes" },
    { icone: Target, texto: "Visão Estratégica de Produto" },
    { icone: RefreshCcw, texto: "Adaptabilidade e Iteração" },
  ];

  return (
    <main className="font-texto bg-off-white min-h-screen pt-32 pb-24 selection:bg-verde/30">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        {/* HERO SECTION */}
        <header
          className={`grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center transition-all duration-1000 ease-out mb-32
                      ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          {/* Textos */}
          <div className="flex flex-col items-start">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-8 border border-roxo-escuro/20 bg-roxo-escuro/5">
              <PenTool size={18} className="text-verde" />
              <span className="text-roxo-escuro text-sm font-semibold uppercase tracking-wider">
                Setor Criativo
              </span>
            </div>

            <h1 className="text-5xl md:text-6xl font-bold text-roxo-escuro mb-8 leading-tight">
              Design e <span className="text-verde">Concepção</span>
            </h1>

            <p className="text-xl text-gray-700 leading-relaxed border-l-4 border-verde pl-6 mb-8 font-medium">
              Nós transformamos ideias em experiências inesquecíveis.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              Unimos estética, empatia e usabilidade. Projetamos interfaces intuitivas 
              e fluxos centrados no usuário real, garantindo que o seu produto digital 
              não seja apenas bonito, mas altamente funcional, acessível e focado em conversão.
            </p>
          </div>
          {/* Imagem com estética do projeto */}
          <div className="relative group w-full aspect-square md:aspect-4/3 mt-8 lg:mt-0 cursor-pointer">
            {/* Fundo pontilhado */}
            <div
              aria-hidden="true"
              className="absolute -inset-6 -z-10 opacity-[0.15] bg-[radial-gradient(currentColor_1px,transparent_1px)] bg-size-[16px_16px] text-roxo-escuro transition-opacity duration-700 group-hover:opacity-30"
            />

            <div className="relative h-full p-0.5">
              {/* Bordas que se expandem e se afastam no hover */}
              <span className="absolute -top-1 -left-1 w-12 h-12 border-t-2 border-l-2 border-verde transition-all duration-500 ease-out group-hover:w-20 group-hover:h-20 group-hover:-translate-x-1.5 group-hover:-translate-y-1.5" />
              <span className="absolute -top-1 -right-1 w-12 h-12 border-t-2 border-r-2 border-verde transition-all duration-500 ease-out group-hover:w-20 group-hover:h-20 group-hover:translate-x-1.5 group-hover:-translate-y-1.5" />
              <span className="absolute -bottom-1 -left-1 w-12 h-12 border-b-2 border-l-2 border-verde transition-all duration-500 ease-out group-hover:w-20 group-hover:h-20 group-hover:-translate-x-1.5 group-hover:translate-y-1.5" />
              <span className="absolute -bottom-1 -right-1 w-12 h-12 border-b-2 border-r-2 border-verde transition-all duration-500 ease-out group-hover:w-20 group-hover:h-20 group-hover:translate-x-1.5 group-hover:translate-y-1.5" />

              {/* Container da imagem levanta sem o zoom interno */}
              <div className="relative h-full w-full bg-roxo-escuro overflow-hidden shadow-2xl transition-all duration-500 ease-out group-hover:-translate-y-2 group-hover:shadow-[0_35px_60px_-15px_rgba(0,255,150,0.25)]">
                <img
                  src="/src/assets/design.avif" // Lembre-se de colocar a imagem correta na sua pasta
                  alt="Profissional desenhando wireframes e protótipos de interface na tela"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </header>

        {/* FOCO TÉCNICO */}
        <section
          className={`relative bg-roxo-escuro w-screen left-1/2 right-1/2 ml-[-50vw] mr-[-50vw] pt-20 pb-8 overflow-hidden transition-all duration-1000 delay-300 ${visible ? "opacity-100" : "opacity-0"}`}
        >
          <div
            aria-hidden="true"
            className="absolute inset-0 opacity-[0.05] bg-[radial-gradient(#fff_1px,transparent_1px)] bg-size-[24px_24px]"
          />

          <div className="relative z-10 max-w-7xl mx-auto px-4 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-verde mb-12 text-center">
              O Que Entregamos
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {hardSkills.map((skill, index) => (
                <div key={index} className="relative group w-full h-full">
                  <div className="relative flex flex-col h-full p-0.5">
                    <span className="absolute -top-1 -left-1 w-6 h-6 border-t-2 border-l-2 border-verde transition-all duration-300 group-hover:w-10 group-hover:h-10" />
                    <span className="absolute -top-1 -right-1 w-6 h-6 border-t-2 border-r-2 border-verde transition-all duration-300 group-hover:w-10 group-hover:h-10" />
                    <span className="absolute -bottom-1 -left-1 w-6 h-6 border-b-2 border-l-2 border-verde transition-all duration-300 group-hover:w-10 group-hover:h-10" />
                    <span className="absolute -bottom-1 -right-1 w-6 h-6 border-b-2 border-r-2 border-verde transition-all duration-300 group-hover:w-10 group-hover:h-10" />

                    <div className="relative z-10 flex flex-col h-full bg-off-white p-8 shadow-lg group-hover:-translate-y-2 group-hover:shadow-[0_20px_40px_-10px_rgba(0,255,150,0.15)] transition-all duration-300">
                      <skill.icone
                        className="text-verde mb-6 transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-6"
                        size={40}
                      />
                      <h3 className="font-bold text-roxo-escuro text-xl mb-3">
                        {skill.titulo}
                      </h3>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        {skill.desc}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* METODOLOGIA E CULTURA */}
        <section
          className={`relative bg-roxo-escuro w-screen left-1/2 right-1/2 ml-[-50vw] mr-[-50vw] pb-20 mb-32 overflow-hidden transition-all duration-1000 delay-500 ${visible ? "opacity-100" : "opacity-0"}`}
        >
          <div
            aria-hidden="true"
            className="absolute inset-0 opacity-[0.05] bg-[radial-gradient(#fff_1px,transparent_1px)] bg-size-[24px_24px]"
          />

          <div className="relative z-10 max-w-7xl mx-auto px-4 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 border-t border-white/10 pt-16">
              <div>
                <h2 className="text-3xl font-bold mb-6 text-verde">
                  Design Thinking
                </h2>
                <p className="text-off-white/80 leading-relaxed mb-6 text-lg">
                  Não criamos telas baseadas em "achismos". Nosso processo é 
                  fundamentado no <strong>Design Thinking</strong>, iterando rapidamente 
                  entre empatia, ideação e prototipação.
                </p>
                <ul className="space-y-4 text-off-white/90">
                  <li className="flex items-center gap-4">
                    <Search size={20} className="text-verde" /> Descoberta e 
                    pesquisa profunda do problema
                  </li>
                  <li className="flex items-center gap-4">
                    <RefreshCcw size={20} className="text-verde" /> Prototipagem 
                    rápida e validação de hipóteses
                  </li>
                  <li className="flex items-center gap-4">
                    <CheckCircle size={20} className="text-verde" /> Testes de 
                    usabilidade com usuários reais
                  </li>
                </ul>
              </div>

              <div>
                <h2 className="text-3xl font-bold mb-6 text-verde">
                  Cultura Criativa
                </h2>
                <p className="text-off-white/80 leading-relaxed mb-6 text-lg">
                  O melhor design nasce da colaboração. Fomentamos um ambiente onde o 
                  feedback é o combustível para elevar a régua técnica e visual dos 
                  nossos projetos.
                </p>
                <ul className="space-y-4 text-off-white/90">
                  <li className="flex items-center gap-4">
                    <Lightbulb size={20} className="text-verde" /> Sessões de 
                    brainstorming e co-criação
                  </li>
                  <li className="flex items-center gap-4">
                    <Eye size={20} className="text-verde" /> Design Critiques 
                    frequentes para alinhamento
                  </li>
                  <li className="flex items-center gap-4">
                    <Users size={20} className="text-verde" /> Handoff perfeito: 
                    integração total com os devs
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* SOFT SKILLS */}
        <section
          className={`transition-all duration-1000 delay-700 ${visible ? "opacity-100" : "opacity-0"}`}
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-roxo-escuro mb-4">
              O Designer do Futuro
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              Saber usar as ferramentas é apenas o básico. Nosso setor prepara 
              profissionais empáticos e estratégicos, desenvolvendo diariamente:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto">
            {softSkills.map((skill, index) => (
              <div
                key={index}
                className="flex items-center gap-4 bg-roxo-escuro/5 px-6 py-4 rounded-sm border border-roxo-escuro/10"
              >
                <skill.icone className="text-verde shrink-0" size={24} />
                <span className="font-medium text-roxo-escuro">
                  {skill.texto}
                </span>
              </div>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}

export default DesignEConcepcao;