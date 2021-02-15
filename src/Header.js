import React from 'react'
import './Header.css'
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
function Header() {
    return (
        <div className = 'header'>
            <img className = 'header-logo' 
            src= 'https://tse4.mm.bing.net/th?id=OIP.9l7oS9LpgfDzE-jh5Kkl5QHaDa&pid=Api&P=0&w=335&h=155'/>
            <div className = 'header-search'>
                <input className = 'header-searchInput' 
                type = 'text'/>
                <SearchIcon className = 'header-searchIcon'/>
            </div>
            <div className = 'header-nav'>
                <div className = 'header-option'>
                    <span className = 'header-option-lineone'>
                        Hello Guest
                    </span>
                    <span className = 'header-option-linetwo'>
                        Sign in
                    </span>
                </div>
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
                <div className = 'header-optionBasket'>
                    <ShoppingBasketIcon/>
                    <span className = 'header-option-lineTwo header-basketCount'>0</span>
                </div>
            </div>
        </div>
    )
}

export default Header
