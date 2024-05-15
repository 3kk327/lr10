import React from "react"

function ToDo(props){
    return(
        
        <div class="block">
            <img class="img-h3" src={props.img}/>
            <h3>{props.title}</h3>
            <p>{props.text}</p>
        </div>
       
    )
}

export default ToDo;