import AgendamentoHome from "../../components/Home/AgendamentoHome/AgendamentoHome";
import BannerHome from "../../components/Home/BannerHome/BannerHome";
import BannerPorto from "../../components/Home/BannerPorto/BannerPorto";
import Beneficios from "../../components/Home/Beneficios/Beneficios";
import OrcamentoHome from "../../components/Home/OrcamentoHome/OrcamentoHome";

export default function Home() {
  return (
    <>
      <BannerHome/>
      <Beneficios/>
      <OrcamentoHome/>
      <AgendamentoHome/>
      <BannerPorto/>
    </>
  )
}