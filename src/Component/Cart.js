import { height } from '@mui/system'
import React from 'react'
import { useCart ,CartProvider} from 'react-use-cart'
import {useNavigate} from 'react-router-dom'

const Cart = () => { 
//     let item = JSON.parse(localStorage.getItem('cart'))
//     let {addItem} = useCart()
//     let newitem = JSON.parse(localStorage.getItem('react-use-cart'))
//     let data = newitem.items
//      console.log("[]",data)
//     // let insertdata = item.map((cartdata,index)=>{return cartdata[]})
//     // console.log(":",insertdata)
//     data.push(item)
//     // localStorage.setItem("cart", JSON.stringify(details));
//    // console.log(data)
    const {
        isEmpty,
        totalUniqueItems,
        totalItems,
        cartTotal,
        updateItemQuantity,
        removeItem,
        emptyCart,
        items,
    } = useCart()
    // console.log("..",items)
    if(isEmpty) return <h2 className='text-center'>Your Cart is Empty</h2>
  return (
    <section className='py-4 container'>
            <div className='row justify-content-center'>
                <div className='col-12'>
                    <h5>Cart ({totalUniqueItems}) total Items :({totalItems})</h5>
                    <table className='table table-light table-hover m-0'>
                    <tbody>
                    {
                        items.map((item,index)=>{
                            return(
                            <tr key={index}>
                                <td>{item.id}</td>
                                <td><img src={item.image} style={{height:'6rem'}}></img></td>
                                <td>{item.name}</td>
                                <td>{item.category}</td>
                                <td>{item.price}</td>
                                <td>Quantity ({item.quantity})</td>
                                <td><button 
                                    className='btn btn-info ms-2'
                                    onClick={()=>updateItemQuantity(item.id,item.quantity-1)}
                                    >-</button>
                                <button 
                                    className='btn btn-info ms-2'
                                    onClick={()=>updateItemQuantity(item.id,item.quantity+1)}
                                >+</button>
                                <button 
                                className='btn btn-danger ms-2'
                                onClick={()=>removeItem(item.id)}
                                >Remove Items</button>
                                </td>
                                <td>{item.description}</td>
                            </tr>)
                        })
                    }
                    </tbody>
                    </table>
                </div>
            </div>
    </section>
  )
}

export default Cart