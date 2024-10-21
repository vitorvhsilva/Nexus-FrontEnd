import { TipoVeiculoUsuarioCadastro } from "@/app/types";

export default function InputTextAdicionarVeiculo({label, placeholder, id, veiculo, setVeiculo}:
    {label: string, placeholder: string, id: string, veiculo: TipoVeiculoUsuarioCadastro, setVeiculo: (veiculo: TipoVeiculoUsuarioCadastro) => void }){
    
    const field = id as keyof TipoVeiculoUsuarioCadastro;
    
    return(
        <div className="w-full h-fit flex flex-col gap-2 my-10">
            <label htmlFor={id} className="text-2xl">{label}</label>
            <input type="text" value={veiculo[field]} onChange={(e)=> setVeiculo({...veiculo, [field]:e.target.value})} id={id} name={id} placeholder={placeholder} className="border-2 border-corPreto rounded-lg text-2xl w-full p-2"/>
        </div>
    )
}