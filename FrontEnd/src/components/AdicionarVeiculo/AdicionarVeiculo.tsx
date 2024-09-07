import InputTextAdicionarVeiculo from "./InputTextAdicionarVeiculo";

export default function AdicionarVeiculo(){
    return(
        <section className="font-poppins">
            <h1 className="text-3xl text-center my-5">Insira os <span className="text-cor5">dados</span> do seu <span className="text-cor5">veículo</span></h1>
            <form action="" className="w-full h-fit px-40 mt-20">
                <InputTextAdicionarVeiculo label="Marca" placeholder="Insira a marca do seu veículo" id="marca"/>
                <InputTextAdicionarVeiculo label="Modelo" placeholder="Insira o modelo do seu veículo" id="modelo"/>
                <div className="w-full h-fit flex flex-col gap-2 my-10">
                    <label htmlFor="ano" className="text-2xl">Ano</label>
                    <input type="number" id="ano" name="ano" placeholder="0" className="border-2 border-corPreto rounded-lg text-2xl w-28 p-2"/>
                </div>
                <InputTextAdicionarVeiculo label="Placa" placeholder="Insira a placa do seu veículo" id="placa"/>
            </form>
        </section>
    )
}