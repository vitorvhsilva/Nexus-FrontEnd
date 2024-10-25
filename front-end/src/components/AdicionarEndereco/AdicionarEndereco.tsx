"use client"

import { useState } from "react"
import InputTextAdicionarEndereco from "./InputTextAdicionarEndereco"
import { TipoEnderecoUsuarioCadastro } from "@/app/types"
import { useRouter } from "next/navigation"
import BotaoVoltar from "../BotaoVoltar/BotaoVoltar"

export default function AdicionarEnderecoComponent(){

    const [endereco, setEndereco] = useState<TipoEnderecoUsuarioCadastro>({
      cpfUsuario: "",
      cepEnderecoUsuario:"",
      bairroEnderecoUsuario:"",
      ruaEnderecoUsuario:"",
      numEnderecoUsuario:""    
    })

    const navigate = useRouter()

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        try {
            const cpfUser = localStorage.getItem("cpf")
            if (!cpfUser) {
                alert('Problema com a validação! Faça login novamente')
                navigate.push('/login')
                return
            }     
            setEndereco({...endereco, cpfUsuario: cpfUser})

            console.log(endereco)
  
            const response = await fetch("http://localhost:8080/enderecos/usuarios", {
              method:"POST",
              headers:{
                "Content-Type" : "application/json"
              },
              body: JSON.stringify(endereco)
            });
  
            if(!response.ok) {
              const erroTexto = await response.text();
              alert(erroTexto)
              return
            }
  
            alert("Endereco cadastrado")
            navigate.push("/user")
  
          } catch (error) {
            alert(error)
            console.error(error)
          }
    }

    return(
        <section className="font-poppins h-full">
            <BotaoVoltar/>
            <h1 className="text-3xl text-center my-5">Insira os <span className="text-cor5">dados</span> do seu <span className="text-cor5">endereço</span></h1>
            <form action="" className="w-full h-fit md:px-40 px-5 mt-20" onSubmit={handleSubmit}>
                <InputTextAdicionarEndereco endereco={endereco} setEndereco={setEndereco} label="CEP" placeholder="Insira o CEP do seu endereço (00000000)" id="cepEnderecoUsuario"/>
                <InputTextAdicionarEndereco endereco={endereco} setEndereco={setEndereco} label="Bairro" placeholder="Insira o bairro do seu endereço" id="bairroEnderecoUsuario"/>
                <InputTextAdicionarEndereco endereco={endereco} setEndereco={setEndereco} label="Rua" placeholder="Insira a rua do seu endereço" id="ruaEnderecoUsuario"/>
                <InputTextAdicionarEndereco endereco={endereco} setEndereco={setEndereco} label="Número" placeholder="Insira o número do seu endereço" id="numEnderecoUsuario"/>
                <input type="submit" value="Cadastrar endereço" className="text-3xl bg-cor5 py-3 px-10 text-corBranco rounded-lg mx-auto block my-10 cursor-pointer"/>
            </form>
        </section>
    )
}