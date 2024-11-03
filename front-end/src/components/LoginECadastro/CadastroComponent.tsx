"use client"

import Link from "next/link";
import InputForm from "./InputForm";
import RadioForm from "./RadioForm";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { TipoUsuario } from "@/app/types";

export default function CadastroComponent() {
  
  const navigate = useRouter();

  const [usuario, setUsuario] = useState<TipoUsuario>({
    nome: "",
    email: "",
    senha: "",
    genero: "",
    telefone: "",
    cpf: ""
  })

  const handleSubmit = async (e:React.FormEvent<HTMLFormElement>)=>{
    e.preventDefault();
    console.log(usuario)

    try {
      const response = await fetch("http://localhost:8080/usuarios/cadastro", {
        method:"POST",
        headers:{
          "Content-Type" : "application/json"
        },
        body: JSON.stringify(usuario)
      });

      if(response.ok){
        alert("Cadastro feito com sucesso!")
        setUsuario({
          nome: "",
          email: "",
          senha: "",
          genero: "",
          telefone: "",
          cpf: ""
        });
        localStorage.setItem("cpf", usuario.cpf)
        navigate.push("/user");
        return
      }

      const erroTexto = await response.text();
      alert(erroTexto)

    } catch (error) {
      alert(error)
      console.error("Falha ao cadastrar usuario!", error);
    }
  }

  return (
    <main className="w-full h-fit py-10 bg-cor1 flex justify-center items-center flex-col">
      <div className="w-[95%] h-[30%] bg-corBranco rounded-t-2xl flex justify-between px-5 items-center">
        <Link href={"/"}>
          <Image src="/imgs/logos/nexusblack.png" alt="Logo da Nexus" className="w-24" width={500} height={500}/>
        </Link> 
        <Link href={"/login"}>
          <p className="text-sm sm:text-md md:text-lg font-poppins">Já tem uma conta? <span className="text-cor2">Faça login</span></p>
        </Link>
      </div>
      <form className="w-[95%] h-fit bg-corBranco rounded-b-2xl flex justify-around items-center lg:flex-row flex-col py-10" onSubmit={handleSubmit}>
        <Image src="/imgs/desenhos/signup.png" alt="Desenho de Boas Vindas" className="w-fit h-96" width={500} height={500}/>
        <div className="font-poppins lg:ml-0 md:ml-10 sm:ml-0">
          <h1 className="text-4xl text-center md:text-start">Bem vindo!</h1>
          <h2 className="text-xl text-center md:text-start mb-10"><span className="text-cor2">Cadastre-se</span> na plataforma</h2>
          <InputForm placeholder="Insira seu nome" id="nome" usuario={usuario} setUsuario={setUsuario}/>
          <InputForm placeholder="Insira seu email" id="email" usuario={usuario} setUsuario={setUsuario}/>
          <InputForm placeholder="Insira sua senha" id="senha" usuario={usuario} setUsuario={setUsuario}/>
          <h3 className="text-3xl my-3">Gênero</h3>
          <div className="w-[90%] h-fit flex justify-between mb-5">
            <RadioForm label="Masculino" id="mas" value="M" usuario={usuario} setUsuario={setUsuario} />
            <RadioForm label="Feminino" id="fem" value="F" usuario={usuario} setUsuario={setUsuario} />
            <RadioForm label="Outros" id="out" value="O" usuario={usuario} setUsuario={setUsuario} />
          </div>
          <InputForm placeholder="Insira seu telefone (ex: 11999999999)" id="telefone" usuario={usuario} setUsuario={setUsuario}/>
          <InputForm placeholder="Insira seu CPF (ex: 12345678912)" id="cpf" usuario={usuario} setUsuario={setUsuario}/>
          <div className="flex justify-around items-center mt-5 lg:w-[90%] w-full">
            <button className="bg-cor2 text-corBranco text-2xl w-48 py-2 rounded-3xl">CADASTRAR</button>
          </div>
        </div>
      </form>
    </main>
  )
}