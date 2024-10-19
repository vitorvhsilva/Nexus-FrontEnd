export default function Beneficio({img, titulo}:{img:string, titulo:string}) {
  return (
    <div className="w-full h-full flex justify-center items-center flex-col hover:scale-110 transition duration-500">
      <img src={img} alt="Imagem de um beneficio" className="lg:w-12 lg:h-12 w-20 h-20"/>
      <p className="font-poppins lg:text-lg text-xl text-center">{titulo}</p>
    </div>
  )
}