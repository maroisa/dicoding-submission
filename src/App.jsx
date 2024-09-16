import { useState } from 'react'

import TambahCatatan from './components/TambahCatatan.jsx'
import DaftarCatatan from './components/DaftarCatatan.jsx'

import { getInitialData } from './utils/index.js'

import styles from './styles/App.module.css'

export default function App(){
    const [daftarCatatan, setDaftarCatatan] = useState(getInitialData())

    function tambahCatatan(title, body){
        const sekarang = new Date()
        const newCatatan = {
            id: +sekarang,
            title,
            body,
            createdAt: sekarang.toISOString(),
            archived: false
        }

        setDaftarCatatan([
            ...daftarCatatan,
            newCatatan
        ])
    }

    return <div className={styles.container}>
        <h1>Daftar Catatan</h1>
        <TambahCatatan tambahCatatan={tambahCatatan} />
        <DaftarCatatan daftarCatatan={daftarCatatan} />
    </div>
}