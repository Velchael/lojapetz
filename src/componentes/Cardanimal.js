import React from "react";
import './Cardanimais.css';

/*import Article from "/Article";*/
function Cardanimal(props){
    return(
        
         <div> 
          <img src={props.image} alt=""/> 
          <h3>{props.name}</h3>
          <p>{props.phone}</p>
          <p>{props.email}</p> 
        
         </div>
    );
}
 
export default Cardanimal;