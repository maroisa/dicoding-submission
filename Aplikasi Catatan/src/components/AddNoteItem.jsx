import { Link } from "react-router-dom";

function AddNoteItem(){
    return <Link to="/note/new" className="note-item new" draggable="false">
        + Tambah Catatan
    </Link>;
}

export default AddNoteItem;