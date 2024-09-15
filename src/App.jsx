import { useState } from 'react'

import TambahCatatan from './components/TambahCatatan.jsx'
import DaftarCatatan from './components/DaftarCatatan.jsx'

import { getInitialData, showFormattedDate } from './utils/index.js'


export default function App(){
    const [daftarCatatan, setDaftarCatatan] = useState(getInitialData())

    return <div className="app-container">
        <div className="center">
            <h1>Daftar Catatan</h1>
            <TambahCatatan />
            <DaftarCatatan daftarCatatan={daftarCatatan} />
        </div>
    </div>
}