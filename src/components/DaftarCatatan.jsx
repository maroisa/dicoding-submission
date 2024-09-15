import ItemCatatan from './ItemCatatan.jsx'

function DaftarCatatan({daftarCatatan}){
    return <div className="daftar-container">
        {
            daftarCatatan.map(catatan => 
                <ItemCatatan key={catatan.id} catatan={catatan} />
            )
        }
    </div>
}

export default DaftarCatatan