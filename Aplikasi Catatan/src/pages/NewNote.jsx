import { useNavigate } from "react-router-dom";

import { addNote } from "../utils/local-data";
import { useState } from "react";

function NewNote(){
    const [title, setTitle] = useState("")
    const [body, setBody] = useState("");

    const navigate = useNavigate()
    function onSave(){
        addNote({title, body})
        navigate("/")
    }

    function onInput(event){
        if (event.target.id == "title"){
            setTitle(event.target.innerText)
        }
        
        else if (event.target.id == "body"){
            setBody(event.target.innerText)
        }
    }

    return <div>
        <h1
            id="title"
            onInput={onInput} 
            className="note-title border" 
            contentEditable="true"
            suppressContentEditableWarning="false"
            style={{whiteSpace: "none"}}>
            </h1>
        <p 
            id="body"
            onInput={onInput} 
            className="note-body border" 
            contentEditable="true"
            suppressContentEditableWarning="false"
            style={{whiteSpace: "nowrap"}}>
        </p>
        
        <div className="bottom-container">
            <button onClick={onSave}>Simpan</button>
        </div>
    </div>;
}

export default NewNote;