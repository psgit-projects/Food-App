import React, { useContext } from 'react'
import './Fooditem.css'
import { assets } from '../../assets/assets'
import { StoreContext } from '../../contaxt/StoreContext'
const Fooditem = ({id, name, price, description, image}) => {
 
    const {cartItem, addToCart, remove, url} = useContext(StoreContext)
  
    return (
    <div className='food-item'>
        <div className="food-item-img-container">
            <img className='f-i-img' src={image} alt="" />
        {   
            !cartItem[id]
            ? <img className='add' onClick={()=>addToCart(id)} src={assets.add_icon_white} alt="" />
            : <div className='f-i-c'>
                 <img onClick={()=>remove(id)}   src={assets.remove_icon_red} alt="" />
                 <p>{cartItem[id]}</p>
                 <img onClick={()=>addToCart(id)} src={assets.add_icon_green} alt="" />
            </div>
        }
   </div>
        <div className='f-i-i'>
<div className="f-i-n-r">
    <p>{name}</p>
    <img src={assets.rating_starts} alt="{image}" />
</div>
<p className="f-i-d">{description}</p>
<p className="f-i-p">${price}</p>
        </div>
    </div>
  )
}

export default Fooditem