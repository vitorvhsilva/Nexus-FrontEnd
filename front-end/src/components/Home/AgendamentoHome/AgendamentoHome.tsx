import Image from "next/image"

export default function AgendamentoHome() {
  return (
    <section className="w-full h-fit py-10 flex justify-around items-center bg-corFundoCinza lg:flex-row flex-col lg:gap-0 gap-10">
      <div className="lg:w-[35%] w-[80%] h-fit font-poppins">
        <h2 className="text-4xl">Agende com <span className="text-cor2 font-semibold">confiança</span> e sem <span className="text-cor2 font-semibold">obstáculos</span></h2>
        <h3 className="text-xl">Agende o conserto com os <span className="text-cor3 font-semibold">melhores profissionais</span> do mercado, facilitando a <span className="text-cor3 font-semibold">agilidade</span> do processo</h3>
      </div>
      <div className="w-[50%] h-full flex justify-center items-center gap-8 md:flex-row flex-col">
        <Image src="/imgs/fotos/mecanico2.jpg" alt="Foto de um mecânico" className="w-auto h-80 xl:h-96 rounded-2xl hover:scale-105 transition duration-700" width={500} height={500}/>
        <Image src="/imgs/fotos/mecanico3.jpg" alt="Foto de um mecânico" className="w-auto h-80 xl:h-96 rounded-2xl hover:scale-105 transition duration-700" width={500} height={500}/>
      </div>
    </section>
  )
}