import { useContext,useEffect } from "react";
import { CartContext } from "../context/CartContext";
export default function SingleBook({ product }) {
    const {cart,setCart} = useContext(CartContext);
    const handleAddToCart = ()=>{
        setCart([...cart,product]);
    }
    const isInCart = cart.includes(product);
    // console.log(cart);
    useEffect(()=>{

    },[cart])
    const handleRemoveToCart = (product)=>{
        const updatedCart = cart.filter((item) => item.id !== product.id);
        setCart(updatedCart);
    }
    return (
        <div className="product">
            <div className="card">
                <img src={product.img} alt="booksimage" />
                <div className="product-description">
                    <p className="P-name">{product.name}</p>
                    <p className="B-desc"><i>{product.description}</i></p>
                </div>
                <div className="CartPrice">
                    {isInCart?<button onClick={()=>handleRemoveToCart(product)}>REMOVE TO CART</button>:
                    <button onClick={handleAddToCart}>ADD TO CART</button>}
                    <p className="B-price">Rs.{product.price}</p>
                </div>
            </div>
        </div>
    )
}
