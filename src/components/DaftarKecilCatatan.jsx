import ItemCatatan from './ItemCatatan.jsx'

import styles from '../styles/Daftar.module.css'

function DaftarKecilCatatan({title, daftarCatatan, hapusCatatan, arsipCatatan}){

    return <div className={styles.container}>
        <h2>{title}</h2>
        {daftarCatatan.length == 0 
        ? <p style={{fontWeight: 200}}>Tidak ada Catatan</p> 
        : null}
        
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