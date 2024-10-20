"use client"

import { useState } from "react";
import Cabecalho from "../Cabecalho/Cabecalho";
import Rodape from "../Rodape/Rodape";
import EnderecoUsuario from "./EnderecoUsuario";
import { TipoEnderecoUsuario } from "@/app/types";

export default function AgendamentoComponent(){

    const [endereco, setEndereco] = useState<TipoEnderecoUsuario>({
        cep:"",
        bairro:"",
        rua: "",
        num: ""
    })

    const listaEndereco: TipoEnderecoUsuario[] = [
        {cep: "08345211", bairro: "Centro", rua: "Rua VAA", num: "23"},
        {cep: "08345321", bairro: "ABC", rua: "Rua ADS", num: "12"}
    ]

    const handleEnderecoClick = (enderecoSelecionado: TipoEnderecoUsuario) => {
        setEndereco(enderecoSelecionado);
        console.log(enderecoSelecionado)
    };

    return(
        <>
            <Cabecalho/>
            <section className="font-poppins h-fit flex mt-10 items-center flex-col">
                <h1 className="text-2xl text-center">Selecione as informações para <span className="text-cor5">agendamento</span></h1>
                <h2 className="text-xl text-center mt-10 mb-5">Selecione seu <span className="text-cor5">endereço</span></h2>
                <div className="w-[90%] lg:w-[70%] h-fit grid md:grid-cols-2 grid-cols-1 gap-12 mx-auto border-corPreto border-2 rounded-xl mb-10 p-5"> 
                    {listaEndereco.map((e, i) => (
                        <EnderecoUsuario key={i} bairro={e.bairro} cep={e.cep} num={e.num} rua={e.rua} aoClicar={() => handleEnderecoClick(e)} selecionado={endereco.cep === e.cep}/>
                    ))}
                </div>
                <form>
                    <div className="my-20">
                        <label className="text-xl mx-20">Data e hora</label>
                        <input type="datetime-local" className="block border mx-20 rounded mb-5"/>
                        <label className="text-xl mx-20 block">Escolha uma dessas mecânicas do seu bairro</label>
                        <select name="mecanicas" id="mecanicas" className="border rounded mx-20">
                            <option value="Jorge automóveis">Jorge automóveis</option>
                            <option value="Mecanica do vitão">Mecanica do vitão</option>
                            <option value="Automotiva da quebrada">Automotiva da quebrada</option>
                        </select>
                    </div>
                    <input type="submit" value="Fazer agendamento" className="text-xl bg-cor5 py-3 px-10 text-corBranco rounded-lg mx-auto block my-10" />
                </form>
            </section>
            <Rodape/>
        </>
    )
}

