"use client"

import { useEffect, useState } from "react";
import Cabecalho from "../Cabecalho/Cabecalho";
import Rodape from "../Rodape/Rodape";
import EnderecoUsuario from "./EnderecoUsuario";
import { TipoEnderecoUsuarioAgendamento } from "@/app/types";
import Mecanica from "./Mecanica";
import { useRouter } from "next/navigation";

export default function AgendamentoComponent(){

    const navigate = useRouter()

    useEffect(() => {
        pegarEnderecosDoUsuario()
    }, [])

    const [enderecoSelecionado, setEnderecoSelecionado] = useState<TipoEnderecoUsuarioAgendamento>({
        cepEnderecoUsuario:"",
        bairroEnderecoUsuario:"",
        ruaEnderecoUsuario:"",
        numEnderecoUsuario:""
    })

    const [enderecos, setEnderecos] = useState<TipoEnderecoUsuarioAgendamento[]>([])
    
    const pegarEnderecosDoUsuario = async () => {
    
        const cpf = localStorage.getItem("cpf")
        console.log(cpf)
    
        const response = await fetch(`http://localhost:8080/enderecos/usuarios/${cpf}`);
        const enderecosData = await response.json()
    
        if (enderecosData.length == 0) {
            alert('Nenhum endereço cadastrado!')
            navigate.push('/user/adicionar/endereco')
            return  
        }
    
        setEnderecos(enderecosData)
        console.log(enderecosData)
    }

    const [mecanicas, setMecanicas] = useState<{nomeMecanica: string}[]>([])
    const [mecanicaSelecionada, setMecanicaSelecionada] = useState<{nomeMecanica: string}>({
        nomeMecanica: ""
    })

    const pegarMecanicasDoBairro = async (bairroEnderecoUsuario: string) => {
        try {
          const cpfUser = localStorage.getItem("cpf")
          if (!cpfUser) {
            alert('Problema com a validação! Faça login novamente')
            navigate.push('/login')
            return
          }     
    
          const response = await fetch("http://localhost:8080/mecanicas/bairro", {
            method:"POST",
            headers:{
              "Content-Type" : "application/json"
            },
            body: JSON.stringify({bairro: bairroEnderecoUsuario})
          });
    
          if(!response.ok) {
            const erroTexto = await response.text();
            alert(erroTexto)
            return
          }
    
          const mecanicas = await response.json();
          console.log(mecanicas)
          setMecanicas(mecanicas)
    
        } catch (error) {
          alert(error)
          console.error(error)
        }
    } 

    
    const handleEnderecoClick = (enderecoSelecionado: TipoEnderecoUsuarioAgendamento) => {
        setEnderecoSelecionado(enderecoSelecionado);
        console.log(enderecoSelecionado)
        pegarMecanicasDoBairro(enderecoSelecionado.bairroEnderecoUsuario)
    };

    const handleMecanicaClick = (mecanicaSelecionada: {nomeMecanica: string}) => {
        setMecanicaSelecionada(mecanicaSelecionada);
        console.log(mecanicaSelecionada)
    };

    // const handleSubmit = async () => {
    //     try {
    //       const cpfUser = localStorage.getItem("cpf")
    //       if (!cpfUser) {
    //         alert('Problema com a validação! Faça login novamente')
    //         navigate.push('/login')
    //         return
    //       }     
    
    //       console.log(diagnosticoSelecionado)
    
    //       const response = await fetch("http://localhost:8080/orcamentos", {
    //         method:"POST",
    //         headers:{
    //           "Content-Type" : "application/json"
    //         },
    //         body: JSON.stringify(diagnosticoSelecionado)
    //       });
    
    //       if(!response.ok) {
    //         const erroTexto = await response.text();
    //         alert(erroTexto)
    //         return
    //       }
    
    //       const orcamento = await response.json();
    //       console.log(orcamento)
    //       setValorOrcamento(orcamento.valorOrcamento)
    
    //     } catch (error) {
    //       alert(error)
    //       console.error(error)
    //     }
    // } 

    return(
        <>
            <Cabecalho/>
            <section className="font-poppins h-fit flex mt-10 items-center flex-col">
                <h1 className="text-2xl text-center">Selecione as informações para <span className="text-cor5">agendamento</span></h1>
                <h2 className="text-xl text-center mt-10 mb-5">Selecione seu <span className="text-cor5">endereço</span></h2>
                <div className="w-[90%] lg:w-[70%] h-fit grid md:grid-cols-2 grid-cols-1 gap-12 mx-auto border-corPreto border-2 rounded-xl mb-10 p-5"> 
                    {enderecos.map((e, i) => (
                        <EnderecoUsuario key={i} bairro={e.bairroEnderecoUsuario} cep={e.cepEnderecoUsuario} num={e.numEnderecoUsuario} rua={e.ruaEnderecoUsuario} aoClicar={() => handleEnderecoClick(e)} selecionado={enderecoSelecionado.cepEnderecoUsuario === e.cepEnderecoUsuario}/>
                    ))}
                </div>
                {enderecoSelecionado.cepEnderecoUsuario != "" && 
                    <>
                        <h2 className="text-xl text-center my-5">Selecione uma <span className="text-cor5">mecânica</span> do seu bairro</h2>
                        <div className="w-[90%] lg:w-[70%] h-fit grid md:grid-cols-4 grid-cols-2 gap-12 mx-auto border-corPreto border-2 rounded-xl mb-10 p-5"> 
                            {mecanicas.map((m, i) => (
                                <Mecanica key={i} nomeMecanica={m.nomeMecanica} aoClicar={() => handleMecanicaClick(m)} selecionado={mecanicaSelecionada.nomeMecanica === m.nomeMecanica}/>
                            ))}
                        </div>
                    </>
                }
            </section>
            <Rodape/>
        </>
    )
}

