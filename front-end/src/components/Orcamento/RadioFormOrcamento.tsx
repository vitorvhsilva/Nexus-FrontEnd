export default function RadioFormOrcamento({label, id, value, feito, data}:{label:string, id:string, value: string, data: number[], feito: boolean}) {

  const dataFormatada = data[2] + "/" + data[1] + "/" + data[0] + " " + data[3] + ":" + data[4] 

  return (
    <div className="flex justify-center items-center md:gap-2 gap-2">
      <input type="radio" id={id} name="genero" value={value} className="w-6 h-6" disabled={feito}/>
      <label htmlFor={id} className={`text-lg ${feito ? "text-corVermelho" : "hover:text-cor2"}`} >Diagnóstico {dataFormatada}</label>
    </div>
  )
}