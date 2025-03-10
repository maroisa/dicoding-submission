import propTypes from "prop-types";
import { Link } from "react-router-dom";
import { showFormattedDate } from "../utils/index.js";

function NoteItem({note}){
    return <Link to={"/note/" + note.id} className="note-item" draggable="false">
        <h3>{note.title}</h3>
        <p className="note-item-date">{showFormattedDate(note.createdAt)}</p>
        <p className="note-item-">{note.body}</p>
    </Link>
}

NoteItem.propTypes = {
    note: propTypes.object
}

export default NoteItem;