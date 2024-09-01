export default function BannerHome() {
  return (
    <section className="w-full h-[80vh] bg-corFundoCinza flex justify-around items-center lg:flex-row flex-col">
      <div className="w-[60%] lg:w-[35%] h-fit">
        <h1 className="font-poppins text-3xl lg:text-5xl">Entenda o que está acontecendo com <span className="text-cor2">seu carro</span></h1>
        <h2 className="font-poppins text-md lg:text-xl">Com a nossa I.A especializada em diagnósticos para veículos, se <span className="text-cor3">conectar</span> com o seu automóvel nunca foi tão facil</h2>
        <button className="w-44 h-12 bg-cor1 p-2 rounded-xl text-corBranco mt-5 hover:bg-cor2 transition duration-500 hover:scale-110 mx-auto">Faça um Diagnóstico</button>
      </div>
      <div className="w-[60%] lg:w-[40%] h-fit">
        <img src='./imgs/fotos/mecanico1.jpg' alt="Homem mexendo em um motor de carro" className="w-full h-full rounded-xl hover:scale-110 duration-700 transition hover:shadow-cor1 shadow-xl"/>
      </div>
    </section>
  )
}