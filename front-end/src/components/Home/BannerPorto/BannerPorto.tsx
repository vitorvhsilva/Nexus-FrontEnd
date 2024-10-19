export default function BannerPorto() {
  return (
    <section className="w-full h-fit py-10 flex justify-around items-center">
      <div className="bg-cor1 w-[98%] h-[90%] py-10 rounded-2xl flex justify-around items-center md:flex-row flex-col">
        <div className="font-poppins md:w-[50%] w-[90%]">
          <h2 className="text-corBranco text-4xl">Economize com a <span className="text-cor5 font-semibold">Porto</span></h2>
          <h3 className="text-corBranco text-xl">Faça o agendamento com um dos Centros Automotivos da <span className="text-cor5 font-semibold">Porto</span>, e o seu orçamento terá <span className="text-cor5 font-semibold">descontos</span></h3>
        </div>
        <div className="w-[80%] md:w-[30%] h-full flex justify-center items-center">
          <img src="./imgs/logos/portoazul.png" alt="Logo da Porto" className="h-fit w-full"/>
        </div>
      </div>
    </section>
  )
}