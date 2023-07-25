import React from 'react';
import { Link } from 'react-router-dom'; 
import '../Css/Meses.css';
import logoPizza from '../images/PIZZACODE2 1.png';
import '../App.css';


const Agosto = () => {
  return (
    <div className="page">
      <header>
        <h1>Seja bem-vindo!</h1>
        <Link to="/Financeiro">
          <button className="sair-button">Sair</button>
        </Link>
      </header>
      <div className="content">
        <div className="image-container">
          <img src={logoPizza} alt="Logo Pizza" className="centered-image" />
        </div>
        <div className="text-container">
          <Link to="/financeiro">
            <button className="cell">Financeiro</button>
          </Link>
        </div>
        <div className="text-container">
          <Link to="/pagamentos">
            <button className="cell">Pagamentos</button>
          </Link>
        </div>
        <div className="text-container">
          <Link to="/estoque">
            <button className="cell">Estoque</button>
          </Link>
        </div>
      </div>
      <div className="text-boxes-container">
        <div className="text-box">
          <div className="bordered-box">
            <div className="text-content">Gastos do Mês</div>
          </div>
        </div>
        <div className="text-box">
          <div className="bordered-box">
            <div className="text-content">Faturamento do Mês</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Agosto;
