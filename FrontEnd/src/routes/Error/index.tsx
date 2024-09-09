import { Link } from "react-router-dom";

export default function Error() {
  return (
    <div className="w-full h-[100vh] flex items-center justify-center">
      <h1 className="md:text-3xl text-lg font-poppins ">Essa página não <span className="text-cor5">existe</span> na nossa aplicação :( <br />Tente navegar pra outro lugar ou clique <Link to={"/"} className="text-cor5">aqui.</Link></h1>
    </div>
  )
}