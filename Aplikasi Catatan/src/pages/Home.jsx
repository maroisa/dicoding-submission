import { useEffect, useState } from "react";

import { getActiveNotes } from "../utils/local-data";
import NoteItem from "../components/NoteItem.jsx";
import AddNoteItem from "../components/AddNoteItem.jsx";
import { Link } from "react-router-dom";

function Home(){
    const [notes, setNotes] = useState([])

    useEffect(() => {
        setNotes(getActiveNotes())
    }, [])

    if (notes.length <= 0){
        return <div className="empty">
            <h2>Tidak ada Catatan.</h2>
            <h2 style={{marginTop: "1rem"}}>
                <Link to="/note/new">Tambah Catatan</Link>
            </h2>
        </div>;
    }

    return <div className="notes-list">
        { notes.map(note => <NoteItem key={note.id} note={note} />) }
        <AddNoteItem />
    </div>;
}

export default Home;