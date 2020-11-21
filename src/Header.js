import React from 'react' 
import './Header.css'
import {Link} from 'react-router-dom'
import SearchIcon from "@material-ui/icons/Search"
import logo from './logo.jpg' 
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket"
import {useStateValue} from './StateProvider'
import { auth } from './Firebase'

function Header() {

    const [{basket , user} , dispatch] = useStateValue();         // we get both state and dispatch because we are providing the whole reducer in StateProvider
    
    console.log(basket)

    //For signing out
    const login = ()=>{
        if(user){
            auth.signOut();
        }
    }

    return (
        <nav className = "header">
            <Link to = "/ login">
            <img className = "header__logo" src = {logo} />
            </Link>
        <div className = "header_search">
            <input type = 'text' className = 'search' />
            <SearchIcon className = 'searchIcon'/>
            </div>


            <div className = 'header_nav'>
            <Link  to = {!user && '/login'}  className = "header_link">
            
            <div onClick = {login} className = "header_option">
            <span className = "header_optionLine1">Hello {user?.email}</span>
            <span className = "header_optionLine2">{!user ? 'SignIn': 'SignOut'}</span>
            </div>

            </Link>
            <Link to = '/login' className = "header_link">

            <div className = "header_option">
            <span className = "header_optionLine1" >Returns</span>
            <span className = "header_optionLine2">Orders</span>
            </div>
            </Link>
            <Link to = '/login' className = "header_link">

            <div className = "header_option">
            <span className = "header_optionLine1">Your</span>
            <span className = "header_optionLine2">Prime</span>
            </div>
            </Link>
            <Link to =  '/checkout' className = "header_link">
                <div className = "header_optionBasket">
                    <ShoppingBasketIcon/>
    <span class =  "header_optionLine2 header_basketCount" >{basket?.length}</span>   
                </div>

            </Link>
            </div>

        </nav>
    )
}

export default Header
