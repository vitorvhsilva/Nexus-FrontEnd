"use client"

import { useEffect, useState } from "react";
import Cabecalho from "../Cabecalho/Cabecalho";
import Rodape from "../Rodape/Rodape";
import EnderecoUsuario from "./EnderecoUsuario";
import { TipoAgendamentoInput, TipoEnderecoUsuarioAgendamento, TipoHorarioMecanica, TipoOrcamentoAgendamento, TipoVeiculoUsuario } from "@/app/types";
import Mecanica from "./Mecanica";
import { useRouter } from "next/navigation";
import HorarioMecanica from "./HorarioMecanica";
import VeiculoUsuarioAgendamento from "./VeiculoUsuarioAgendamento";
import OrcamentoAgendamento from "./OrcamentoAgendamento";

export default function AgendamentoComponent(){

    const navigate = useRouter()

    useEffect(() => {
        pegarEnderecosDoUsuario()
    }, [])

    const [enderecoSelecionado, setEnderecoSelecionado] = useState<TipoEnderecoUsuarioAgendamento>({
        cepEnderecoUsuario:"",
        bairroEnderecoUsuario:"",
        ruaEnderecoUsuario:"",
        numEnderecoUsuario:""
    })

    const [enderecos, setEnderecos] = useState<TipoEnderecoUsuarioAgendamento[]>([])
    
    const pegarEnderecosDoUsuario = async () => {
    
        const cpf = localStorage.getItem("cpf")
        console.log(cpf)
    
        const response = await fetch(`http://localhost:8080/enderecos/usuarios/${cpf}`);
        const enderecosData = await response.json()
    
        if (enderecosData.length == 0) {
            alert('Nenhum endereço cadastrado!')
            navigate.push('/user/adicionar/endereco')
            return  
        }
    
        setEnderecos(enderecosData)
        console.log(enderecosData)
    }

    const handleEnderecoClick = (enderecoSelecionado: TipoEnderecoUsuarioAgendamento) => {
        setEnderecoSelecionado(enderecoSelecionado);
        console.log(enderecoSelecionado)
        pegarMecanicasDoBairro(enderecoSelecionado.bairroEnderecoUsuario)
    };

    const [mecanicas, setMecanicas] = useState<{nomeMecanica: string}[]>([])
    const [mecanicaSelecionada, setMecanicaSelecionada] = useState<{nomeMecanica: string}>({
        nomeMecanica: ""
    })

    const pegarMecanicasDoBairro = async (bairroEnderecoUsuario: string) => {
        try {
          const cpfUser = localStorage.getItem("cpf")
          if (!cpfUser) {
            alert('Problema com a validação! Faça login novamente')
            navigate.push('/login')
            return
          }     
    
          const response = await fetch("http://localhost:8080/mecanicas/bairro", {
            method:"POST",
            headers:{
              "Content-Type" : "application/json"
            },
            body: JSON.stringify({bairro: bairroEnderecoUsuario})
          });
    
          if(!response.ok) {
            const erroTexto = await response.text();
            alert(erroTexto)
            return
          }
    
          const mecanicas = await response.json();
          console.log(mecanicas)
          setMecanicas(mecanicas)
    
        } catch (error) {
          alert(error)
          console.error(error)
        }
    } 

    const handleMecanicaClick = (mecanicaSelecionada: {nomeMecanica: string}) => {
        setMecanicaSelecionada(mecanicaSelecionada);
        console.log(mecanicaSelecionada)
        pegarHorariosDaMecanica(mecanicaSelecionada.nomeMecanica)
    };

    const [horarios, setHorarios] = useState<TipoHorarioMecanica[]>([])

    const [horarioSelecionado, setHorarioSelecionado] = useState<TipoHorarioMecanica>({
        horarioDisponivel: [],
        idMecanica: 0
    })

    const pegarHorariosDaMecanica = async (nomeMecanica: string) => {
        try {
          const cpfUser = localStorage.getItem("cpf")
          if (!cpfUser) {
            alert('Problema com a validação! Faça login novamente')
            navigate.push('/login')
            return
          }     
    
          const response = await fetch("http://localhost:8080/mecanicas/horarios", {
            method:"POST",
            headers:{
              "Content-Type" : "application/json"
            },
            body: JSON.stringify({nomeMecanica: nomeMecanica})
          });
    
          if(!response.ok) {
            const erroTexto = await response.text();
            alert(erroTexto)
            return
          }
    
          const horarios = await response.json();
          console.log(horarios)
          setHorarios(horarios)
    
        } catch (error) {
          alert(error)
          console.error(error)
        }
    } 

    const handleHorarioClick = (horarioSelecionado: TipoHorarioMecanica) => {
        setHorarioSelecionado(horarioSelecionado);
        console.log(horarioSelecionado)
        pegarVeiculosDoUsuario()
    };

    const [veiculos, setVeiculos] = useState<TipoVeiculoUsuario[]>([])
    const [veiculoSelec, setVeiculoSelec] = useState<TipoVeiculoUsuario>({
        marca: "", 
        modelo: "", 
        ano: 0, 
        placa: "", 
        tipo: ""
    })

    const pegarVeiculosDoUsuario = async () => {
        const cpf = localStorage.getItem("cpf")
        console.log(cpf)

        const response = await fetch(`http://localhost:8080/veiculos/usuario/${cpf}`);
        const veiculosData = await response.json()
        if (veiculosData.length == 0) {
            alert('Nenhum veiculo cadastrado!')
            navigate.push('/user/adicionar/veiculo')
            return  
        }


        setVeiculos(veiculosData)
        console.log(veiculosData)
    }

    const handleVeiculoClick = (veiculoSelecionado: TipoVeiculoUsuario) => {
        setVeiculoSelec(veiculoSelecionado);
        console.log(veiculoSelecionado)
        pegarOrcamentosDoVeiculo(veiculoSelecionado.placa)
    };

    const [orcamentos, setOrcamentos] = useState<TipoOrcamentoAgendamento[]>([])
    const [orcamentoSelecionado, setOrcamentoSelecionado] = useState<TipoOrcamentoAgendamento>({
        valorOrcamento: 0,
        dataOrcamento: [],
        idVeiculo: 0,
        idDiagnostico: 0
    })

    const pegarOrcamentosDoVeiculo = async (placa: string) => {
    
        const response = await fetch(`http://localhost:8080/orcamentos/veiculo/${placa}`);
    
        const orcamentosData = await response.json()
        if (orcamentosData.length == 0) {
            alert('Nenhum orcamento feito!')
            navigate.push('/user')
            return  
        }
    
        setOrcamentos(orcamentosData);
        console.log(orcamentosData);
    }

    const handleOrcamentoClick = (orcamentoSelecionado: TipoOrcamentoAgendamento) => {
        setOrcamentoSelecionado(orcamentoSelecionado);
        console.log(orcamentoSelecionado)
    };

    const submitAgendamento = async () => {
        try {
          const cpfUser = localStorage.getItem("cpf")
          if (!cpfUser) {
            alert('Problema com a validação! Faça login novamente')
            navigate.push('/login')
            return
          }     

          const agendamentoInput: TipoAgendamentoInput = {
            placaVeiculo: veiculoSelec.placa,
            idMecanica: horarioSelecionado.idMecanica,
            idDiagnostico: orcamentoSelecionado.idDiagnostico,
            horarioDisponivel: horarioSelecionado.horarioDisponivel
          }
    
          const response = await fetch("http://localhost:8080/agendamentos", {
            method:"POST",
            headers:{
              "Content-Type" : "application/json"
            },
            body: JSON.stringify(agendamentoInput)
          });
    
          if(!response.ok) {
            const erroTexto = await response.text();
            alert(erroTexto)
            return
          }
          
          alert("Agendamento feito com sucesso!")
          const agendamento = await response.json();
          console.log(agendamento)
          navigate.push("/user")

    
        } catch (error) {
          alert(error)
          console.error(error)
        }
    } 

    return(
        <>
            <Cabecalho/>
            <section className="font-poppins h-fit flex mt-10 items-center flex-col">
                <h1 className="text-2xl text-center">Selecione as informações para <span className="text-cor5">agendamento</span></h1>
                <h2 className="text-xl text-center mt-10 mb-5">Selecione seu <span className="text-cor5">endereço</span></h2>
                <div className="w-[90%] lg:w-[70%] h-fit grid md:grid-cols-2 grid-cols-1 gap-12 mx-auto border-corPreto border-2 rounded-xl mb-10 p-5"> 
                    {enderecos.map((e, i) => (
                        <EnderecoUsuario key={i} bairro={e.bairroEnderecoUsuario} cep={e.cepEnderecoUsuario} num={e.numEnderecoUsuario} rua={e.ruaEnderecoUsuario} aoClicar={() => handleEnderecoClick(e)} selecionado={enderecoSelecionado.cepEnderecoUsuario === e.cepEnderecoUsuario}/>
                    ))}
                </div>
                {enderecoSelecionado.cepEnderecoUsuario != "" && 
                    <>
                        <h2 className="text-xl text-center my-5">Selecione uma <span className="text-cor5">mecânica</span> do seu bairro</h2>
                        <div className="w-[90%] lg:w-[70%] h-fit grid md:grid-cols-4 grid-cols-2 gap-12 mx-auto border-corPreto border-2 rounded-xl mb-10 p-5"> 
                            {mecanicas.map((m, i) => (
                                <Mecanica key={i} nomeMecanica={m.nomeMecanica} aoClicar={() => handleMecanicaClick(m)} selecionado={mecanicaSelecionada.nomeMecanica === m.nomeMecanica}/>
                            ))}
                        </div>
                    </>
                }
                {mecanicaSelecionada.nomeMecanica != "" &&
                    <>
                        <h2 className="text-xl text-center my-5">Selecione um <span className="text-cor5">horário</span> dessa mecânica</h2>
                        <div className="w-[90%] lg:w-[70%] h-fit grid xl:grid-cols-6 md:grid-cols-3 grid-cols-2 gap-12 mx-auto border-corPreto border-2 rounded-xl mb-10 p-5"> 
                            {horarios.map((h, i) => (
                                <HorarioMecanica key={i} idMecanica={h.idMecanica} horarioDisponivel={h.horarioDisponivel} selecionado={horarioSelecionado.horarioDisponivel == h.horarioDisponivel} aoClicar={() => handleHorarioClick(h)}/>
                            ))}
                        </div>
                    </>
                }
                {horarioSelecionado.idMecanica != 0 && 
                    <>
                        <h2 className="text-xl text-center my-5">Selecione um <span className="text-cor5">veículo</span></h2>
                        <div className="w-[90%] lg:w-[70%] h-fit grid md:grid-cols-2 grid-cols-1 gap-12 mx-auto border-corPreto border-2 rounded-xl mb-10 p-5"> 
                            {veiculos && veiculos.map((v, i) => (
                                <VeiculoUsuarioAgendamento key={i} marca={v.marca} modelo={v.modelo} ano={v.ano} placa={v.placa} tipo={v.tipo} aoClicar={() => handleVeiculoClick(v)} selecionado={veiculoSelec.placa == v.placa}/>
                            ))}
                        </div>
                    </>
                }
                {veiculoSelec.placa != "" && 
                    <>
                        <h2 className="text-xl text-center my-5">Selecione um <span className="text-cor5">orçamento</span> desse veículo</h2>
                        <div className="w-[90%] lg:w-[70%] h-fit grid md:grid-cols-4 grid-cols-2 gap-12 mx-auto border-corPreto border-2 rounded-xl mb-10 p-5"> 
                            {orcamentos && orcamentos.map((o, i) => (
                                <OrcamentoAgendamento key={i} dataOrcamento={o.dataOrcamento} aoClicar={() => handleOrcamentoClick(o)} idDiagnostico={o.idDiagnostico} idVeiculo={o.idVeiculo} valorOrcamento={o.valorOrcamento} selecionado={orcamentoSelecionado.dataOrcamento == o.dataOrcamento}/>
                            ))}
                        </div>
                    </>
                }
                {horarioSelecionado.idMecanica != 0 && 
                    <button className="text-xl bg-cor2 text-corBranco px-10 py-4 rounded-3xl my-5 cursor-pointer" onClick={submitAgendamento}>Fazer agendamento</button>
                }
            </section>
            <Rodape/>
        </>
    )
}

