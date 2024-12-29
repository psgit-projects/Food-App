import React, { useContext } from 'react'
import './cart.css'
import { StoreContext } from './../../contaxt/StoreContext';
import { useNavigate } from 'react-router-dom';
const Cart = () => {
    
  const {cartItem, food_list, remove, getTotalCartAmount} = useContext(StoreContext)

  const navigate = useNavigate()

  return (
   <div className="cart">
    <div className="cart-items">
      <div className="cart-items-title">
        <p>Items</p>
        <p>Title</p>
        <p>Price</p>
        <p>Quantity</p>
        <p>Total</p>
        <p>Remove</p>

      </div>
      <br />
      <hr />
 {
   food_list.map((item,index)=>{
     if(cartItem[item._id]>0)
     {
      return (
       <>
     <div className='cart-items-title cart-items-item' key={item._id}>
            <img src={item.image} alt={item.name} />
            <p>{item.name}</p>
            <p>${item.price}</p>
            <p>{cartItem[item._id]}</p>
            <p>${item.price * cartItem[item._id]}</p>
            <p onClick={()=>remove(item._id)} className='cross'>x</p>
    </div>
<hr />
</>
    )
     }
   })
 }
    </div>
    <div className='c-b'>
        <div className='c-t'>
        <h2>Cart Totals</h2>
            <div className="c-t-d">
              <p>Subtotal</p>
              <p>{getTotalCartAmount()}</p>
            </div>
          <hr />
         <div className="c-t-d">
<p>Delivery Fee</p>
<p>${getTotalCartAmount()===0?0:50}</p>
   </div>
   <hr />
   <div className="c-t-d">
  <b>Total</b><b>${getTotalCartAmount()===0?0:getTotalCartAmount()+50}</b>
   </div>
   <button onClick={()=>navigate('/order')}>Proceed to check</button>
</div>
</div>

</div>

  )
}

export default Cart