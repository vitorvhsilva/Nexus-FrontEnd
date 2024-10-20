import InputTextAdicionarEndereco from "./InputTextAdicionarEndereco"

export default function AdicionarEnderecoComponent(){
    return(
        <section className="font-poppins">
            <h1 className="text-3xl text-center my-5">Insira os <span className="text-cor5">dados</span> do seu <span className="text-cor5">endereço</span></h1>
            <form action="" className="w-full h-fit md:px-40 px-5 mt-20">
                <InputTextAdicionarEndereco label="CEP" placeholder="Insira o CEP do seu endereço" id="cep"/>
                <InputTextAdicionarEndereco label="Bairro" placeholder="Insira o bairro do seu endereço" id="bairro"/>
                <InputTextAdicionarEndereco label="Rua" placeholder="Insira a rua do seu endereço" id="rua"/>
                <InputTextAdicionarEndereco label="Número" placeholder="Insira o número do seu endereço" id="num"/>
                <input type="submit" value="Cadastrar endereço" className="text-3xl bg-cor5 py-3 px-10 text-corBranco rounded-lg mx-auto block my-10"/>
            </form>
        </section>
    )
}