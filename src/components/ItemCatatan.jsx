function ItemCatatan({catatan}){
    return <div className="item-container">
        <h3>{catatan.title}</h3>
        <p>{catatan.body}</p>
        <div className="item-btn-container">
            <button className="item-btn item-btn-kiri">Hapus</button>
            <button className="item-btn item-btn-kanan">Arsipkan</button>
        </div>
    </div>
}

export default ItemCatatan