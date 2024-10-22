import { TipoEnderecoUsuarioCadastro } from "@/app/types";

export default function InputTextAdicionarEndereco({label, placeholder, id, endereco, setEndereco}:{label: string, placeholder: string, id: string, endereco: TipoEnderecoUsuarioCadastro, setEndereco: (veiculo: TipoEnderecoUsuarioCadastro) => void }){

    const field = id as keyof TipoEnderecoUsuarioCadastro

    return(
        <div className="w-full h-fit flex flex-col gap-2 my-10">
            <label htmlFor={id} className="text-2xl">{label}</label>
            <input type="text" value={endereco[field]} onChange={(e)=> setEndereco({...endereco, [field]:e.target.value})} id={id} name={id} placeholder={placeholder} className="border-2 border-corPreto rounded-lg text-2xl w-full p-2"/>
        </div>
    )
}