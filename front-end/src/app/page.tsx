import Cabecalho from "@/components/Cabecalho/Cabecalho";
import AgendamentoHome from "@/components/Home/AgendamentoHome/AgendamentoHome";
import BannerHome from "@/components/Home/BannerHome/BannerHome";
import BannerPorto from "@/components/Home/BannerPorto/BannerPorto";
import Beneficios from "@/components/Home/Beneficios/Beneficios";
import OrcamentoHome from "@/components/Home/OrcamentoHome/OrcamentoHome";
import Rodape from "@/components/Rodape/Rodape";

export default function Home() {
  return (
    <>
      <Cabecalho/>
      <BannerHome/>
      <Beneficios/>
      <OrcamentoHome/>
      <AgendamentoHome/>
      <BannerPorto/>
      <Rodape/>
    </>
  )
}
