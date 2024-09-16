import { faChevronCircleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";

export default function Header (){
    return (
        <header>
            <div className="inner-content">
                <div className="left-size">
                    <h2> DevStore busca as melhores marcas e variedades de produtos a preços competitivos</h2>
                    <p>A DevStore especializou-se no ramo da informática com foco no segmento GAMER.
                         Nosso objetivo é atender a crescente demanda do cenário, oferecendo uma lógistica rápida e segura,
                        com um atendimento diferenciado somados à disponbilização de produtos e marcas de extrema qualidade com preços competitivo
                        </p>
                 <img src="/images/header.jpg" alt="header" /> 
            <Link to="/products" className="see-more-btn">
                 <span>Ver agora</span>
                <FontAwesomeIcon icon={faChevronCircleRight} />
            </Link>
        </div>
            </div>
        </header>
    )
    
}