import { TipoOrcamentoAgendamento } from "@/app/types"
import Image from "next/image"

export default function OrcamentoAgendamento({ valorOrcamento, dataOrcamento, idVeiculo, idDiagnostico, selecionado, aoClicar}:TipoOrcamentoAgendamento & {selecionado: boolean ,aoClicar: () => void}) {

  const horaFormatada = `${dataOrcamento[3].toString().padStart(2, '0')}:${dataOrcamento[4].toString().padStart(2, '0')}:${dataOrcamento[5].toString().padStart(2, '0')}`;

  return (
    <div onClick={aoClicar} className={`w-full h-full border-2 border-corPreto rounded-xl flex justify-center items-center py-10 px-4 gap-4 cursor-pointer flex-col transition duration-500 ${selecionado ? "scale-105 bg-cor5" : "hover:scale-105"}`}>
      <Image src={"/imgs/icones/dinheiro.png"} alt="Ícone de um carro" className="w-20 h-20" width={500} height={500} />
      <div>
        <p className={`text-lg ${selecionado ? "text-corBranco" : "text-corPreto"}`}>R${valorOrcamento} {horaFormatada}</p>
      </div>
    </div>
  )
}