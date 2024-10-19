import { useEffect, useState } from "react";
import RadioFormOrcamento from "./RadioFormOrcamento";

type VeiculoUsuarioOrcamento = {
  marca: string;
  modelo: string;
  ano: number;
  placa: string;
  tipo: string;
  diagnosticos: {diagnostico: string, feito: boolean}[];
  selecionado: boolean;
  aoClicar: () => void;
}

export default function VeiculoUsuarioOrcamento({marca, modelo, ano, placa, tipo, diagnosticos, selecionado, aoClicar}:VeiculoUsuarioOrcamento) {

  const [img, setImg] = useState("")

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
    <div className="w-fit h-fit">
      <div className={`w-full h-full border-2 border-corPreto rounded-xl flex justify-center items-center lg:gap-20 gap-10 py-10 px-4 ${selecionado ? "scale-110 bg-cor2" : "hover:scale-110"} transition duration-500 z-10`} onClick={aoClicar}>
        <img src={img} alt="Ícone de um carro" className="w-32 h-32"/>
        <div>
          <p className={`${selecionado ? "text-corBranco" : "text-corPreto"} text-3xl`}>{marca} <span className="text-cor5">{modelo}</span></p>
          <p className={`${selecionado ? "text-corBranco" : "text-corPreto"} text-xl`}>{ano}</p>
          <p className={`${selecionado ? "text-corBranco" : "text-corPreto"} text-xl`}>{placa}</p>
          <p className={`${selecionado ? "text-corBranco" : "text-corPreto"} text-xl`}>{diagnosticos.length} diagnósticos</p>
        </div>
      </div>
      {selecionado &&       
        <div className="w-[80%] h-fit py-5 border-2 border-t-0 border-corPreto rounded-b-xl mx-auto flex gap-2 items-center flex-col z-0">
          {diagnosticos.map((d) => (
            <RadioFormOrcamento id={d.diagnostico} label={d.diagnostico} value={d.diagnostico} feito={d.feito}/>
          ))}
          {diagnosticos.length > 0 &&
            <button className="w-[80%] h-10 text-xl text-corBranco bg-cor5 rounded-lg">Gerar orçamento</button>
          }
        </div>
      }
    </div>
  )
}