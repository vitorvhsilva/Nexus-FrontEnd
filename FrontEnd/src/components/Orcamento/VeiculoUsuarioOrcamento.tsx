import { useEffect, useState } from "react";

type VeiculoUsuarioOrcamento = {
  marca: string;
  modelo: string;
  ano: number;
  placa: string;
  tipo: string;
  diagnosticos: string[] | null;
}

export default function VeiculoUsuarioOrcamento({marca, modelo, ano, placa, tipo, diagnosticos}                         :VeiculoUsuarioOrcamento) {

  const [img, setImg] = useState("")
  const [mostrarDiagnosticos, setMostrarDiagnosticos] = useState([])

  useEffect(() => {
    if (tipo == "C") {
      setImg("../../../public/imgs/icones/carro.png")
    }
    if (tipo == "M") {
      setImg("../../../public/imgs/icones/moto.png")
    }
    if (tipo == "T") {
      setImg("../../../public/imgs/icones/caminhao.png")
    }
  }, [tipo]) 

  return (
    <div className="w-full h-full border-2 border-corPreto rounded-xl flex justify-center items-center lg:gap-20 gap-10 py-20 px-4">
      <img src={img} alt="Ícone de um carro" className="w-32 h-32"/>
      <div>
        <p className="text-3xl">{marca} <span className="text-cor5">{modelo}</span></p>
        <p className="text-xl">{ano}</p>
        <p className="text-xl">{placa}</p>
      </div>
    </div>
  )
}