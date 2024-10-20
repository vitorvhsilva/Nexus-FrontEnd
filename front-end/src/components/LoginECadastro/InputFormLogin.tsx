import { TipoLogin } from "@/app/types";

export default function InputFormLogin({placeholder, id, login, setLogin}:{placeholder:string, id: string, login: TipoLogin, setLogin: (login: TipoLogin) => void}) {

  const field = id as keyof TipoLogin;

  return (
    <input type="text" className="border-solid border-2 rounded-md w-[90%] text-lg md:text-2xl my-2 py-3 pl-1 border-cor2 md:inline block md:mx-0 mx-auto" value={login[field]}
    onChange={(e)=> setLogin({...login, [field]:e.target.value})} name={id} id={id} placeholder={placeholder}/>
  )
}