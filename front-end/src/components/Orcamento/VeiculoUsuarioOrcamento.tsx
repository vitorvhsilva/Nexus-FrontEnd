import { useEffect, useState } from "react";
import RadioFormOrcamento from "./RadioFormOrcamento";
import Image from "next/image";
import { TipoDiagnostico, TipoVeiculoUsuarioOrcamento } from "@/app/types";

export default function VeiculoUsuarioOrcamento({marca, modelo, ano, placa, tipo, diagnosticos, selecionado, aoClicar, aoClicarDiag, handleSubmit}: TipoVeiculoUsuarioOrcamento & {selecionado: boolean, aoClicar: () => void, aoClicarDiag: (diagnostico: TipoDiagnostico) => void, handleSubmit: () => void}) {

  const [img, setImg] = useState("")

  useEffect(() => {
    if (tipo == "C") {
      setImg("/imgs/icones/carro.png")
    }
    if (tipo == "M") {
      setImg("/imgs/icones/moto.png")
    }
    if (tipo == "T") {
      setImg("/imgs/icones/caminhao.png")
    }
  }, [tipo]) 

  return (
    <div className="w-fit h-fit">
      <div className={`w-full h-full border-2 border-corPreto rounded-xl flex justify-center items-center lg:gap-20 gap-10 py-10 ${selecionado ? "scale-110 bg-cor2" : "hover:scale-110"} transition duration-500 z-10`} onClick={aoClicar}>
        <Image src={img} alt="Ícone de um carro" className="w-32 h-32" width={500} height={500}/>
        <div>
          <p className={`${selecionado ? "text-corBranco" : "text-corPreto"} text-3xl`}>{marca} <span className="text-cor5">{modelo}</span></p>
          <p className={`${selecionado ? "text-corBranco" : "text-corPreto"} text-xl`}>{ano}</p>
          <p className={`${selecionado ? "text-corBranco" : "text-corPreto"} text-xl`}>{placa}</p>
          <p className={`${selecionado ? "text-corBranco" : "text-corPreto"} text-xl`}>{diagnosticos.length} diagnósticos</p>
        </div>
      </div>
      {selecionado &&       
        <div className="w-[100%] h-fit py-5 border-2 border-t-0 border-corPreto rounded-b-xl mx-auto flex gap-2 items-center flex-col z-0">
          {diagnosticos.map((d, i) => (
            <RadioFormOrcamento key={i} id={d.diagnosticoVeiculo} value={d.diagnosticoVeiculo} data={d.dataDiagnostico} feito={d.feitoDiagnostico == 1} aoClicar={() => aoClicarDiag(d)}/>
          ))}
          {diagnosticos.length > 0 &&
            <button onClick={handleSubmit} className="w-[80%] h-10 text-xl text-corBranco bg-cor5 rounded-lg">Gerar orçamento</button>
          }
        </div>
      }
    </div>
  )
}