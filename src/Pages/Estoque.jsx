import React from 'react';
import '../Css/Meses.css';
import logoPizza from '../images/PIZZACODE2 1.png';
import { Link } from 'react-router-dom';
import '../App.css';

import MolhoTomate from '../images/Ingredientes/MolhoTomate.png';
import MolhoPicante from '../images/Ingredientes/MolhoPicante.png'
import Parmesao from '../images/Ingredientes/Parmesao.png';
import Provolone from '../images/Ingredientes/Provolone.png';
import Mussarela from '../images/Ingredientes/Mussarela.png';
import Gorgonzola from '../images/Ingredientes/Gorgonzola.png';
import Catupiry from  '../images/Ingredientes/Catupiry.png';
import Tomate from '../images/Ingredientes/Tomate.png';
import TomateSeco from '../images/Ingredientes/TomateSeco.png';
import Frango from '../images/Ingredientes/Frango.png';
import Azeitona from '../images/Ingredientes/Azeitona.png';
import Presunto from '../images/Ingredientes/Presunto.png';
import Cebola from '../images/Ingredientes/Cebola.png';
import OvoCozido from '../images/Ingredientes/OvoCozido.png';
import Atum from '../images/Ingredientes/Atum.png';


const Estoque = () => {
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
      <div className="image-gallery">
          <div className="image-item">
            <div className="container-imagem">
              <img src={Atum} alt="Image 1" className="image" />
              <div className="image-text">ATUM</div>
            </div>
          </div>
          <div className="image-item">
            <div className="container-imagem">
              <img src={Azeitona} alt="Image 2" className="image" />
              <div className="image-text">AZEITONA</div>
            </div>
          </div>
          <div className="image-item">
            <div className="container-imagem">
              <img src={Catupiry} alt="Image 3" className="image" />
              <div className="image-text">CATUPIRY</div>
            </div>
          </div>
          <div className="image-item">
            <div className="container-imagem">
              <img src={Cebola} alt="Image 4" className="image" />
              <div className="image-text">CEBOLA</div>
            </div>
          </div>
          <div className="image-item">
            <div className="container-imagem">
              <img src={Frango} alt="Image 5" className="image" />
              <div className="image-text">FRANGO</div>
            </div>
          </div>
          <div className="image-item">
            <div className="container-imagem">
              <img src={Gorgonzola} alt="Image 6" className="image" />
              <div className="image-text">GORGONZOLA</div>
            </div>
          </div>
          <div className="image-item">
            <div className="container-imagem">
              <img src={MolhoPicante} alt="Image 7" className="image" />
              <div className="image-text">MOLHO PICANTE</div>
            </div>
          </div>
          <div className="image-item">
            <div className="container-imagem">
              <img src={MolhoTomate} alt="Image 8" className="image" />
              <div className="image-text">MOLHO DE TOMATE</div>
            </div>
          </div>
          <div className="image-item">
            <div className="container-imagem">
              <img src={Mussarela} alt="Image 9" className="image" />
              <div className="image-text">MUSSARELA</div>
            </div>
          </div>
          <div className="image-item">
            <div className="container-imagem">
              <img src={OvoCozido} alt="Image 10" className="image" />
              <div className="image-text">OVO COZIDO</div>
            </div>
          </div>
          <div className="image-item">
            <div className="container-imagem">
              <img src={Parmesao} alt="Image 11" className="image" />
              <div className="image-text">PARMESSÃO</div>
            </div>
          </div>
          <div className="image-item">
            <div className="container-imagem">
              <img src={Presunto} alt="Image 12" className="image" />
              <div className="image-text">PRESUNTO</div>
            </div>
          </div>
          <div className="image-item">
            <div className="container-imagem">
              <img src={Provolone} alt="Image 13" className="image" />
              <div className="image-text">PROVOLONE</div>
            </div>
          </div>
          <div className="image-item">
            <div className="container-imagem">
              <img src={Tomate} alt="Image 14" className="image" />
              <div className="image-text">TOMATE</div>
            </div>
          </div>
          <div className="image-item">
            <div className="container-imagem">
              <img src={TomateSeco} alt="Image 15" className="image" />
              <div className="image-text">TOMATE SECO</div>
            </div>
          </div>
        </div>
      </div>
  );
};

export default Estoque;