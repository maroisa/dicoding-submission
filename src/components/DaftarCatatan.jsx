import DaftarKecilCatatan from './DaftarKecilCatatan.jsx'

import styles from '../styles/Daftar.module.css'

import { filterCatatan } from '../utils/index.js'
import { useState } from 'react'

function DaftarCatatan({daftarCatatan, hapusCatatan, arsipCatatan}){
    const [judulDicari, setJudulDicari] = useState('')

    const {daftarCatatanAktif, daftarCatatanArsip} = filterCatatan(daftarCatatan, judulDicari)
    

    return <div className={styles.container}>
        <input 
            value={judulDicari}
            onChange={(event) => setJudulDicari(event.target.value)}
            type="text" 
            placeholder="Cari" 
            className={styles.input} />
        
        <DaftarKecilCatatan 
            title="Catatan Aktif" 
            daftarCatatan={daftarCatatanAktif} 
            hapusCatatan={hapusCatatan}
            arsipCatatan={arsipCatatan} />
        
        <DaftarKecilCatatan 
            title="Arsip" 
            daftarCatatan={daftarCatatanArsip} 
            hapusCatatan={hapusCatatan}
            arsipCatatan={arsipCatatan} />
    </div>
}


export default DaftarCatatan