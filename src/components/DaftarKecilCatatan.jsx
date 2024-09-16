import ItemCatatan from './ItemCatatan.jsx'

import styles from '../styles/Daftar.module.css'

function DaftarKecilCatatan({daftarCatatan, title}){
    if (daftarCatatan.length == 0) return null

    return <div className={styles.container}>
        <h2>{title}</h2>
        <div className={styles.grid}>
            {
                daftarCatatan.map(catatan => <ItemCatatan key={catatan.id} catatan={catatan} />)
            }
        </div>
    </div>
}

export default DaftarKecilCatatan