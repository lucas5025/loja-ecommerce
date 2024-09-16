import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
    return  <footer>

        <div className="pager-inner-content content">

        <div className="download-options">
        <p>Baixe o nosso Aplicativo</p>
        <p>Baixe o nosso aplicativo para Android e IOS</p>
        <div>
        <img src="/images/applestore.svg" alt="App Store download" />
        <img src="/images/playstore.svg" alt="Play Store download" />
        </div>
     </div>
        
       <div className="logo-footer">

       <h1 className="logo">
          DEV<span>STORE</span>
       </h1>
       <p>
     A DEV Store tem como missão Continuar sendo o site de e-commerce 
     especializado em PC Gamer do Brasil com foco total na satisfação
     de nossos clientes e parceiros. Temos ano a ano batido recordes 
    de vendas e recebido diversas premiações e certificações do setor.
       </p>
        </div> 

        <div className="links">
            <h3>Links úteis</h3>
            <ul>
            <li>
               <Link to="/sobre">Quem somos</Link>
             </li>
             <li>
               <Link to="/">Entrega</Link>
             </li>
             <li>
               <Link to="/contato">Fale conosco</Link>
             </li>
             <li>
               <Link to="/">Políticas de Privacidade</Link>
             </li>
             <li>
               <Link to="/">Torne-se afiliado</Link>
             </li>
           </ul>
        </div>
        </div>


      <div className="page-inner-content"> 
      <hr />
      <p className="copyright">Copyright 2025 - Lucas de Barros - Todos os Direitos Reservados</p>
      </div>
        
    </footer>
}