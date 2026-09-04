import { useEffect, useState } from "react";
import {
  Database,
  BarChart3,
  Brain,
  Search,
  MessageSquare,
  BrainCircuit,
  Target,
  TrendingUp,
  ShieldCheck,
  CheckCircle,
  Users,
  RefreshCcw,
} from "lucide-react";

export function DadosEInteligencia() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(true);
    }, 50);
    return () => clearTimeout(timer);
  }, []);

  const hardSkills = [
    {
      icone: Database,
      titulo: "Engenharia de Dados",
      desc: "Construção de pipelines robustos (ETL/ELT) para coletar, limpar e armazenar grandes volumes de dados com segurança.",
    },
    {
      icone: BarChart3,
      titulo: "Business Intelligence",
      desc: "Criação de dashboards interativos e painéis visuais que transformam números complexos em métricas fáceis de acompanhar.",
    },
    {
      icone: Brain,
      titulo: "Machine Learning e IA",
      desc: "Desenvolvimento de modelos preditivos e algoritmos inteligentes para automatizar decisões e otimizar processos.",
    },
    {
      icone: Search,
      titulo: "Análise Exploratória",
      desc: "Investigação profunda de dados históricos para descobrir padrões ocultos e extrair insights valiosos de mercado.",
    },
  ];

  const softSkills = [
    { icone: BrainCircuit, texto: "Pensamento Crítico e Analítico" },
    { icone: MessageSquare, texto: "Data Storytelling (Comunicação)" },
    { icone: TrendingUp, texto: "Visão Estratégica de Negócios" },
    { icone: Search, texto: "Curiosidade e Investigação" },
    { icone: Target, texto: "Foco em Resolução de Problemas" },
    { icone: ShieldCheck, texto: "Ética e Governança de Dados" },
  ];

  return (
    <main className="font-texto bg-off-white min-h-screen pt-32 pb-24 selection:bg-verde/30 overflow-x-hidden">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        {/* HERO SECTION */}
        <header
          className={`grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center transition-all duration-1000 ease-out mb-32
                      ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          {/* Textos */}
          <div className="flex flex-col items-start">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-8 border border-roxo-escuro/20 bg-roxo-escuro/5">
              <Database size={18} className="text-verde" />
              <span className="text-roxo-escuro text-sm font-semibold uppercase tracking-wider">
                Setor Analítico
              </span>
            </div>

            <h1 className="text-5xl md:text-6xl font-bold text-roxo-escuro mb-8 leading-tight">
              Dados e <span className="text-verde">Inteligência</span>
            </h1>

            <p className="text-xl text-gray-700 leading-relaxed border-l-4 border-verde pl-6 mb-8 font-medium">
              Nós transformamos dados brutos em decisões estratégicas.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              Damos adeus aos "achismos". Aplicamos inteligência artificial e análise
              estatística avançada para encontrar padrões, prever cenários e 
              otimizar sua operação. Trazemos o poder do Big Data para a realidade 
              do seu negócio.
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
                  src="/src/assets/dados.avif" // Lembre-se de colocar a imagem correta na sua pasta
                  alt="Gráficos iluminados e dashboards complexos, representando análise de dados"
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
                  Decisão Orientada a Dados
                </h2>
                <p className="text-off-white/80 leading-relaxed mb-6 text-lg">
                  Não entregamos apenas relatórios frios. Nossa metodologia de análise
                  foca em gerar respostas claras e planos de ação embasados, validando 
                  hipóteses com rigor estatístico através de <strong>ciclos ágeis</strong>.
                </p>
                <ul className="space-y-4 text-off-white/90">
                  <li className="flex items-center gap-4">
                    <RefreshCcw size={20} className="text-verde" /> Entregas
                    iterativas de modelos e painéis
                  </li>
                  <li className="flex items-center gap-4">
                    <CheckCircle size={20} className="text-verde" /> Validação 
                    rigorosa de precisão e viés (Bias)
                  </li>
                  <li className="flex items-center gap-4">
                    <Target size={20} className="text-verde" /> Foco direto na 
                    dor de negócio do cliente
                  </li>
                </ul>
              </div>

              <div>
                <h2 className="text-3xl font-bold mb-6 text-verde">
                  Ciência e Inovação
                </h2>
                <p className="text-off-white/80 leading-relaxed mb-6 text-lg">
                  O campo da Inteligência Artificial avança rápido. Nosso time respira 
                  inovação tecnológica e mantém um ambiente forte de 
                  <strong> pesquisa e colaboração</strong>.
                </p>
                <ul className="space-y-4 text-off-white/90">
                  <li className="flex items-center gap-4">
                    <Brain size={20} className="text-verde" /> Grupos de estudos em 
                    IA, ML e Arquitetura de Dados
                  </li>
                  <li className="flex items-center gap-4">
                    <Users size={20} className="text-verde" /> Revisão por pares em 
                    códigos analíticos (Code Review)
                  </li>
                  <li className="flex items-center gap-4">
                    <ShieldCheck size={20} className="text-verde" /> Cultura de 
                    privacidade e governança de informações
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
              O Cientista do Futuro
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              De nada adianta o melhor algoritmo sem a habilidade de traduzi-lo para o mundo real. 
              Nosso setor forma profissionais completos, desenvolvendo diariamente:
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

export default DadosEInteligencia;