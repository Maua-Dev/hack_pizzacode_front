import React from 'react';
import { Route, Routes } from 'react-router-dom';
import App from './App';
import MainAdm from './Pages/MainAdm';
import Janeiro from './Pages/Janeiro';
import Fevereiro from './Pages/Fevereiro';
import Março from './Pages/Março';
import Abril from './Pages/Abril';
import Maio from './Pages/Maio';
import Junho from './Pages/Junho';
import Julho from './Pages/Julho';
import Agosto from './Pages/Agosto';
import Setembro from './Pages/Setembro';
import Outubro from './Pages/Outubro';
import Novembro from './Pages/Novembro';
import Dezembro from './Pages/Dezembro';
import Estoque from './Pages/Estoque';
import Pagamentos from './Pages/Pagamentos';
import Financeiro from './Pages/Financeiro';


export default function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<App/>} />
      <Route path="/MainAdm" element={<MainAdm/>} />
      <Route path="/Janeiro" element={<Janeiro />} />
      <Route path="/Fevereiro" element={<Fevereiro />} />
      <Route path="/Março" element={<Março />} />
      <Route path="/Abril" element={<Abril />} />
      <Route path="/Maio" element={<Maio />} />
      <Route path="/Junho" element={<Junho />} />
      <Route path="/Julho" element={<Julho />} />
      <Route path="/Agosto" element={<Agosto />} />
      <Route path="/Setembro" element={<Setembro />} />
      <Route path="/Outubro" element={<Outubro />} />
      <Route path="/Novembro" element={<Novembro />} />
      <Route path="/Dezembro" element={<Dezembro />} />
      <Route path="/Estoque" element={<Estoque />} />
      <Route path="/Pagamentos" element={<Pagamentos />} />
      <Route path="/Financeiro" element={<Financeiro />} />
    </Routes>
  );
}