import { getNote, archiveNote, unarchiveNote, deleteNote } from "../utils/local-data";
import { showFormattedDate } from "../utils/index.js";

import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

function Note(){
    const params = useParams();
    const navigate = useNavigate()
    const [note, setNote] = useState({})

    useEffect(() => {
        setNote(getNote(params.noteId))
    })

    function onArchive(){
        if (!note.archived) archiveNote(note.id);
        else unarchiveNote(note.id);

        setNote(getNote(params.noteId))
    }

    function onDelete(){
        deleteNote(note.id)
        navigate("/")
    }

    return <div>
        <h1 className="note-title">{note.title}</h1>
        <p className="note-date">{showFormattedDate(note.createdAt)}</p>
        <p className="note-body">{note.body}</p>
        
        <div className="bottom-container">
            <button 
                onClick={onArchive} 
                className={note.archived ? "active-btn" : "archive-btn"}>
                {note.archived ? "Aktifkan" : "Arsipkan"}
            </button>
            <button onClick={onDelete} className="trash-btn">Buang</button>
        </div>
    </div>;
}

export default Note;