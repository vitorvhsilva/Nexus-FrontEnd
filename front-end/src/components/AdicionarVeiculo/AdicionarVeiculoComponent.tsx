"use client"

import { useState } from "react";
import InputTextAdicionarVeiculo from "./InputTextAdicionarVeiculo";
import { TipoVeiculoUsuarioCadastro } from "@/app/types";
import { useRouter } from "next/navigation";
import BotaoVoltar from "../BotaoVoltar/BotaoVoltar";

export default function AdicionarVeiculoComponent(){

    const [veiculo, setVeiculo] = useState<TipoVeiculoUsuarioCadastro>({
        marca: "", 
        modelo: "", 
        ano: 0, 
        placa: 0, 
        tipo: "",
        idUsuario: 0
    })

    const navigate = useRouter()

    async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault()
    
        const cpf = localStorage.getItem("cpf")

        if (!cpf) {
            alert("Problema com a validação! Faça login novamente")
            navigate.push("/login")
        }

        const response = await fetch(`http://localhost:8080/usuarios/${cpf}`);
        const idUsuario = await response.json()
        setVeiculo({...veiculo, idUsuario: idUsuario})

        try {
          console.log(veiculo)

          const response = await fetch("http://localhost:8080/veiculos", {
            method:"POST",
            headers:{
              "Content-Type" : "application/json"
            },
            body: JSON.stringify(veiculo)
          });

          if(!response.ok) {
            const erroTexto = await response.text();
            alert(erroTexto)
            return
          }

          alert("Veiculo cadastrado")
          navigate.push("/user")

        } catch (error) {
            alert(error)
            console.error(error)
        }

    }
    return(
        <section className="font-poppins">
            <BotaoVoltar/>
            <h1 className="text-3xl text-center my-5">Insira os <span className="text-cor5">dados</span> do seu <span className="text-cor5">veículo</span></h1>
            <form action="" className="w-full h-fit md:px-40 px-5 mt-20" onSubmit={handleSubmit}>
                <InputTextAdicionarVeiculo label="Marca" placeholder="Insira a marca do seu veículo" id="marca" veiculo={veiculo} setVeiculo={setVeiculo}/>
                <InputTextAdicionarVeiculo label="Modelo" placeholder="Insira o modelo do seu veículo" id="modelo" veiculo={veiculo} setVeiculo={setVeiculo}/>
                <label className="block text-2xl mb-5">Tipo do veículo</label>
                <div className="w-full h-fit flex justify-between items-start md:flex-row flex-col md:items-center">
                    <div className="w-fit h-fit flex justify-center items-center gap-4">
                        <input className="w-8 h-8" type="radio" id="html" name="tipo" value="C" onChange={() => setVeiculo({ ...veiculo, tipo: "C" })}/>
                        <label htmlFor="html" className="text-2xl">Carro</label>
                    </div>
                    <div className="w-fit h-fit flex justify-center items-center gap-4">
                        <input className="w-8 h-8" type="radio" id="html" name="tipo" value="M" onChange={() => setVeiculo({ ...veiculo, tipo: "M" })}/>
                        <label htmlFor="html" className="text-2xl">Moto</label>
                    </div>
                    <div className="w-fit h-fit flex justify-center items-center gap-4">
                        <input className="w-8 h-8" type="radio" id="html" name="tipo" value="T" onChange={() => setVeiculo({ ...veiculo, tipo: "T" })}/>
                        <label htmlFor="html" className="text-2xl">Caminhão</label>
                    </div>
                </div>
                <div className="w-full h-fit flex flex-col gap-2 my-10">
                    <label htmlFor="ano" className="text-2xl">Ano</label>
                    <input type="number" id="ano" name="ano" placeholder="0" className="border-2 border-corPreto rounded-lg text-2xl w-28 p-2" onChange={(e) => setVeiculo({ ...veiculo, ano: Number(e.target.value) })}/>
                </div>
                <InputTextAdicionarVeiculo label="Placa" placeholder="Insira a placa do seu veículo (AAAAAAA)" id="placa" veiculo={veiculo} setVeiculo={setVeiculo}/>
                <input type="submit" value="Cadastrar veículo" className="text-3xl bg-cor5 py-3 px-10 text-corBranco rounded-lg mx-auto block my-10 cursor-pointer"/>
            </form>
        </section>
    )
}