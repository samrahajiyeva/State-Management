import React, { useEffect, useState } from 'react';
import { useDispatch } from "react-redux";
import './Home.scss';
import { FaFacebookF , FaPinterestP } from 'react-icons/fa';
import { BsTwitter } from 'react-icons/bs';
import { ImGooglePlus } from 'react-icons/im';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { add } from '../../redux/ItemSlice/ItemSlice';



function Home() {
  const dispatch = useDispatch();
  const [data, setData] = useState([])
  useEffect(() => {
    axios.get("https://fakestoreapi.com/products").then(res => {
      setData(res.data)
    })
  }, [data])

  const handleAdd = (item) => {
    dispatch(add(item));
  };

  return (
    <>
    <div className="section1">
      <div className="section1__icons">
        <FaFacebookF className='icon'/>
        <BsTwitter className='icon'/>
        <ImGooglePlus className='icon'/>
        <FaPinterestP className='icon'/>
      </div>
      <div className="section1__title">
          <span>SPECIAL PRICE</span>
          <h1>Nylon Blend Jacket</h1>
          <div className='pars'><p>Casual line</p>
          <p>Nylon mix fabric</p>
          <p>Waterproof fabric</p></div>
          <span className='discover'>DISCOVER MORE</span>
      </div>
    </div>

    {/* products */}
    <div className="products">
      <div className="products__title">
      <h3 className='firsth'>Best Seller</h3>
        <h3>New Arrials</h3>
        <h3>Most Poppular</h3>
      </div>
      <div className="products__item">
        {
          data.map((item , index) => (
            <div className="item" key={index}>
          <Link title='Go to Detail Page' to={`/${item.id}`} style={{textDecoration: "none"}}>
          <div className="item__img">
          <img src={item.image} alt="img" />
           </div>
          </Link>
          <div className="item__text">
         <h6>{item.title}</h6>
         <span>${item.price}</span>
         <button onClick={() => handleAdd(item)}>Add to Cart</button>
         </div>
          </div>
          ))
        }
      </div>
    </div>
    </>
  )
}

export default Home

/* <div className="item">
<div className="item__img">
<img src="https://supro.arrowtheme.com/pub/media/catalog/product/cache/86617938839cd98433f93ed495649fc4/p/r/prd_02_1_2_2.jpg" alt="img" />
</div>
<div className="item__text">
<h5>Leather Shop Bags</h5>
<span>$44.00</span>
</div>
</div>
*/




          