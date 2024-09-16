import Funcionalidade from "./Funcionalidade";
import VeiculoUsuario from "./VeiculoUsuario";

export default function PaginaUsuarioComponent() {

  const veiculosUsuarios = [
    {id: 1, marca: "Toyota", modelo: "Corolla", ano: 2018, placa: "XYZ-5421", tipo: "C"},
    {id: 2, marca: "Honda", modelo: "CB 500", ano: 2020, placa: "ABC-3926", tipo: "M"},
    {id: 3, marca: "Volvo", modelo: "FH 540", ano: 2015, placa: "JKL-3212", tipo: "T"},
  ]

  return (
    <main className="w-full h-fit font-poppins">
      <h1 className="text-center text-2xl my-5">Acesse as <span className="text-cor2">funcionalidades</span> do nosso site</h1>
      <div className="w-[95%] h-fit grid md:grid-cols-3 grid-cols-1 gap-12 mx-auto">
        <Funcionalidade img="./imgs/icones/mecanico-carro2.png" titulo="Diagnóstico" subtitulo="Diagnóstico rápido 
        e intuitivo do seu automóvel" link="diagnostico"/>
        <Funcionalidade img="./imgs/icones/dinheiro.png" titulo="Orçamento" subtitulo="Orçamento com I.A baseado no Diagnóstico do seu veículo" link="orcamento"/>
        <Funcionalidade img="./imgs/icones/agenda.png" titulo="Agendamento" subtitulo="Agende um conserto para o seu veículo com base no seu endereço" link="agendamento"/>
      </div>
      <h2 className="text-center text-2xl my-10">Seus <span className="text-cor5">veículos</span></h2>
      <div className="w-[95%] h-fit grid md:grid-cols-2 grid-cols-1 gap-12 mx-auto border-corPreto border-2 rounded-xl my-10 p-5"> 
        {veiculosUsuarios.map((v) => (
          <VeiculoUsuario key={v.id} marca={v.marca} modelo={v.modelo} ano={v.ano} placa={v.placa} tipo={v.tipo}/>
        ))}
      </div>
      <button className="block mx-auto my-20 text-2xl bg-cor5 text-corBranco rounded-md px-20 py-3">Adicionar veículo</button>
    </main>
  )
}