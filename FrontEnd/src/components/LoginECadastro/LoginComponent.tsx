import InputForm from "./InputForm";

export default function LoginComponent() {
  return (
    <main className="w-full h-[100vh] py-10 bg-cor1 flex justify-center items-center">
      <form className="w-[95%] md:h-[95%] h-fit bg-corBranco rounded-2xl flex justify-around items-center md:flex-row flex-col">
        <img src="./imgs/desenhos/bem-vindo.png" alt="Desenho de Boas Vindas" className="w-fit h-96"/>
        <div className="font-poppins">
          <h1 className="text-4xl text-center md:text-start">Bem vindo de volta!</h1>
          <h2 className="text-xl text-center md:text-start mb-10">Faça <span className="text-cor2">login</span> para continuar</h2>
          <InputForm placeholder="Insira seu email"/>
          <InputForm placeholder="Insira sua senha"/>
          <div className="flex justify-around items-center my-10 gap-8 md:gap-0 md:flex-row flex-col">
            <button className="bg-cor2 text-corBranco text-2xl w-48 py-2 rounded-3xl">LOGIN</button>
            <p>Esqueceu sua senha?</p>
          </div>
        </div>
      </form>
    </main>
  )
}