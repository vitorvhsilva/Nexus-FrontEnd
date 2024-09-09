export default function Funcionalidade({img, titulo, subtitulo}:{img: string, titulo: string, subtitulo: string}) {
  return (
    <div className="w-full h-full border-corPreto border-2 rounded-xl flex justify-center gap-1 items-center flex-col md:py-10 py-6 hover:scale-105 cursor-pointer transition duration-500">
      <img src={img} alt={`Imagem que representa o ${titulo}`} className="w-20 h-20 my-5"/>
      <h2 className="w-[90%] text-xl font-bold">{titulo}</h2>
      <p className="w-[90%]">{subtitulo}</p>
    </div>
  )
}