// Note components are always named with a capital letter

import React from 'react';
import "./Header.css";
import { Link } from "react-router-dom";


function Header() {
    return (
        <nav className="header">
            
{/* logo on the left -> img tag */}
<Link to ="/">
<img className="header__logo" src="http://pngimg.com/uploads/amazon/amazon_PNG11.png" alt="Amazon Logo" />
</Link>

{ /* search box */}
<div className ="header__search">
<input type ="text" className ="header__searchInput"/>

</div>

{/* three links - hello/sign-in, returns & orders, your prime */}
{/*shopping cart icon, with items in cart */}

            
        </nav>
    )
}

export default Header
