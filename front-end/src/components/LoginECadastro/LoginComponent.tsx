"use client"

import { TipoLogin } from "@/app/types";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import InputFormLogin from "./InputFormLogin";

export default function LoginComponent() {

  const navigate = useRouter();

  const [login, setLogin] = useState<TipoLogin>({
    email: "",
    senha: "",
  })

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(login)

    try {
      const response = await fetch("http://localhost:8080/usuarios/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(login)
      });

      if (response.ok) {
        alert("Login feito com sucesso!")
        setLogin({
          email: "",
          senha: ""
        });
        const dados = await response.json()
        localStorage.setItem("cpf", dados.cpf)
        navigate.push("/user");
      }
    } catch (error) {
      alert(error)
      console.error("Falha ao fazer login!", error);
    }
  }

  return (
    <main className="w-full h-fit md:h-[100vh] py-10 bg-cor1 flex justify-center items-center flex-col">
      <div className="w-[95%] h-40 md:h-[30%] bg-corBranco rounded-t-2xl flex justify-between px-5 items-center">
        <Link href={"/"}>
          <Image src="/imgs/logos/nexusblack.png" alt="Logo da Nexus" className="w-24" width={500} height={500} />
        </Link>
        <Link href={"/cadastro"}>
          <p className="text-sm sm:text-md md:text-lg font-poppins">Novo Usuário? <span className="text-cor2">Cadastre-se</span></p>
        </Link>
      </div>
      <form className="w-[95%] md:h-[95%] h-fit bg-corBranco rounded-b-2xl flex justify-around items-center md:flex-row flex-col" onSubmit={handleSubmit}>
        <Image src="/imgs/desenhos/bem-vindo.png" alt="Desenho de Boas Vindas" className="w-fit h-96" width={500} height={500} />
        <div className="font-poppins">
          <h1 className="text-4xl text-center md:text-start">Bem vindo de volta!</h1>
          <h2 className="text-xl text-center md:text-start mb-10">Faça <span className="text-cor2">login</span> para continuar</h2>
          <InputFormLogin placeholder="Insira seu email" id="email" login={login} setLogin={setLogin} />
          <InputFormLogin placeholder="Insira sua senha" id="senha" login={login} setLogin={setLogin} />
          <div className="flex justify-around items-center my-10 gap-8 md:gap-0 md:flex-row flex-col">
            <button className="bg-cor2 text-corBranco text-2xl w-48 py-2 rounded-3xl">LOGIN</button>
            <p>Esqueceu sua senha?</p>
          </div>
        </div>
      </form>
    </main>
  )
}