import Link from "next/link";
import Image from "next/image";


export default function Funcionalidade({img, titulo, subtitulo, link}:{img: string, titulo: string, subtitulo: string,  link: string}) {
  return (
    <Link href={link}>
      <div className="w-full h-full border-corPreto border-2 rounded-xl flex justify-center gap-1 items-center flex-col md:py-10 py-6 hover:scale-105 cursor-pointer transition duration-500">
        <Image src={img} alt={`Imagem que representa o ${titulo}`} className="w-20 h-20 my-5" width={500} height={500}/>
        <h2 className="w-[90%] text-xl font-bold">{titulo}</h2>
        <p className="w-[90%]">{subtitulo}</p>
      </div>
    </Link>
  )
}