import Image from "next/image";

export default function Mecanica({ nome, aoClicar, selecionado }:{nome: string, aoClicar: () => void, selecionado: boolean }) {
  return (
    <div onClick={aoClicar} className={`w-full h-full border-2 border-corPreto rounded-xl flex justify-center items-center py-10 px-4 gap-4 cursor-pointer flex-col transition duration-500 ${selecionado ? "scale-105 bg-cor2" : "hover:scale-105"}`}>
      <Image src={"/imgs/icones/mecanico-carro2.png"} alt="Ícone de um carro" className="w-20 h-20" width={500} height={500} />
      <div>
        <p className={`text-xl ${selecionado ? "text-corBranco" : "text-corPreto"}`}>{nome}</p>
      </div>
    </div>
  );
}