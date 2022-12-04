import React from "react";
import './Cardanimais.css';
import{Link} from 'react-router-dom';
import Cardanimal from "./Cardanimal";
//criar a classe com o nome Headers
export default function Cep(){
    
    return(

  <div className="presenta_css">
        
        <nav>
            <ul>
                <li>
                  <div>
                  <Cardanimal
                   image="https://www.tiendanimal.es/on/demandware.static/-/Library-Sites-TiendanimalSharedLibrary/default/dw106f52f6/images/homepage/ta-home/dog.jpg"
                   name="Alimentos para Cachorro"
                  
                   phone="Oferta 20 Reais$ a Dúzia "
                   email="Em promoçoes, Leva já"
                   />
                  </div>
                       
                </li>
                <li>
                  <Link to="/Apresentação"style={{ textDecoration: 'none', color:"white"
                    
                  }}>..[ RETORNAR A PÁGINA INICIAL ]..</Link>
                </li>
            </ul>
        </nav>

       </div>
        
    ) 
}
/*export default Cep;*/
