import { useState } from 'react';
import { Link } from 'react-router-dom';
import '../../index.css'; 

export default function Cabecalho() {
  const [aberto, setAberto] = useState(false);

  const toggleMenu = () => {
    setAberto(!aberto);
  };

  return (
    <header className="navbar font-poppins">
      <div className="navbar-container">
        <Link to="/" className="navbar-brand">
          <img
            className="navbar-logo w-14 h-12 ml-4"
            src="/imgs/logos/nexusblue1.png"
            alt="logo da nexus azul"
          />
        </Link>
        <button className="navbar-toggler" onClick={toggleMenu}>
          <span className="navbar-toggler-icon ml-4">{aberto ? 'X' : '☰'}</span>
        </button>
        <nav className={`navbar-menu ${aberto ? 'active' : ''}`}>
          <ul className="navbar-list">
            <li className="navbar-item">
              <Link to="/integrantes" className="navbar-link">
                Sobre nós
              </Link>
            </li>
            <li className="navbar-item">
              <Link to="/user/diagnostico" className="navbar-link">
                Diagnóstico
              </Link>
            </li>
            <li className="navbar-item">
              <Link to="/user/orcamento" className="navbar-link">
                Orçamento
              </Link>
            </li>
            <li className="navbar-item">
              <Link to="/user/agendamento" className="navbar-link">
                Agendamento
              </Link>
            </li>
          </ul>
        </nav>
      </div>
      <div className="navbar-login ms-auto">
        <Link to="/login" className="login-button">Login</Link>
      </div>
    </header>
  );
}
