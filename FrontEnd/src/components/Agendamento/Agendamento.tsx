export default function Agendamento(){
    return(
        <section className="font-poppins">
            <h1 className="text-2xl text-center my-10">Selecione a data para <span className="text-cor1">agendamento</span></h1>
            <form>
                <div className="my-20">
                    <label className="text-xl mx-20">Data e hora</label>
                    <input type="datetime-local" className="block border mx-20 rounded mb-5"/>
                    <label className="text-xl mx-20 block">Escolha uma dessas mecânicas do seu bairro</label>
                    <select name="mecanicas" id="mecanicas" className="border rounded mx-20">
                    <option value="Jorge automóveis">Jorge automóveis</option>
                    <option value="Mecanica do vitão">Mecanica do vitão</option>
                    <option value="Automotiva da quebrada">Automotiva da quebrada</option>
                    </select>
                </div>
                <input type="submit" value="Fazer agendamento" className="text-xl bg-cor5 py-3 px-10 text-corBranco rounded-lg mx-auto block my-10" />
            </form>
        </section>
    )
}