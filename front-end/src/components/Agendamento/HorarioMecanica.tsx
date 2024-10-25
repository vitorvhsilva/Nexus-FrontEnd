import Image from "next/image"

export default function HorarioMecanica({horario, selecionado, aoClicar}:{horario: string, selecionado: boolean, aoClicar: () => void}) {

  return (
    <div onClick={aoClicar} className={`w-full h-full border-2 border-corPreto rounded-xl flex justify-center items-center py-10 px-4 gap-4 cursor-pointer flex-col transition duration-500 ${selecionado ? "scale-105 bg-cor1" : "hover:scale-105"}`}>
      <Image src={"/imgs/icones/relogio.png"} alt="Ícone de um carro" className="w-20 h-20" width={500} height={500} />
      <div>
        <p className={`text-xl ${selecionado ? "text-corBranco" : "text-corPreto"}`}>{horario}</p>
      </div>
    </div>
  )
}