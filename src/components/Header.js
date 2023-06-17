import React,{useContext} from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../context/CartContext';

export default function Header() {
    const{cart} = useContext(CartContext);
    return (
        <div className='nav'>
            <Link to='/'><h4>HOME</h4></Link>
            <Link to='/cart'><h4>CART <span>{cart.length}</span></h4></Link>
        </div>
    )
}
