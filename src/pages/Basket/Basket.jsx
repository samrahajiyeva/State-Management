import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import './Basket.scss'

function Basket() {
  const dispatch = useDispatch()
  const item = useSelector(state=>state.item)
  console.log(item);
  

  return (
    <div className="products__item" id='productList'>
    {
      item.map((item , index) => (
        <div className="item" key={index}>
      <div className="item__img">
      <img src={item.image} alt="img" />
       </div>
      <div className="item__text">
     <h6>{item.title}</h6>
     <span>${item.price}</span>
     </div>
      </div>
      ))
    }
  </div>
  )
}

export default Basket



