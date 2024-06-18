import React,{useState,useEffect} from 'react'

function CartList({cart}) {
  const[carts,setCarts]=useState([]);

 useEffect(()=>{
setCarts(cart)
  },[cart])

const handleIncrement=(index)=>{
const newcart=[...carts]
newcart[index].quanity +=1
setCarts(newcart)
  }

  const handleDcrement=(index)=>{
    const newcart=[...carts];
    if(newcart[index].quanity>0){
    newcart[index].quanity -=1
    setCarts(newcart)
    }
  }
  const getTotalPrice = () => {
    return carts.reduce((total, item) => total + (item.price * item.quanity), 0);
  };
  return (
    <div>
        {cart.map((cartitem,index)=>{  
            return (
                <div>
                   <img src={cartitem.url} width={40}/>
                   <span>{cartitem.name}</span>
                   <button onClick={()=>handleDcrement(index)}>-</button>
                   <span>{cartitem.quanity}</span>
                   <button onClick={()=>handleIncrement(index)}>+</button>
                   <span>{cartitem.price*cartitem.quanity}</span>
                </div>
            )
        })}
        <p>Total RS:<span>{getTotalPrice()}</span> /-</p>
    </div>
  )
}

export default CartList