
// importando as imagens das Pizzas Tradicionais//
import PizzaQueijo from '../images/PizzasTradicionais/PizzaQueijo.png';
import PizzaCalabresa from '../images/PizzasTradicionais/PizzaCalabresa.png';
import PizaFrangoC from '../images/PizzasTradicionais/PizzaFrangoC.png'
import PizzaPortuguesa from '../images/PizzasTradicionais/Portuguesa.png';
import PizzaQuatroQueijos from '../images/PizzasTradicionais/QuatroQueijos.png';
import PizzaMargherita from '../images/PizzasTradicionais/Marguerita.png';
import PizzaNapolitana from '../images/PizzasTradicionais/Napolitana.png';
import PizzaMorangoChoc from '../images/PizzasTradicionais/MorangoChocolatepng.png';

// importando as imagens dos Ingredientes//
// molhos
import MolhoTomate from '../images/Ingredientes/MolhoTomate.png';
import MolhoPicante from '../images/Ingredientes/MolhoPicante.png'
// queijos
import Parmesao from '../images/Ingredientes/Parmesao.png';
import Provolone from '../images/Ingredientes/Provolone.png';
import Mussarela from '../images/Ingredientes/Mussarela.png';
import Gorgonzola from '../images/Ingredientes/Gorgonzola.png';
import Catupiry from  '../images/Ingredientes/Catupiry.png';
// recheio
import Tomate from '../images/Ingredientes/Tomate.png';
import TomateSeco from '../images/Ingredientes/TomateSeco.png';
import Frango from '../images/Ingredientes/Frango.png';
import Azeitona from '../images/Ingredientes/Azeitona.png';
import Presunto from '../images/Ingredientes/Presunto.png';
import Cebola from '../images/Ingredientes/Cebola.png';
import OvoCozido from '../images/Ingredientes/OvoCozido.png';
import Atum from '../images/Ingredientes/Atum.png';




export const PizzaTradicionais = {
    pizzas: [{nome: "Queijo", tipo:PizzaQueijo},
    {nome: "Calabresa", tipo:PizzaCalabresa},
    {nome:"Frango com catupiry", tipo: PizaFrangoC},
    {nome:"Portuguesa", tipo:PizzaPortuguesa},
    {nome:"Quatro queijos", tipo:PizzaQuatroQueijos},
    {nome:"Margherita"  , tipo:PizzaMargherita},
    {nome:"Napolitana" , tipo:PizzaNapolitana},
    {nome:"Morango com Chocolate", tipo:PizzaMorangoChoc}]};


export const Ingredientes = {
    molhos:[{nome: "Molho de tomate", tipo:MolhoTomate},
    {nome: "Molho picante", tipo:MolhoPicante}],
    queijo:[{nome: "Parmesão", tipo:Parmesao},
    {nome:"Provole", tipo:Provolone},
    {nome:"Mussarela", tipo:Mussarela},
    {nome:"Gorgonzola", tipo:Gorgonzola},
    {nome:"Catupiry", tipo: Catupiry}],
    recheio:[{nome:"Tomate", tipo:Tomate},
    {nome:"Tomate Seco", tipo:TomateSeco},
    {nome:"Frango", tipo:Frango},
    {nome:"Azeitona", tipo:Azeitona},
    {nome:"Presunto", tipo:Presunto},
    {nome:"Cebola", tipo:Cebola},
    {nome:"Ovo cozido", tipo:OvoCozido},
    {nome:"Atum", tipo:Atum}]

};