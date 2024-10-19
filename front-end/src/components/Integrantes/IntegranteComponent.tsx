import Image from "next/image";
import { tiposIntegrantes } from "@/app/types";

export default function IntegranteComponent({imgIntegrante, nomeIntegrante, rmIntegrante, salaIntegrante, githubIntegrante}:tiposIntegrantes) {
    return(
        <>
        <div className="font-poppins">
            <div className="flex flex-col items-center m-5">
                <Image src={imgIntegrante} alt={`Foto de ${nomeIntegrante}`}  className="lg:w-60 lg:h-60 w-48 h-48 rounded-full mb-5" width={500} height={500}></Image>
                <h2 className="text-xl">{nomeIntegrante}</h2>
                <h3 className="">RM{rmIntegrante}</h3>
                <h4 className="">{salaIntegrante}</h4>
                <a className="text-xs" href={githubIntegrante}>{githubIntegrante}</a>
            </div>
        </div>
        </>
    )
}