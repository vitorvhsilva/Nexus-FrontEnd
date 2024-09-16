import InputTextAdicionarVeiculo from "./InputTextAdicionarVeiculo";

export default function AdicionarVeiculoComponent(){
    return(
        <section className="font-poppins">
            <h1 className="text-3xl text-center my-5">Insira os <span className="text-cor5">dados</span> do seu <span className="text-cor5">veículo</span></h1>
            <form action="" className="w-full h-fit md:px-40 px-5 mt-20">
                <InputTextAdicionarVeiculo label="Marca" placeholder="Insira a marca do seu veículo" id="marca"/>
                <InputTextAdicionarVeiculo label="Modelo" placeholder="Insira o modelo do seu veículo" id="modelo"/>
                <label className="block text-2xl mb-5">Tipo do veículo</label>
                <div className="w-full h-fit flex justify-between items-start md:flex-row flex-col md:items-center">
                    <div className="w-fit h-fit flex justify-center items-center gap-4">
                        <input className="w-8 h-8" type="radio" id="html" name="fav_language" value="HTML"/>
                        <label htmlFor="html" className="text-2xl">Carro</label>
                    </div>
                    <div className="w-fit h-fit flex justify-center items-center gap-4">
                        <input className="w-8 h-8" type="radio" id="html" name="fav_language" value="HTML"/>
                        <label htmlFor="html" className="text-2xl">Moto</label>
                    </div>
                    <div className="w-fit h-fit flex justify-center items-center gap-4">
                        <input className="w-8 h-8" type="radio" id="html" name="fav_language" value="HTML"/>
                        <label htmlFor="html" className="text-2xl">Caminhão</label>
                    </div>
                </div>
                <div className="w-full h-fit flex flex-col gap-2 my-10">
                    <label htmlFor="ano" className="text-2xl">Ano</label>
                    <input type="number" id="ano" name="ano" placeholder="0" className="border-2 border-corPreto rounded-lg text-2xl w-28 p-2"/>
                </div>
                <InputTextAdicionarVeiculo label="Placa" placeholder="Insira a placa do seu veículo" id="placa"/>
                <input type="submit" value="Cadastrar veículo" className="text-3xl bg-cor5 py-3 px-10 text-corBranco rounded-lg mx-auto block my-10"/>
            </form>
        </section>
    )
}