"use client"

import { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Cabecalho() {
  const [aberto, setAberto] = useState(false);
  const [logado, setLogado] = useState(false);

  const toggleMenu = () => {
    setAberto(!aberto);
  };

  useEffect(() => {
    const cpf = localStorage.getItem("cpf")
    if (cpf) {
      setLogado(true)
    }
  }, [])

  return (
    <header className="navbar font-poppins">
      <div className="navbar-container">
        <Link href="/" className="navbar-brand">
          <Image
            className="navbar-logo w-14 h-12 ml-4"
            src={"/imgs/logos/nexusblue1.png"}
            alt="logo da nexus azul"
            width={100} height={100}
          />
        </Link>
        <button className="navbar-toggler" onClick={toggleMenu}>
          <span className="navbar-toggler-icon ml-4">{aberto ? 'X' : '☰'}</span>
        </button>
        <nav className={`navbar-menu ${aberto ? 'active' : ''}`}>
          <ul className="navbar-list">
            <li className="navbar-item">
              <Link href="/integrantes" className="navbar-link">
                Sobre nós
              </Link>
            </li>
            <li className="navbar-item">
              <Link href="/user/diagnostico" className="navbar-link">
                Diagnóstico
              </Link>
            </li>
            <li className="navbar-item">
              <Link href="/user/orcamento" className="navbar-link">
                Orçamento
              </Link>
            </li>
            <li className="navbar-item">
              <Link href="/user/agendamento" className="navbar-link">
                Agendamento
              </Link>
            </li>
          </ul>
        </nav>
      </div>
      {logado ? 
        <Link href="/user">
          <Image src={"/imgs/icones/user.png"} height={100} width={100} className="w-10 h-10" alt="Icone de Usuario"/>
        </Link>
      :
        <div className="navbar-login ms-auto">
          <Link href="/login" className="login-button">Login</Link>
        </div>
      }
    </header>
  );
}
