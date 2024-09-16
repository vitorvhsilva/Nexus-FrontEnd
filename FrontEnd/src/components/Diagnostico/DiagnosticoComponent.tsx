import VeiculoUsuario from "../PaginaUsuario/VeiculoUsuario"

export default function DiagnosticoComponent(){
    const veiculosUsuarios = [
        {id: 1, marca: "Toyota", modelo: "Corolla", ano: 2018, placa: "XYZ-5421", tipo: "C"},
        {id: 2, marca: "Honda", modelo: "CB 500", ano: 2020, placa: "ABC-3926", tipo: "M"},
        {id: 3, marca: "Volvo", modelo: "FH 540", ano: 2015, placa: "JKL-3212", tipo: "T"},
      ]

    return (
        <>
            <main className="font-poppins">
                <h2 className="text-center text-2xl my-10">Selecione o <span className="text-cor2"> veículo</span> para  o <span className="text-cor2">diagnóstico</span></h2>
                <div className="w-[95%] h-fit grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-12 mx-auto rounded-xl my-10 p-5"> 
                    {veiculosUsuarios.map((v) => (
                        <VeiculoUsuario key={v.id} marca={v.marca} modelo={v.modelo} ano={v.ano} placa={v.placa} tipo={v.tipo}/>
                    ))}
                </div>
                <div className="flex flex-col justify-center items-center mt-4 mb-6 w-[80%] mx-auto">
                    <h1 className="text-xl">O que <span className="text-cor3">ocorreu</span> com ele?</h1>
                    <textarea className="w-full h-40 mt-6 md:h-60 lg:h-80 p-4 border-2 border-corPreto rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-corPreto placeholder-gray-500" placeholder="Insira a descrição aqui"/>
                    <button className="text-xl bg-cor2 text-corBranco px-10 py-4 rounded-3xl my-5">Fazer diagnóstico</button>
                    <p className="text-lg my-2 text-left w-full">Análise resultou em:xxx</p>
                </div>

            </main>
        </>
    )
}