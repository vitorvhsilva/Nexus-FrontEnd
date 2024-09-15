import { Link } from "react-router-dom";

export default function Rodape() {
  return (
    <>
      <footer className="bg-corPreto font-poppins text-corBranco flex flex-row justify-between">
        <div className="flex justify-center items-center">
          <div>
            <img className="w-20 md:w-32" src="./imgs/logos/nexuswhite.png" alt="Logo da nexus"></img>
            <img className="w-20 md:w-32" src="./imgs/logos/porto.png" alt="Logo da Porto"></img>
          </div>
          <div className="lg:ml-40 md:ml-20 md:m-6 m-2">
            <h6 className="text-md md:text-2xl mb-5">Links rápidos</h6>
            <ul>
              <li className="text-sm md:text-xl"><Link to="/integrantes">Sobre nós</Link></li>
              <li className="text-sm md:text-xl"><Link to="/">Perguntas Frequentes</Link></li>
              <li className="text-sm md:text-xl"><Link to="/">Suporte</Link></li>
            </ul>
          </div>
        </div>
        <div className="flex flex-col xl:mr-28 md:mr-6 md:mt-10 mt-2 mr-8">
            <div className="flex flex-col mb-6 items-center">
                <p className="text-sm">Acompanhe a <span className="text-corRoxo">Nexus</span> nas redes sociais.</p>
                <div className="flex justify-around items-center w-full">
                    <img className="w-7 md:w-10" src="./imgs/logos/instagram.png" alt="Logo do Instagram"></img>
                    <img className="w-7 md:w-10" src="./imgs/logos/linkedin.png" alt="Logo do Linkedin"></img>
                    <img className="w-7 md:w-10" src="./imgs/logos/youtube.png" alt="Logo do Youtube"></img>
                    <img className="w-7 md:w-10" src="./imgs/logos/twitter.png" alt="Logo do Twitter"></img>
                </div>
            </div>
            <div className="flex flex-col mb-6 items-center">
                <p className="text-sm">Acompanhe a <span className="text-cor5">Porto</span> nas redes sociais.</p>
                <div className="flex justify-around items-center w-full">
                    <img className="w-7 md:w-10" src="./imgs/logos/instagram.png" alt="Logo do Instagram"></img>
                    <img className="w-7 md:w-10" src="./imgs/logos/linkedin.png" alt="Logo do Linkedin"></img>
                    <img className="w-7 md:w-10" src="./imgs/logos/youtube.png" alt="Logo do Youtube"></img>
                    <img className="w-7 md:w-10" src="./imgs/logos/twitter.png" alt="Logo do Twitter"></img>
                </div>
            </div>
        </div>
      </footer>
    </>
  );
}
