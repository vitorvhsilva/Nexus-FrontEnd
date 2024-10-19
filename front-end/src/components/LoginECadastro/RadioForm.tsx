export default function RadioForm({label, id, value}:{label:string, id:string, value: string}) {
  return (
    <div className="flex justify-center items-center md:gap-2 gap-2">
      <input type="radio" id={id} name="genero" value={value} className="w-6 h-6"/>
      <label htmlFor={id} className="md:text-xl text-md">{label}</label>
    </div>
  )
}