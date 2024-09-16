import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
export default function ExclusiveSection() {
    return (
        <div className="exclusive-section">
            <div className="page-inner-content">
           <div className="content">
            <div className="left-side">
                <h2>Você ta pensando em montar seu PC Gamer dos sonhos ?</h2>
                <p>
                     Com a DevStore você consegue e com a melhores promoção
                </p>
                <Link to="/products" className="see-more-btn">
                 <span>Ver agora</span>
                <FontAwesomeIcon icon={faChevronRight} />
            </Link>
            </div>
            <div className="rigth-side">
                <img src="/images/pc-gamer-plataforma-intel.jpg" alt="Pc Gamer" />
                </div>
        </div>
        </div>
        </div>
    )
}