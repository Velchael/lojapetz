import React from "react";
import { useState } from "react";
import "../App.css";
import{Link} from 'react-router-dom';

/*import Condicional from './Componetes/Condicional'*/
function Condicional(){
    const[email, setEmail] = useState()
    const [userEmail, setUserEmail] = useState()
    
    function enviarEmail(e){
    e.preventDefault()
    setUserEmail(email)
    }
    return(
    <nav className="corum">  
    <ul> 
    <li> 
    <div>
      <form>
       <div>
       <h2>Cadastre</h2>
         <div>Nome:<input type="text"placeholder="Digite nombre completo" /></div>
         <div>Email: <input type="email" placeholder="Digite o seu e-mail aqui" onChange={(e) =>
          setEmail(e.target.value)} /></div>
         <button className="botao" type="submit" onClick={enviarEmail}>Enviar dados do Usuario</button>
         {/* a div abaixo é exibida se userEmail possuir valor*/}
         { userEmail && (<div><p>O e-mail do usuário é: {userEmail}</p></div>) }
         
       </div>
      </form>
    </div>
    </li>
    <li>
                  <Link to="/Apresentação"style={{ textDecoration: 'none', color:"blak"
                    
                  }}>..[ RETORNAR A PÁGINA INICIAL ]..</Link>
    </li>
    </ul>
    </nav>
    )
   }
   export default Condicional