import IntegranteComponent from "./IntegranteComponent";

export default function IntegrantesGrupo() {
    return(
        <>
            <section className="font-poppins">
            <div className="flex justify-center">
                <h1 className="lg:text-5xl m-10 md:text-2xl text-md">Colaboradores da empresa:</h1>
            </div>
            <div className="flex lg:flex-row lg:justify-between lg:m-10 flex-col justify-center">
                <IntegranteComponent imgIntegrante="/imgs/integrantes/vitor.jpg" nomeIntegrante="Vitor Hugo" rmIntegrante="558961" salaIntegrante="1TDSPY" githubIntegrante="https://github.com/vitorvhsilva"/>
                <IntegranteComponent imgIntegrante="/imgs/integrantes/gananca.jpg" nomeIntegrante="João Ganança" rmIntegrante="556405" salaIntegrante="1TDSPY" githubIntegrante="https://github.com/joaogananca26"/>
                <IntegranteComponent imgIntegrante="/imgs/integrantes/lucas.jpg" nomeIntegrante="Lucas Yamamoto" rmIntegrante="554458" salaIntegrante="1TDSPY" githubIntegrante="https://github.com/yamamotolucas"/>
            </div>
        </section>
        </>
    )
}