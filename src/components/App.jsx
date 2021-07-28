import React from "react";
import Entry from "./Entry";
import emojipedia from "../emojipedia.js";

function Emojipedia(props){
    return(
        
        <Entry key={props.id}
               emoji={props.emoji}
               name={props.name}
               meaning={props.meaning}/>);
               }


function App(){
    return (<div><h1><span>EmojiPedia</span></h1>
    <dl className="dictionary">

    {emojipedia.map(Emojipedia)}

    </dl>
    </div>);
    
}

export default App;