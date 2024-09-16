import { useState } from 'react'
import styles from '../styles/Tambah.module.css'

function TambahCatatan({tambahCatatan}){
    const [catatanTitle, setCatatanTitle] = useState('')
    const [catatanBody, setCatatanBody] = useState('')

    function handleChange(event){
        const {name, value} = event.target

        if (name == 'title') {
            if (value.length > 50) return
            setCatatanTitle(value)
        }
        if (name == 'body') setCatatanBody(value)
    }

    function submitCatatan(){
        if (catatanTitle.length == 0 || catatanBody.length == 0) return

        tambahCatatan(catatanTitle, catatanBody)
        setCatatanTitle('')
        setCatatanBody('')
    }

    return <div className={styles.container}>
        <div className={styles.center}>
            <h2>Tambah Catatan</h2>
            <div className={styles.inputGroup}>
                <input
                    value={catatanTitle}
                    onChange={handleChange}
                    placeholder="Judul catatan..." 
                    className={`${styles.input} ${styles.inputOutline} ${styles.inputItem}`} 
                    name="title"
                    type="text" />
                <span className={`${styles.input} ${styles.inputLabel}`}>
                    {50 - catatanTitle.length}
                </span>
            </div>
            
            <textarea 
                value={catatanBody}
                onChange={handleChange}
                placeholder="Isi catatan..."
                name="body"
                className={`${styles.input} ${styles.inputOutline}`} />
            
            <input
                onClick={submitCatatan}
                className={styles.input} 
                value="Tambah" 
                type="button" />
        </div>
    </div>
}

export default TambahCatatan