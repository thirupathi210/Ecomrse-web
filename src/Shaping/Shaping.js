import React,{useState} from 'react'
import Heder from './Heder';
import CartList from './CartList';
import ProductList from './ProductList'
function Shaping() {
  const[products,setProducts]=useState([
    {
        url: 'https://rukminim1.flixcart.com/image/300/300/l51d30w0/shoe/z/w/c/10-mrj1914-10-aadi-white-black-red-original-imagft9k9hydnfjp.jpeg?q=70',
        name: 'TRQ White Shoes',
        category: 'Shoes',
        seller: 'AMZ Seller Ghz',
        price: 1999
      },
      {
        url: 'https://5.imimg.com/data5/KC/PC/MY-38629861/dummy-chronograph-watch-500x500.jpg',
        name: 'LOREM Watch Black',
        category: 'Watches',
        seller: 'Watch Ltd Siyana',
        price: 2599
      },
      {
        url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQq39iB_cO6uhZ59vubrqVuYTJQH-4Qa0hU9g&usqp=CAU',
        name: 'AMZ Laptop 8GB RAM',
        category: 'Laptops',
        seller: 'Delhi Laptops',
        price: 50000
      },
      {
        url: 'https://img.freepik.com/free-vector/white-video-surveillance-security-cameras-isolated-realistic-icon-set-different-purposes-vector-illustration_1284-71329.jpg',
        name: 'Security Camera',
        category: 'CCTV',
        seller: 'Camron LTD',
        price: 4000
      },
      {
        url: 'https://5.imimg.com/data5/SELLER/Default/2022/4/MJ/AQ/GX/142801333/whatsapp-image-2022-04-26-at-4-30-09-pm-1--500x500.jpeg',
        name: 'Watch Pink',
        category: 'Watches',
        seller: 'Watch Ltd',
        price: 2000
      },
      {
        url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9xzgtOpMxdpfgBOg3OKsEqYRkNBbuprJj4w&usqp=CAU',
        name: 'Cup red Color',
        category: 'Cup',
        seller: 'ABS Ltd',
        price: 100
      },
])
const [cart, setCart] = useState([]);
const[showcart,setShowcart]=useState(false)

const addCart = (data) => {
    console.log('Adding to cart:', data);
    console.log('Current cart:', cart);

    if(!Array.isArray(cart)){
      console.log('is not a cart of array',cart)
      setCart([])
      return
    }
    setCart([...cart,{...data,quanity:1}])
    console.log('update cart',cart)
};
const handleshow=(value)=>{
  setShowcart(value)
}
  return (
    <div>
       <Heder count={cart.length} handleshow={handleshow}></Heder>
       {
        showcart ?
        <CartList cart={cart}/>:
        <ProductList products={products} addCart={addCart}/>
       }
      
    </div>
  )
}

export default Shaping