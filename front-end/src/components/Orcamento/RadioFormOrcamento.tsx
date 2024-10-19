export default function RadioFormOrcamento({label, id, value, feito}:{label:string, id:string, value: string, feito: boolean}) {
  return (
    <div className="flex justify-center items-center md:gap-2 gap-2">
      <input type="radio" id={id} name="genero" value={value} className="w-6 h-6" disabled={feito}/>
      <label htmlFor={id} className={`text-lg ${feito ? "text-corVermelho" : "hover:text-cor2"}`} >{label}</label>
    </div>
  )
}