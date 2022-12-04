import Item from "../item/item";
const ItemList = ({productList}) => {
    return (
        <div className="row align-items-start" >
            {productList.map(product => <Item key={product.id} producto={product}/>)}
        </div>
    );
}

export default ItemList;
