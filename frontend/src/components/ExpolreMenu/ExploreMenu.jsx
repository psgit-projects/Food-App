import React from 'react'
import './Explore.css'
import { menu_list } from '../../assets/assets'
const ExploreMenu = ({category,setCategory}) => {
  return (
    <div className='ex-m' id='ex-m'>
        <h1>Explore Our Menu....</h1>
        <p className='ex-m-text'>Choose from the Menu List. Choose from a menu fracturs a delectable array of foods...!</p>
<div className='ex-m-list'>
 {menu_list.map((item,index)=>{
    return(
        <div onClick={()=>setCategory(prev=>prev===item.menu_menu?"All":item.menu_name)} key={index} className='ex-m-l-item'>
           <img className={category===item.menu_name?"active":""} src={item.menu_image} alt="" />
        <p>{item.menu_name}</p>
        </div>
    )
 })}
</div>
<hr />
    </div>
  )
}

export default ExploreMenu