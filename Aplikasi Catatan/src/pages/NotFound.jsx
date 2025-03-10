import { Link } from "react-router-dom";

function NotFound(){
    return <div style={{paddingTop: "2rem"}}>
        <h1>Halaman yang anda tuju tidak tersedia. <Link to="/">Silahkan kembali</Link></h1>
    </div>
}

export default NotFound;