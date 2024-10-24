"use client"

import { useEffect, useState } from "react"
import VeiculoUsuarioOrcamento from "./VeiculoUsuarioOrcamento"
import { TipoDiagnostico, TipoVeiculoUsuarioOrcamento } from "@/app/types"
import { useRouter } from "next/navigation"

export default function OrcamentoComponent() {

  const navigate = useRouter()

  useEffect(() => {
    pegarVeiculosDoUsuario()
  }, [])

  const [veiculos, setVeiculos] = useState<TipoVeiculoUsuarioOrcamento[]>([])

  const pegarVeiculosDoUsuario = async () => {

    const cpf = localStorage.getItem("cpf")
    console.log(cpf)

    const response = await fetch(`http://localhost:8080/veiculos/diagnostico/${cpf}`);
    const veiculosData = await response.json()
    
    if (veiculosData.length == 0) {
      alert('Nenhum veiculo cadastrado!')
      navigate.push('/user/adicionar/veiculo')
      return  
    } 

    setVeiculos(veiculosData)
    console.log(veiculosData)
  }

  const [veiculoSelecionado, setVeiculoSelecionado] = useState<TipoVeiculoUsuarioOrcamento>({
    marca: "",
    modelo: "",
    ano: 0,
    placa: "",
    tipo: "",
    diagnosticos: [
      {diagnosticoVeiculo: "", dataDiagnostico: [], feitoDiagnostico: 0, idVeiculo: 0, idDescricaoProblema: 0}
    ]
  })

  const [diagnosticoSelecionado, setDiagnosticoSelecionado] = useState<TipoDiagnostico>({
    diagnosticoVeiculo: "", dataDiagnostico: [], feitoDiagnostico: 0, idVeiculo: 0, idDescricaoProblema: 0
  })

  const [valorOrcamento, setValorOrcamento] = useState(null)

  const handleVeiculoClick = (veiculoSelecionado: TipoVeiculoUsuarioOrcamento) => {
    setVeiculoSelecionado(veiculoSelecionado);
    console.log(veiculoSelecionado)
  };

  const handleDiagnosticoClick = (diagnosticoSelecionado: TipoDiagnostico) => {
    setDiagnosticoSelecionado(diagnosticoSelecionado);
    console.log(diagnosticoSelecionado)
  };

  const handleSubmit = async () => {

    try {
      const cpfUser = localStorage.getItem("cpf")
      if (!cpfUser) {
        alert('Problema com a validação! Faça login novamente')
        navigate.push('/login')
        return
      }     

      console.log(diagnosticoSelecionado)

      const response = await fetch("http://localhost:8080/orcamentos", {
        method:"POST",
        headers:{
          "Content-Type" : "application/json"
        },
        body: JSON.stringify(diagnosticoSelecionado)
      });

      if(!response.ok) {
        const erroTexto = await response.text();
        alert(erroTexto)
        return
      }

      const orcamento = await response.json();
      console.log(orcamento)
      setValorOrcamento(orcamento.valorOrcamento)

      // alert(`Orçamento feito! Valor: ${valorOrcamento}`)
      // navigate.push("/user")

    } catch (error) {
      alert(error)
      console.error(error)
    }
  } 


  return (
    <>
      <main className="font-poppins">
        <div className="w-[95%] h-fit grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-12 mx-auto rounded-xl my-10 p-5"> 
          {veiculos.map((v, i) => (
            <VeiculoUsuarioOrcamento key={i} marca={v.marca} modelo={v.modelo} ano={v.ano} placa={v.placa} tipo={v.tipo} diagnosticos={v.diagnosticos} selecionado={v.placa === veiculoSelecionado.placa} aoClicar={() => handleVeiculoClick(v)} aoClicarDiag={handleDiagnosticoClick} handleSubmit={handleSubmit}/>
          ))}
        </div>

        {valorOrcamento != null && 
          <>
            <p className="text-xl text-center">Orçamento para o veículo: <span className="text-cor5">{veiculoSelecionado.marca + " " + veiculoSelecionado.modelo + " (" + veiculoSelecionado.placa + ")"} </span> feito!</p>
            <p className="text-2xl text-center mb-20">Valor: {valorOrcamento}</p>
          </>
        } 
      </main>
    </>
  )
}