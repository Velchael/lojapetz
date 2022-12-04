import React from "react";
import './Cardanimais.css';
import{Link} from 'react-router-dom';
import Cardanimal from "./Cardanimal";
//criar a classe com o nome Headers
export default function Meupedido(){
    
    return(

        <div className="presenta_css">
      
        <nav>
            <ul>
                <li>
                  <h2>Produtos para o cabelo dos Gatos</h2>
                  <div>
                 <Cardanimal
                  image="https://cobasi.vteximg.com.br/arquivos/ids/291506-170-170/Areia-Higienica-Granulada-Easy-Clean-Fresh-Linen.jpg?v=637097634314330000" class="_lazy _lazy-1" height="170" width="170" src="https://cobasi.vteximg.com.br/arquivos/ids/291506-170-170/Areia-Higienica-Granulada-Easy-Clean-Fresh-Linen.jpg?v=637097634314330000"
                  name="Easy Clean"
                  phone="Oferta 1 Reais$"
                  
                 />
                <Cardanimal
                  image="https://cobasi.vteximg.com.br/arquivos/ids/291508-170-170/Areia-Higienica-Granulada-Easy-Clean-s.jpg?v=637473757863130000" class="_lazy _lazy-0" height="170" width="170"
                
                  name="Easy Clean Premier"
                  phone="Oferta 2 Reais$"

                />
                <Cardanimal
                  image="https://cobasi.vteximg.com.br/arquivos/ids/291514-170-170/Areia-Higienica-Granulada-Easy-Clean-Low-Track-Formula.jpg?v=637396751507730000" class="_lazy _lazy-3" height="170" width="170" src="https://cobasi.vteximg.com.br/arquivos/ids/291514-170-170/Areia-Higienica-Granulada-Easy-Clean-Low-Track-Formula.jpg?v=637396751507730000"

                  name="Easy clean Ultra"
                  phone="Oferta 5 Reais$"

                 />
                 </div> 

                 </li>
                <li>
                  <h2>Alimentos para Cachorros</h2>

                  <div>
                 <Cardanimal
                  image="https://cobasi.vteximg.com.br/arquivos/ids/939251-180-180/racao-golden-special-para-caes-adultos-frango-e-carne-3310549-15kg-Lado.jpg?v=637855427288230000" alt="Ração Golden Special para Cães Adultos Frango e Carne" width="180" height="180" loading="lazy"
                  name="GoldenN"
                  phone="Oferta 2 Reais$"
                  
                 />
                <Cardanimal

                  image="https://cobasi.vteximg.com.br/arquivos/ids/1015972-180-180/racao-origens-class-caes-adultos-carne-e-frango-principal.jpg?v=638012862916900000" alt="Ração Origens Class Cães Adultos Carne e Frango" width="180" height="180" loading="lazy"         
                
                  name="Class Premier"
                  phone="Oferta 4 Reais$"

                />
                <Cardanimal

                  image="https://cobasi.vteximg.com.br/arquivos/ids/844375-180-180" alt="Ração Gran Plus Choice Frango e Carne Cães Adultos" width="180" height="180" loading="lazy"

                  name="GranPlus"
                  phone="Oferta 1 Reais$"

                 />
                 </div> 

                
                </li>
                <li>
                  <Link to="/Apresentação"style={{ textDecoration: 'none',color:'white'}}>..[ RETORNAR A PÁGINA INICIAL ]..</Link>
                </li>
            </ul>
        </nav>

       </div>
        
    ) 
}