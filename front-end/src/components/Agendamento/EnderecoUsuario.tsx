import { TipoEnderecoUsuario } from "@/app/types";
import Image from "next/image";

export default function EnderecoUsuario({ cep, bairro, rua, num, aoClicar, selecionado }: TipoEnderecoUsuario & { aoClicar: () => void, selecionado: boolean }) {
  return (
    <div onClick={aoClicar} className={`w-full h-full border-2 border-corPreto rounded-xl flex justify-center items-center py-10 px-4 cursor-pointer transition duration-500 ${selecionado ? "scale-105 bg-cor2" : "hover:scale-105"}`}>
      <Image src={"/imgs/icones/casa.png"} alt="Ícone de um carro" className="w-32 h-32" width={500} height={500} />
      <div>
        <p className={`text-3xl ${selecionado ? "text-corBranco" : "text-corPreto"}`}>{rua} <span className="text-cor5">{num}</span></p>
        <p className={`text-xl ${selecionado ? "text-corBranco" : "text-corPreto"}`}>{bairro}</p>
        <p className={`text-xl ${selecionado ? "text-corBranco" : "text-corPreto"}`}>{cep}</p>
      </div>
    </div>
  );
}