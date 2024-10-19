"use client"

import { useState } from "react"
import VeiculoUsuarioOrcamento from "./VeiculoUsuarioOrcamento"

export default function OrcamentoComponent() {

  const veiculosUsuarios = [
    {id: 1, marca: "Toyota", modelo: "Corolla", ano: 2018, placa: "XYZ-5421", tipo: "C", diagnosticos: [
      {diagnostico: "Diagnóstico 19/08/2024 18:23", feito: false},
      {diagnostico: "Diagnóstico 18/03/2024 09:16", feito: true},
    ]},
    {id: 2, marca: "Honda", modelo: "CB 500", ano: 2020, placa: "ABC-3926", tipo: "M", diagnosticos: []},
    {id: 3, marca: "Volvo", modelo: "FH 540", ano: 2015, placa: "JKL-3212", tipo: "T", diagnosticos: []},
  ]

  const [veiculoSelecionado, setVeiculoSelecionado] = useState(null)

  return (
    <>
    <main className="font-poppins">
        <div className="w-[95%] h-fit grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-12 mx-auto rounded-xl my-10 p-5"> 
          {veiculosUsuarios.map((v) => (
            <VeiculoUsuarioOrcamento key={v.id} marca={v.marca} modelo={v.modelo} ano={v.ano} placa={v.placa} tipo={v.tipo} diagnosticos={v.diagnosticos} selecionado={v.id === veiculoSelecionado} aoClicar={() => setVeiculoSelecionado(v.id)}/>
          ))}
        </div>

        <p className="text-xl text-center">Orçamento para o veículo: <span className="text-cor5">Toyota Corolla 2018 (XYZ-5421)</span> feito!</p>
        <p className="text-2xl text-center mb-20">Valor: R$ XXX,XX</p>
    </main>
</>
  )
}