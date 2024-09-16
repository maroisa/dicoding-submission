import styles from '../styles/Item.module.css'

function ItemCatatan({catatan}){

    return <div className={styles.container}>
        <h3>{catatan.title}</h3>
        <p>{catatan.body}</p>
        <div className={styles.btnContainer}>
            <button className={`${styles.btn} ${styles.btnKiri}`}>Hapus</button>
            <button className={`
                ${styles.btn} 
                ${styles.btnKanan}
                ${catatan.archived ? styles.btnArsip : ''}
            `}>
                { catatan.archived ? 'Pulihkan' : 'Arsipkan' }
            </button>
        </div>
    </div>
}

export default ItemCatatan