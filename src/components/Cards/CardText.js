import React from "react";


function CardText(props){
    
        return( <span className="card-text">
<h2>{props.title}</h2><br />
<p>{props.content} <a href={props.link}>{props.link}</a></p>
        </span>);
        

}





export default CardText;