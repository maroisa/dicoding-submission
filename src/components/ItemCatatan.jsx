import styles from '../styles/Item.module.css'

function ItemCatatan({catatan, hapusCatatan, arsipCatatan}){

    return <div className={styles.container}>
        <h3>{catatan.title}</h3>
        <p>{catatan.body}</p>
        <div className={styles.btnContainer}>
            <button 
                onClick={() => hapusCatatan(catatan.id)} 
                className={`${styles.btn} ${styles.btnKiri}`} >
                Hapus
            </button>
            
            <button 
                onClick={() => arsipCatatan(catatan.id)}
                className={`
                    ${styles.btn} 
                    ${styles.btnKanan}
                    ${catatan.archived ? styles.btnArsip : ''} `}>
                { catatan.archived ? 'Pulihkan' : 'Arsipkan' }
            </button>
        </div>
    </div>
}

export default ItemCatatan