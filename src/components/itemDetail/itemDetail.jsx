import ItemCount from "../itemCount/itemCount";

const ItemDetail = ({item}) => {
    return (
        <div className="row g-0">
            <div className="col-md-4">
<img src={`../img/${item.img}`} alt="" className="img-fluid rounded-start" />
            </div>
          <div className="col-md-8">
            <div className="card-body">
<h5 className="card-title">{item.nombre}</h5>
            <p className="card-text">Modelo:{item.modelo}</p>
            <p className="card-text">Marca:{item.marca}</p>
            <p className="card-text">Precio:{item.precio}</p>
            <p className="card-text">Stock:{item.stock}</p>
            <ItemCount stock={item.stock}/>
            <button className="btn btn-secondary">finalizar compra</button>
            </div>  
            </div>
        </div>
    );
}

export default ItemDetail;
