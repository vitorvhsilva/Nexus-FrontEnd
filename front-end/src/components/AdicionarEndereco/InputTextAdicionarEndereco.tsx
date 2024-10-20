export default function InputTextAdicionarEndereco({label, placeholder, id}:{label: string, placeholder: string, id: string}){
    return(
        <div className="w-full h-fit flex flex-col gap-2 my-10">
            <label htmlFor={id} className="text-2xl">{label}</label>
            <input type="text" id={id} name={id} placeholder={placeholder} className="border-2 border-corPreto rounded-lg text-2xl w-full p-2"/>
        </div>
    )
}