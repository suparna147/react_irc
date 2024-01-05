import React, { useContext,useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import logo from '../Assests/logo.jpg';
import cart from '../Assests/cart_icon.png';
import { ShopContext } from '../../Context/ShopContext';

const Navbar = () =>
{
    const[menu,setMenu]=useState("shop");
    const {getTotalCartItems} = useContext(ShopContext);
    return(
        <div className='navbar'>
         <div className="nav-logo">
            <img src={logo} alt="" height={200} width={200} />
            <p>SPORTEX</p>
         </div>
         <ul className="nav-menu">
          <li onClick={()=>{setMenu("shop")}}><Link style={{textDecoration: 'none'}} to='/'>Sports</Link>{menu==="shop"?<hr/>:<></>}</li>
          <li onClick={()=>{setMenu("mens")}}><Link style={{textDecoration: 'none'}} to='/mens'>offers</Link>{menu==="mens"?<hr/>:<></>}</li>
          <li onClick={()=>{setMenu("womens")}}><Link style={{textDecoration: 'none'}} to='/womens'>suits</Link>{menu==="womens"?<hr/>:<></>}</li>
          <li onClick={()=>{setMenu("kids")}}><Link style={{textDecoration: 'none'}} to='/kids'>new collections</Link>{menu==="kids"?<hr/>:<></>}</li>
         </ul>
         <div className="nav-login-cart">
            <Link to='/Login'><button>Login</button></Link>
            <Link to='/cart'><img src={cart} alt=""/></Link>
            <div className="nav-cart-count">{getTotalCartItems()}</div>
         </div>
        </div>
    )
}
export default Navbar;