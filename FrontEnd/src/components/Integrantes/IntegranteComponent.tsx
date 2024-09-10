import { tiposIntegrantes } from "../../types";

export default function IntegranteComponent({imgIntegrante, nomeIntegrante, rmIntegrante, salaIntegrante, githubIntegrante}:tiposIntegrantes) {
    return(
        <>
        <div className="font-poppins">
            <div className="flex flex-col items-center">
                <img src={imgIntegrante} alt={`Foto de ${nomeIntegrante}`}  className="w-60 h-60 rounded-full mb-5"></img>
                <h2 className="text-xl">{nomeIntegrante}</h2>
                <h3 className="">RM{rmIntegrante}</h3>
                <h4 className="">{salaIntegrante}</h4>
                <a className="" href={githubIntegrante}>{githubIntegrante}</a>
            </div>
        </div>
        </>
    )
}