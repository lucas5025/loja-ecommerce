import { faMobileScreenButton } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

export default function Contact (){
    return(
        <div className="contact">

        <h3>Central de Atendimento ao Cliente</h3>

        <div className="telephone">
      <FontAwesomeIcon icon={faMobileScreenButton} />
      <a href="https://wa.me/5511977989385" target="black">
         (11) 97798-9385
        </a>
        
     </div>
        
       <h3>Horário de Atendimento</h3>  
       <p>Segunda à Sexta-feira, das 9:00h às 17:00h e Sábado das 8:00h às 14:00h</p>

      <h3>E-mail</h3> 
      <p>Entre em contato conosco através do e-mail</p>
      <a href="mailto:Lucasdebarros07@gmail.com">
            Lucasdebarros07@gmail.com
           </a>
        </div>
   

    );
}
