import DaftarKecilCatatan from './DaftarKecilCatatan.jsx'

import styles from '../styles/Daftar.module.css'
import { filterCatatan } from '../utils/index.js'

function DaftarCatatan({daftarCatatan}){
    const {daftarCatatanAktif, daftarCatatanArsip} = filterCatatan(daftarCatatan)

    return <div className={styles.container}>
        <DaftarKecilCatatan title="Catatan Aktif" daftarCatatan={daftarCatatanAktif} />
        <DaftarKecilCatatan title="Catatan Arsip" daftarCatatan={daftarCatatanArsip} />
    </div>
}


export default DaftarCatatan