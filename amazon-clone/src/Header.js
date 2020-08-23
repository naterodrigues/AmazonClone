// Note components are always named with a capital letter

import React from 'react';
import "./Header.css";
import {Link} from "react-router-dom";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";


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

                <Link to="/login" className="header__link">
                    <div className="header__option">
                        <span className="header__optionLineOne">Hello Nate</span>
                        <span className="header__optionLineTwo">Sign In</span>
                    </div>
                </Link>


                {/*Second link */}


                <Link to="/" className="header__link">
                    <div className="header__option">
                        <span className="header__optionLineOne">Returns</span>
                        <span className="header__optionLineTwo">& Orders</span>
                    </div>
                </Link>

                {/*Third link */}


                <Link to="/" className="header__link">
                    <div className="header__option">
                        <span className="header__optionLineOne">Your</span>
                        <span className="header__optionLineTwo">Prime</span>
                    </div>
                </Link>

                {/*Fourth link */}

                <Link to="/checkout" className="header__link">
                    <div className="header__optionBasket">
                        {/* Shopping Basket Icon*/}
                        <ShoppingBasketIcon className="header__basketIcon"></ShoppingBasketIcon>
                        <span className="header__optionLineTwo header__basketCount">0</span>
                    </div>
                </Link>

            </div>
        </nav>
    )
}

export default Header
