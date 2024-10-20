import { TipoUsuario } from "@/app/types";

export default function InputForm({placeholder, id, usuario, setUsuario}:{placeholder:string, id: string, usuario: TipoUsuario, setUsuario: (usuario: TipoUsuario) => void}) {

  const field = id as keyof TipoUsuario;

  return (
    <input type="text" className="border-solid border-2 rounded-md w-[90%] text-lg md:text-2xl my-2 py-3 pl-1 border-cor2 md:inline block md:mx-0 mx-auto" value={usuario[field]}
    onChange={(e)=> setUsuario({...usuario, [field]:e.target.value})} name={id} id={id} placeholder={placeholder}/>
  )
}