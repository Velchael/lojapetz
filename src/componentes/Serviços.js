import React from "react";
import './Cardanimais.css';
import{Link} from 'react-router-dom';
//criar a classe com o nome Headers
export default function Serviços(){
    
    return(

        <div className="presenta_css">
        <h3>Serviços</h3>
        <nav>
            <ul>
                <li>
                  <p>Banho rosa</p>
                  <p>Corte de cabelo</p>
                  <p>Bacunas</p>
                  <p>Hospitalar</p>
                  <p>Hospedaje</p>
                </li>
                <li>
                  <Link to="/Apresentação"style={{ textDecoration: 'none',color:'white'}}>..[ RETORNAR A PÁGINA INICIAL ]..</Link>
                </li>
            </ul>
        </nav>

       </div>
        
    ) 
}