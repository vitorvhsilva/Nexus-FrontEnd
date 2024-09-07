import InputForm from "./InputForm";
import RadioForm from "./RadioForm";

export default function CadastroComponent() {
  return (
    <main className="w-full h-fit py-10 bg-cor1 flex justify-center items-center">
      <form className="w-[95%] h-fit bg-corBranco rounded-2xl flex justify-around items-center lg:flex-row flex-col py-10">
        <img src="./imgs/desenhos/signup.png" alt="Desenho de Boas Vindas" className="w-fit h-96"/>
        <div className="font-poppins lg:ml-0 md:ml-10 sm:ml-0">
          <h1 className="text-4xl text-center md:text-start">Bem vindo!</h1>
          <h2 className="text-xl text-center md:text-start mb-10"><span className="text-cor2">Cadastre-se</span> na plataforma</h2>
          <InputForm placeholder="Insira seu nome"/>
          <InputForm placeholder="Insira seu email"/>
          <InputForm placeholder="Insira sua senha"/>
          <InputForm placeholder="Confirme sua senha"/>
          <h3 className="text-3xl my-3">Gênero</h3>
          <div className="w-[90%] h-fit flex justify-between mb-5">
            <RadioForm label="Masculino" id="mas" value="m"/>
            <RadioForm label="Feminino" id="fem" value="f"/>
            <RadioForm label="Outros" id="out" value="o"/>
          </div>
          <InputForm placeholder="Insira seu telefone (ex: 11999999999)"/>
          <InputForm placeholder="Insira seu CPF (ex: 12345678912)"/>
          <div className="flex justify-around items-center mt-5 lg:w-[90%] w-full">
            <button className="bg-cor2 text-corBranco text-2xl w-48 py-2 rounded-3xl">CADASTRAR</button>
          </div>
        </div>
      </form>
    </main>
  )
}