import firebase from 'firebase/app'
import 'firebase/firestore'
import {getFirestore} from '../firebase'

export const newOrder = (buyer, comprobante, carrito, setCarrito, calcPrice) => {

    const db = getFirestore()//Conect base de datos
    const orderColl = db.collection('orders')//Creando collection 'orders'

//---------------------------------------//Creando orden con comprador y productos
    let order = {}
    order.buyer = buyer
    order.total = calcPrice()
    order.date = firebase.firestore.Timestamp.fromDate(new Date())
    order.items = carrito.map(e=> {
        return  {id:e.item.id, title:e.item.title, quantity:e.quantity, price:e.item.price*e.quantity}
    })  
//---------------------------------------//Agregando orden a la collection 'order'
    orderColl.add(order)
    
    .then(({id})=>{
        comprobante({id})
        console.log(`Compra exitosa ID: ${id}`)
    })
    .catch(err=>{
        window.alert('Ha ocurido un error, por favor intente nuevamente')
        console.log(err)
    })

//----------------------------------------//Seleccionando lote de items y modificandolo

    const itemToUpdate = db.collection('items').where(
        firebase.firestore.FieldPath.documentId(), 'in' , carrito.map(i =>i.item.id)
    )

    const batch = db.batch()

    itemToUpdate.get()
    .then(collection=>{
        collection.docs.forEach(docSnapshot => {
            batch.update(docSnapshot.ref, {
                stock: docSnapshot.data().stock - carrito.find(item => item.item.id === docSnapshot.id).quantity
            })
        })
        batch.commit()
        .then(() => {
            console.log('Lote de items modificado')
        })
        setCarrito([])//Vaciando carrito
    })
}