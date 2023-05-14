import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import './Detail.scss'

function Detail() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    axios.get(`https://fakestoreapi.com/products/${id}`)
      .then((res) => setProduct(res.data))
      .catch((err) => console.log(err));
  }, [id]);

  if (!product) {
    return <div>Loading...</div>;
  }


  return (
    <>
    <div className="detail">
      <div className="detail__sec">
      <div className="detail__sec__img">
        <img src={product.image} alt="" />
      </div>
      <div className="detail__sec__text">
        <div>
        <h2 className="title">{product.title}</h2>
        <span className='category'>Category: {product.category}</span>
        </div>
        <span className='price'>${product.price} </span>
        <p className='description'>{product.description}</p>
      </div>
      </div>
    </div>
    </>
  )
}

export default Detail