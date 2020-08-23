// Note components are always named with a capital letter

import React from 'react';
import "./Header.css";
import {Link} from "react-router-dom";
import SearchIcon from "@material-ui/icons/Search";


function Header() {
    return (
        <nav className="header">

            {/* logo on the left -> img tag */}
            <Link to="/">
                <img className="header__logo" src="http://pngimg.com/uploads/amazon/amazon_PNG11.png" alt="Amazon Logo"/>
            </Link>

            {/* search box */}
            <div className="header__search">
                <input type="text" className="header__searchInput"/>
                <SearchIcon class="header__searchIcon"></SearchIcon>
            </div>

            {/* three links - hello/sign-in, returns & orders, your prime */}

            <div className="header__nav">
                {/*First link */}

                <Link to ="/login" className="header__link"> 
                <div className="header__option">
                <span>Hello Nate</span>
                <span>Sign In</span>
                </div>
                </Link>


                {/*Second link */}


                <Link to ="/" className="header__link"> 
                <div className="header__option">
                <span>Returns</span>
                <span>& Orders</span>
                </div>
                </Link>

                {/*Third link */}


                <Link to ="/" className="header__link"> 
                <div className="header__option">
                <span>Your</span>
                <span>Prime</span>
                </div>
                </Link>

                {/*Fourth link */} </div>


            {/*shopping cart icon, with items in cart */} </nav>
    )
}

export default Header
