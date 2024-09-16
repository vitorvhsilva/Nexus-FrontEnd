import { useState } from "react"
import VeiculoUsuarioOrcamento from "./VeiculoUsuarioOrcamento"

export default function OrcamentoComponent() {

  const veiculosUsuarios = [
    {id: 1, marca: "Toyota", modelo: "Corolla", ano: 2018, placa: "XYZ-5421", tipo: "C"},
    {id: 2, marca: "Honda", modelo: "CB 500", ano: 2020, placa: "ABC-3926", tipo: "M"},
    {id: 3, marca: "Volvo", modelo: "FH 540", ano: 2015, placa: "JKL-3212", tipo: "T"},
  ]

  const [veiculoSelecionado, setVeiculoSelecionado] = useState(null)

  return (
    <>
    <main className="font-poppins">
        <div className="w-[95%] h-fit grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-12 mx-auto rounded-xl my-10 p-5"> 
          {veiculosUsuarios.map((v) => (
            <VeiculoUsuarioOrcamento key={v.id} marca={v.marca} modelo={v.modelo} ano={v.ano} placa={v.placa} tipo={v.tipo} diagnosticos={null} selecionado={v.id === veiculoSelecionado} aoClicar={() => setVeiculoSelecionado(v.id)}/>
          ))}
        </div>
    </main>
</>
  )
}