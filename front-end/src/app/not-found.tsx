import Cabecalho from "@/components/Cabecalho/Cabecalho";
import Rodape from "@/components/Rodape/Rodape";
import Link from "next/link";

export default function Error() {
  return (
    <>
      <Cabecalho/>
      <div className="w-full h-[100vh] flex items-center justify-center">
        <h1 className="md:text-3xl text-lg font-poppins ">Essa página não <span className="text-cor5">existe</span> na nossa aplicação :( <br />Tente navegar pra outro lugar ou clique <Link href={"/"} className="text-cor5">aqui.</Link></h1>
      </div>
      <Rodape />
    </>
  )
}