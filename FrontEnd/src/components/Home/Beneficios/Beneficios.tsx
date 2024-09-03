import Beneficio from "./Beneficio";

export default function Beneficios() {
  return (
    <section className="w-[95%] h-fit my-5 mx-auto">
      <h2 className="text-2xl font-poppins text-center">No nosso site, temos tudo que seu <span className="text-cor2 font-bold">automóvel precisa</span></h2>
      <div className="grid grid-cols-1 lg:grid-cols-5 my-5 gap-8">
        <Beneficio img="./imgs/icones/ia.png" titulo="Diagnóstico inteligente e intuitivo."/>
        <Beneficio img="./imgs/icones/mecanico-carro1.png" titulo="Orçamento confíavel para o reparo."/>
        <Beneficio img="./imgs/icones/user-engrenagem.png" titulo="Agendamento com mecânicos parceiros."/>
        <Beneficio img="./imgs/icones/suporte.png" titulo="Suporte rápido para o seu problema."/>
        <Beneficio img="./imgs/icones/porcentagem-de-beneficio.png" titulo="Benefícios e Descontos em nossos parceiros."/>
      </div>
    </section>
  )
}