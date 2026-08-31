import Hero from "../components/hero/hero"
import AboutUs from "../components/about/about"
import TrustedBy from "../components/trusted/trustedby"
import AreasAtuacao from "../components/areas-atuacao/areas-atuacao"
import Projetos from "../components/projetos/projetos"
import Relatos from "../components/relatos/relatos"

function Home() {
  return (
    <main>
      <Hero />
      <AboutUs />
      <TrustedBy />
      <AreasAtuacao />
      <Projetos />
      <Relatos />
    </main>
  )
}

export default Home
