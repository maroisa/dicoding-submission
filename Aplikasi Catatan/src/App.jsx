import { Routes, Route, Link } from "react-router-dom";

import { getAccessToken } from "./utils/network-data.js";

import Archive from "./pages/Archive.jsx";
import Home from "./pages/Home.jsx";
import Note from "./pages/Note.jsx";
import NewNote from "./pages/NewNote.jsx";
import NotFound from "./pages/NotFound.jsx";

function App(){
    return <>
        <header>
            <h1>
                <Link to="/">Aplikasi Catatan</Link>
            </h1>
            <Link to="/arsip">Arsip</Link>
        </header>
        <main>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/arsip" element={<Archive />} />
                <Route path="/note/new" element={<NewNote />} />
                <Route path="/note/:noteId" element={<Note />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </main>
    </>;
}

export default App;