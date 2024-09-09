export default function BannerIntegrantes() {
  return (
    <>
      <section className="font-poppins pb-3 mt-10 bg-cor1 text-corBranco flex justify-between">
        <div className="h-fit md:ml-5 md:w-[30%] sm:w-[45%] w-[65%] ml-5"> 
            <h3 className="lg:text-xl lg:p-5 sm:text-xs sm:p-4 text-xs pt-5 md:text-lg">Home/Sobre Nós</h3>
            <h1 className="lg:text-4xl lg:p-5 sm:text-xl sm:p-4 text-lg pt-5 md:text-3xl">A consultoria ideal para inovar sua empresa</h1>
            <h2 className="xl:text-xl lg:text-xl lg:p-5 sm:text-sm sm:p-4 text-sm pt-5 md:text-xl">Juntamente com a tecnologia, a Nexus pega sonhos e os transforma em realidade</h2>
        </div>
        <div>
            <img src="./imgs/logos/nexuswhite.png" alt="logo da nexus branca" className="lg:w-[80%] lg:mt-18 2xl:mt-2 xl:mt-10 sm:w-[60%] sm:ml-16 sm:mt-8 w-[70%] md:mt-16 mt-10 ml-16"/>
        </div>
      </section>
    </>
  );
}
