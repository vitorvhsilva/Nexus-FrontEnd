import { TipoUsuario } from "@/app/types";

export default function RadioForm({ label, id, value, usuario, setUsuario }: { label: string, id: string, value: string, usuario: TipoUsuario, setUsuario: (usuario: TipoUsuario) => void }) {
  return (
    <div className="flex justify-center items-center md:gap-2 gap-2">
      <input 
        type="radio" 
        id={id} 
        name="genero" 
        value={value} 
        className="w-6 h-6" 
        onChange={() => setUsuario({ ...usuario, genero: value })}
      />
      <label htmlFor={id} className="md:text-xl text-md">{label}</label>
    </div>
  );
}