export default function BannerIntegrantes() {
  return (
    <>
      <section className="font-poppins pb-3 mt-10 bg-cor1 text-corBranco flex justify-between items-center">
        <div className="h-fit md:ml-5 md:w-[30%] sm:w-[45%] w-[85%] ml-5"> 
            <h3 className="lg:text-xl lg:p-5 sm:text-xs sm:p-4 text-xs pt-5 md:text-lg">Home/Sobre Nós</h3>
            <h1 className="lg:text-4xl lg:p-5 sm:text-xl sm:p-4 text-md pt-5 md:text-3xl">A consultoria ideal para inovar sua empresa</h1>
            <h2 className="xl:text-xl lg:text-xl lg:p-5 sm:text-sm sm:p-4 text-xs pt-5 md:text-xl">Juntamente com a tecnologia, a Nexus pega sonhos e os transforma em realidade</h2>
        </div>
        <div>
            <img src="./imgs/logos/nexuswhite.png" alt="logo da nexus branca" className="lg:w-[80%] sm:w-[60%] sm:ml-16 w-[70%] ml-10"/>
        </div>
      </section>
    </>
  );
}
