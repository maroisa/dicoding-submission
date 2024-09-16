import ItemCatatan from './ItemCatatan.jsx'

import styles from '../styles/Daftar.module.css'

function DaftarKecilCatatan({title, daftarCatatan, hapusCatatan, arsipCatatan}){
    if (daftarCatatan.length == 0) return null

    return <div className={styles.container}>
        <h2>{title}</h2>
        <div className={styles.grid}>
            {
                daftarCatatan.map(catatan => {
                    return <ItemCatatan 
                        key={catatan.id} 
                        catatan={catatan} 
                        hapusCatatan={hapusCatatan}
                        arsipCatatan={arsipCatatan} />
                })
            }
        </div>
    </div>
}

export default DaftarKecilCatatan