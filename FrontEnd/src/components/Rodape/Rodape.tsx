import { Link } from "react-router-dom";

export default function Rodape() {
  return (
    <>
      <footer className="bg-corPreto font-poppins text-corBranco flex flex-row justify-between">
        <div className="flex md:flex-row flex-col md:mt-8">
          <div>
            <img className="md:w-24 md:m-8 w-8 m-2" src="../../../public/imgs/logos/nexuswhite.png" alt="Logo da nexus"></img>
            <img className="md:w-24 md:m-8 w-8 m-2" src="../../../public/imgs/logos/porto.png" alt="Logo da Porto"></img>
          </div>
          <div className="lg:ml-40 md:ml-20 md:m-6 m-2">
            <h6 className="md:mb-6 md:ml-3 md:text-sm text-footer mt-2">Links rápidos</h6>
            <ul>
              <li className="md:m-3 md:text-sm text-footer mt-1"><Link to="/integrantes">Sobre nós</Link></li>
              <li className="md:m-3 md:text-sm text-footer mt-1"><Link to="/">Perguntas Frequentes</Link></li>
              <li className="md:m-3 md:text-sm text-footer mt-1"><Link to="/">Suporte</Link></li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col xl:mr-28 md:mr-6 md:mt-10 mt-2 mr-8">
            <div className="flex flex-col mb-6 items-center">
                <p className="md:text-lg text-footer">Acompanhe a <span className="text-corRoxo">Nexus</span> nas redes sociais.</p>
                <div className="flex">
                    <img className="m-2 lg:ml-10 md:ml-8 lg:mr-20 md:mr-12 w-6 h-6 md:w-[80%] md:h-[80%]" src="../../../public/imgs/logos/instagram.png" alt="Logo do Instagram"></img>
                    <img className="m-2 lg:mr-20 md:mr-12 w-6 h-6 md:w-[80%] md:h-[80%]" src="../../../public/imgs/logos/linkedin.png" alt="Logo do Linkedin"></img>
                    <img className="m-2 lg:mr-20 md:mr-12 w-6 h-6 md:w-[80%] md:h-[80%]" src="../../../public/imgs/logos/youtube.png" alt="Logo do Youtube"></img>
                    <img className="m-2 lg:mr-20 md:mr-12 w-6 h-6 md:w-[80%] md:h-[80%]" src="../../../public/imgs/logos/twitter.png" alt="Logo do Twitter"></img>
                </div>
            </div>
            <div className="flex flex-col mb-6 items-center">
                <p className="md:text-lg text-footer">Acompanhe a <span className="text-cor5">Porto</span> nas redes sociais.</p>
                <div className="flex">
                    <img className="m-2 lg:ml-10 md:ml-8 lg:mr-20 md:mr-12 w-6 h-6 md:w-[80%] md:h-[80%]" src="../../../public/imgs/logos/instagram.png" alt="Logo do Instagram"></img>
                    <img className="m-2 lg:mr-20 md:mr-12 w-6 h-6 md:w-[80%] md:h-[80%]" src="../../../public/imgs/logos/linkedin.png" alt="Logo do Linkedin"></img>
                    <img className="m-2 lg:mr-20 md:mr-12 w-6 h-6 md:w-[80%] md:h-[80%]" src="../../../public/imgs/logos/youtube.png" alt="Logo do Youtube"></img>
                    <img className="m-2 lg:mr-20 md:mr-12 w-6 h-6 md:w-[80%] md:h-[80%]" src="../../../public/imgs/logos/twitter.png" alt="Logo do Twitter"></img>
                </div>
            </div>
        </div>
      </footer>
    </>
  );
}
