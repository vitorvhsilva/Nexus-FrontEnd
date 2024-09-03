export default function InputForm({placeholder}:{placeholder:string}) {
  return (
    <input type="text" className="border-solid border-2 rounded-md w-[90%] text-2xl my-2 py-3 pl-1 border-cor2 md:inline block md:mx-0 mx-auto" placeholder={placeholder}/>
  )
}