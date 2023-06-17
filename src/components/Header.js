import React from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
    return (
        <div className='nav'>
            <Link to='/'><h4>HOME</h4></Link>
            <Link to='/cart'><h4>CART</h4></Link>
        </div>
    )
}
