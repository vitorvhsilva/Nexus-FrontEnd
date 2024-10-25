"use client"

import { useEffect, useState } from "react";
import Image from "next/image";
import { TipoVeiculoUsuario } from "@/app/types";

export default function VeiculoUsuarioAgendamento({marca, modelo, ano, placa, tipo, aoClicar, selecionado}:TipoVeiculoUsuario & {selecionado: boolean, aoClicar: () => void}) {

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
    <div onClick={aoClicar} className={`w-full h-full border-2 border-corPreto rounded-xl flex justify-center items-center lg:gap-20 gap-10 py-20 px-4 cursor-pointer ${selecionado ? "scale-105 bg-cor2" : "hover:scale-105"}`}>
      <Image src={img} alt="Ícone de um carro" className="w-32 h-32" width={500} height={500}/>
      <div>
        <p className={`text-3xl ${selecionado && "text-corBranco"}`}>{marca} <span className="text-cor5">{modelo}</span></p>
        <p className={`text-xl ${selecionado && "text-corBranco"}`}>{ano}</p>
        <p className={`text-xl ${selecionado && "text-corBranco"}`}>{placa}</p>
      </div>
    </div>
  )
}