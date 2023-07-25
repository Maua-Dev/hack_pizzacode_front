import React from 'react';
import { Link } from 'react-router-dom';
import '../Css/MainAdm.css';
import logoPizza from '../images/PIZZACODE2 1.png';
import '../App.css';

export default function MainAdm() {
  return (
    <div className="page">
      <header>
        <h1>Seja bem-vindo!</h1>
        <Link to="/">
          <button className="sair-button">Sair</button>
        </Link>
      </header>
      <div className="content">
        <div className="text-container">
          <Link to="/financeiro">
            <button className="cell">Financeiro</button>
          </Link>
        </div>
        <div className="text-container">
          <Link to="/Pagamentos">
            <button className="cell">Pagamentos</button>
          </Link>
        </div>
        <div className="text-container">
          <Link to="/Estoque">
            <button className="cell">Estoque</button>
          </Link>
        </div>
      </div>
      <div className="image-container1">
        <img src={logoPizza} alt="Logo Pizza" className="centered-image1" />
      </div>
    </div>
  );
}






