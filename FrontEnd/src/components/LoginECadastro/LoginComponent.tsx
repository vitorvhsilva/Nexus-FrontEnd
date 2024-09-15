import { Link } from "react-router-dom";
import InputForm from "./InputForm";

export default function LoginComponent() {
  return (
    <main className="w-full h-fit md:h-[100vh] py-10 bg-cor1 flex justify-center items-center flex-col">
      <div className="w-[95%] h-40 md:h-[30%] bg-corBranco rounded-t-2xl flex justify-between px-5 items-center">
        <Link to={"/"}>
          <img src="./imgs/logos/nexusblack.png" alt="Logo da Nexus" className="w-24"/>
        </Link> 
        <Link to={"/cadastro"}>
          <p className="text-md md:text-lg font-poppins">Novo Usuário? <span className="text-cor2">Cadastre-se</span></p>
        </Link>
      </div>
      <form className="w-[95%] md:h-[95%] h-fit bg-corBranco rounded-b-2xl flex justify-around items-center md:flex-row flex-col">
        <img src="./imgs/desenhos/bem-vindo.png" alt="Desenho de Boas Vindas" className="w-fit h-96"/>
        <div className="font-poppins">
          <h1 className="text-4xl text-center md:text-start">Bem vindo de volta!</h1>
          <h2 className="text-xl text-center md:text-start mb-10">Faça <span className="text-cor2">login</span> para continuar</h2>
          <InputForm placeholder="Insira seu email"/>
          <InputForm placeholder="Insira sua senha"/>
          <div className="flex justify-around items-center my-10 gap-8 md:gap-0 md:flex-row flex-col">
            <Link to="/user" className="navbar-link">
              <button className="bg-cor2 text-corBranco text-2xl w-48 py-2 rounded-3xl">LOGIN</button>
            </Link>
            <p>Esqueceu sua senha?</p>
          </div>
        </div>
      </form>
    </main>
  )
}