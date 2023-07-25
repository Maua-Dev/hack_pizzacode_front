import React from 'react';
import { Link } from 'react-router-dom';
import '../Css/Financeiro.css';
import logoPizza from '../images/PIZZACODE2 1.png';
import '../App.css';

export default function Financeiro() {
  return (
    <div className="page">
      <header>
        <h1>Seja bem-vindo!</h1>
        <Link to="/MainAdm">
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

      {/* New container with white background */}
      <div className="months-container">
      <div className="month-title">
          <h2>Meses</h2>
        </div>
        <div className="container">
          <div className="column">
            <div className="row">
              {['Janeiro', 'Fevereiro', 'Março'].map((month, index) => (
                <Link to={`/${month}`} key={index}>
                  <button className="cell1">{month}</button>
                </Link>
              ))}
            </div>
            <div className="row">
              {['Abril', 'Maio', 'Junho'].map((month, index) => (
                <Link to={`/${month}`} key={index}>
                  <button className="cell1">{month}</button>
                </Link>
              ))}
            </div>
            <div className="row">
              {['Julho', 'Agosto', 'Setembro'].map((month, index) => (
                <Link to={`/${month}`} key={index}>
                  <button className="cell1">{month}</button>
                </Link>
              ))}
            </div>
            <div className="row">
              {['Outubro', 'Novembro', 'Dezembro'].map((month, index) => (
                <Link to={`/${month}`} key={index}>
                  <button className="cell1">{month}</button>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}



