import { Link } from "react-router-dom";
import Rodape from "../../components/Rodape/Rodape";
import Cabecalho from "../../components/Cabecalho/Cabecalho";

export default function Error() {
  return (
    <>
      <Cabecalho/>
      <div className="w-full h-[100vh] flex items-center justify-center">
        <h1 className="md:text-3xl text-lg font-poppins ">Essa página não <span className="text-cor5">existe</span> na nossa aplicação :( <br />Tente navegar pra outro lugar ou clique <Link to={"/"} className="text-cor5">aqui.</Link></h1>
      </div>
      <Rodape />
    </>
  )
}