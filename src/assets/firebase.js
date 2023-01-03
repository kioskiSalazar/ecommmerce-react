import { initializeApp } from "firebase/app";
import { getFirestore, addDoc, getDocs, getDoc, updateDoc, deleteDoc, collection, doc} from 'firebase/firestore'


const firebaseConfig = {
  apiKey: process.env.API_KEY,
  authDomain: "mundo-consola-react.firebaseapp.com",
  projectId: "mundo-consola-react",
  storageBucket: "mundo-consola-react.appspot.com",
  messagingSenderId: "357400016923",
  appId: "1:357400016923:web:5fc9d25449c28a9d1ea0be"
};


const app = initializeApp(firebaseConfig);
 
const db = getFirestore()

const cargarBDD = async () =>{
    const promise = await fetch('./json/productos.json')
    const productos = await promise.json()
    productos.forEach(async (prod) => {
        await addDoc(collection(db, "productos"),{ 
        nombre: prod.nombre,
        marca: prod.marca,
        modelo: prod.modelo,
        idCategoria: prod.idCategoria,
        stock: prod.stock,
        precio: prod.precio,
        img: prod.img
        })           
    });

} 

const getProductos = async() =>{
     const productos = await getDocs(collection(db, "productos"))
     const items = productos.docs.map( prod => {
      return {...prod.data(), id: prod.id }
     })
     return items
}
const getProducto = async (id) => {
  const producto = await getDoc(doc(db, "productos", id))
  const item = {...producto.data(), id: producto.id}
  return item

}

const updateProducto = async (id, info) =>{
  const estado = await updateDoc(doc(db, "productos", id), info)
return estado
} 

const deleteProducto = async (id) =>{
const estado = await deleteDoc(doc(db, "productos", id))
return estado
}

const createOrdenCompra = async (cliente, preTotal, fecha) =>{
  const ordenCompra = await addDoc (collection(db, "ordenCompra"),{
    nombreCompleto: cliente.nombre,
    email: cliente.email,
    dni: cliente.dni,
    direccion: cliente.direccion,
    celular: cliente.celular,
    fecha:fecha,
    precioTotal: preTotal
  })
  return ordenCompra
}

const getOrdenCompra = async (id) => {
  const ordenCompra = await getDoc(doc(db, "ordenCompra", id))
  const item = {...ordenCompra.data(), id: ordenCompra.id}
  return item
}

export {cargarBDD, getProductos, getProducto, updateProducto, deleteProducto, createOrdenCompra, getOrdenCompra}