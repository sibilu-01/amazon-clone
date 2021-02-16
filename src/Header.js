import React from 'react'
import './Header.css'
import { Link } from "react-router-dom"
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import { useStateValue } from './StateProvider';
import {auth} from './firebase'
function Header() {

    const [{basket, user}, dispatch] = useStateValue();
    console.log("UUUSER 1 >>> " , user)
    const handleAuthentication = () => {
        if (user) {
            console.log("UUUSER>>> " , user)
            auth.signOut();
        }
    }
    return (
        <div className = 'header'>
            <Link to = "./">
                <img className = 'header-logo' 
                src= 'https://tse4.mm.bing.net/th?id=OIP.9l7oS9LpgfDzE-jh5Kkl5QHaDa&pid=Api&P=0&w=335&h=155'/>
            </Link>
            <div className = 'header-search'>
                <input className = 'header-searchInput' 
                type = 'text'/>
                <Link to = "#">
                    <SearchIcon className = 'header-searchIcon'/>
                </Link>
            </div>
            <div className = 'header-nav'>
                <Link to = { !user && './login' }>
                    <div onClick = {handleAuthentication} className = 'header-option'>
                        <span className = 'header-option-lineone'>
                            {user ? `Hello ${user?.email}`: 'Hello Guest'}
                        </span>
                        <span className = 'header-option-linetwo'>
                            { user ? 'Sign out' : 'Sign in' }
                        </span>
                    </div>
                </Link>
                <div className = 'header-option'>
                    <span className = 'header-option-lineone'>
                        Returns
                    </span>
                    <span className = 'header-option-linetwo'>
                        & orders
                    </span>
                </div>
                <div className = 'header-option'>
                    <span className = 'header-option-lineone'>
                        Your
                    </span>
                    <span className = 'header-option-linetwo'>
                        Prime
                    </span>
                </div>
                <Link to = "./checkout">
                    <div className = 'header-optionBasket'>
                        <ShoppingBasketIcon/>
                        <span className = 'header-option-lineTwo header-basketCount'>
                            {basket?.length}
                        </span>
                    </div>
                </Link>
            </div>
        </div>
    )
}

export default Header
