import DaftarKecilCatatan from './DaftarKecilCatatan.jsx'

import styles from '../styles/Daftar.module.css'
import { filterCatatan } from '../utils/index.js'

function DaftarCatatan({daftarCatatan, hapusCatatan, arsipCatatan}){
    const {daftarCatatanAktif, daftarCatatanArsip} = filterCatatan(daftarCatatan)

    return <div className={styles.container}>
        <DaftarKecilCatatan 
            title="Catatan Aktif" 
            daftarCatatan={daftarCatatanAktif} 
            hapusCatatan={hapusCatatan}
            arsipCatatan={arsipCatatan} />
        
        <DaftarKecilCatatan 
            title="Catatan Arsip" 
            daftarCatatan={daftarCatatanArsip} 
            hapusCatatan={hapusCatatan}
            arsipCatatan={arsipCatatan} />
    </div>
}


export default DaftarCatatan