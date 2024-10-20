"use client"

import { useState } from "react";
import Cabecalho from "../Cabecalho/Cabecalho";
import Rodape from "../Rodape/Rodape";
import EnderecoUsuario from "./EnderecoUsuario";
import { TipoEnderecoUsuario } from "@/app/types";
import Mecanica from "./Mecanica";

export default function AgendamentoComponent(){

    const [endereco, setEndereco] = useState<TipoEnderecoUsuario>({
        cep:"",
        bairro:"",
        rua: "",
        num: ""
    })

    const [mecanica, setMecanica] = useState<{nome: string}>({
        nome: "",
    })

    const listaEndereco: TipoEnderecoUsuario[] = [
        {cep: "08345211", bairro: "Centro", rua: "Rua VAA", num: "23"},
        {cep: "08345321", bairro: "ABC", rua: "Rua ADS", num: "12"}
    ]

    const listaMecanica: {nome: string}[] = [
        {nome: "Mecânica do Jorjão"},
        {nome: "Mecânica do A"},
        {nome: "Mecânica do B"},
        {nome: "Mecânica do C"},
    ]
    
    const handleEnderecoClick = (enderecoSelecionado: TipoEnderecoUsuario) => {
        setEndereco(enderecoSelecionado);
        console.log(enderecoSelecionado)
    };

    const handleMecanicaClick = (mecanicaSelecionada: {nome: string}) => {
        setMecanica(mecanicaSelecionada);
        console.log(mecanicaSelecionada)
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
                <h2 className="text-xl text-center my-5">Selecione a <span className="text-cor5">mecânica</span> do seu bairro</h2>
                <div className="w-[90%] lg:w-[70%] h-fit grid md:grid-cols-4 grid-cols-2 gap-12 mx-auto border-corPreto border-2 rounded-xl mb-10 p-5"> 
                    {listaMecanica.map((m, i) => (
                        <Mecanica key={i} nome={m.nome} aoClicar={() => handleMecanicaClick(m)} selecionado={mecanica.nome === m.nome}/>
                    ))}
                </div>
            </section>
            <Rodape/>
        </>
    )
}

