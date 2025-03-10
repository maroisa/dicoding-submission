import { useState, useEffect } from "react";

import { getArchivedNotes } from "../utils/local-data";
import NoteItem from "../components/NoteItem";

function Archive(){
    const [notes, setNotes] = useState([])

    useEffect(() => {
        setNotes(getArchivedNotes())
    }, [])

    if (notes.length <= 0){
        return <div className="empty">
            <h2>Tidak ada Arsip Catatan.</h2>
        </div>;
    }

    return <div className="notes-list">
        { notes.map(note => <NoteItem key={note.id} note={note} />) }
    </div>;
}

export default Archive;