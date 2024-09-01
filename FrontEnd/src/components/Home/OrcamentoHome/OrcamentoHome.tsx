export default function OrcamentoHome() {
  return (
    <section className="w-full h-[50vh] my-5"> 
      <h1 className="text-4xl text-center font-poppins">Preço justo, de forma <span className="text-cor2 font-semibold">rápida</span></h1>
      <div className="h-fit w-[80%] xl:h-[80%] bg-corPreto my-4 mx-auto rounded-xl overflow-y-hidden flex justify-between items-center xl:flex-row flex-col">
        <img src="./imgs/fotos/clientefeliz1.jpg" alt="Imagem de um cliente feliz" className="w-fit h-full"/>
        <h2 className="text-corBranco text-2xl md:text-4xl xl:text-2xl xl:w-[40%] w-[80%] text-center xl:text-right xl:mr-10 mr-0 my-14 xl:my-0">Com o diagnóstico feito, nossa I.A fará um <span className="font-semibold text-cor2">orçamento base</span> para o conserto do respectivo veículo</h2>
      </div>
    </section>
  )
}