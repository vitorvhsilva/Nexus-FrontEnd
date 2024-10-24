"use client"

import { TipoDiagnostico, TipoVeiculoUsuario } from "@/app/types"
import { useEffect, useState } from "react"
import VeiculoUsuarioDiagnostico from "./VeiculoUsuarioDiagnostico"
import { useRouter } from "next/navigation"

export default function DiagnosticoComponent(){

    const navigate = useRouter()

    useEffect(() => {
        pegarVeiculosDoUsuario()
    }, [])
    
    const [veiculos, setVeiculos] = useState<TipoVeiculoUsuario[]>([])
    const [veiculoSelec, setVeiculoSelec] = useState<TipoVeiculoUsuario>({
        marca: "", 
        modelo: "", 
        ano: 0, 
        placa: "", 
        tipo: ""
    })
    const [descricao, setDescricao] = useState("")
    const [diagnostico, setDiagnostico] = useState("")

    const pegarVeiculosDoUsuario = async () => {
        const cpf = localStorage.getItem("cpf")
        console.log(cpf)

        const response = await fetch(`http://localhost:8080/veiculos/usuario/${cpf}`);
        const veiculosData = await response.json()
        if (veiculosData.length == 0) {
            alert('Nenhum veiculo cadastrado!')
            navigate.push('/user/adicionar/veiculo')
            return  
        }


        setVeiculos(veiculosData)
        console.log(veiculosData)
    }

    const handleVeiculoClick = (veiculoSelecionado: TipoVeiculoUsuario) => {
        setVeiculoSelec(veiculoSelecionado);
        console.log(veiculoSelecionado)
    };

    const submitDiagnostico = async () => {
        const placa : string = veiculoSelec.placa
        const diagnosticoInput = {
            "placaVeiculo": placa,
            "descricao": descricao
        }
        console.log(diagnosticoInput)

        try {
  
            const response = await fetch("http://localhost:8080/descricoes", {
                method:"POST",
                headers:{
                "Content-Type" : "application/json"
                },
                body: JSON.stringify(diagnosticoInput)
            });
    
            if(!response.ok) {
                const erroTexto = await response.text();
                alert(erroTexto)
                return
            }
    
            alert("Diagnostico feito!")
            const diagnostico: TipoDiagnostico = await response.json()
            setDiagnostico(diagnostico.diagnosticoVeiculo)


        } catch (error) {
            alert(error)
            console.error(error)
        }
    }

    return (
        <>
            <main className="font-poppins">
                <h2 className="text-center text-2xl my-10">Selecione o <span className="text-cor2"> veículo</span> para  o <span className="text-cor2">diagnóstico</span></h2>
                <div className="w-[95%] h-fit grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-12 mx-auto rounded-xl my-10 p-5"> 
                    {veiculos && veiculos.map((v, i) => (
                        <VeiculoUsuarioDiagnostico key={i} marca={v.marca} modelo={v.modelo} ano={v.ano} placa={v.placa} tipo={v.tipo} aoClicar={() => handleVeiculoClick(v)} selecionado={veiculoSelec.placa == v.placa}/>
                    ))}
                </div>
                {   veiculoSelec.placa != "" &&
                    <div className="flex flex-col justify-center items-center mt-4 mb-6 w-[80%] mx-auto">
                        <h1 className="text-xl">O que <span className="text-cor3">ocorreu</span> com ele?</h1>
                        <textarea className="w-full h-40 mt-6 md:h-60 lg:h-80 p-4 border-2 border-corPreto rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-corPreto placeholder-gray-500" placeholder="Insira a descrição aqui" value={descricao} onChange={(e) => setDescricao(e.target.value)}/>
                        <button className="text-xl bg-cor2 text-corBranco px-10 py-4 rounded-3xl my-5" onClick={submitDiagnostico}>Fazer diagnóstico</button>
                        {   diagnostico &&
                            <p className="text-lg my-2 text-left w-full">Análise resultou em: {diagnostico}</p>
                        }
                    </div>
                }

            </main>
        </>
    )
}