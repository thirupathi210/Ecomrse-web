import React,{useState} from 'react'

function ProductList({products,addCart}) {
  
  return (
    <div className='flex1'>
      {products.map((productitem,index)=> 
      (
        <div key={index} style={{width:'50%'}} className='product-items'>
          <img src={productitem.url} width='100%'/>
          <p>{productitem.name}| {productitem.category}</p>
          <p>{productitem.seller}</p>
          <h2>RS-{productitem.price}/-</h2>
          <button onClick={()=>addCart(productitem)}>Add Cart</button>
        </div>
))}
    </div>
  )
}

export default ProductList