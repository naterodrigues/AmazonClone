// Note components are always named with a capital letter

import React from 'react';
import "./Header.css";

function Header() {
    return (
        <nav className="header">
{/* logo on the left -> img tg */}
<img className="header__logo" src="http://pngimg.com/uploads/amazon/amazon_PNG11.png" alt="Amazon Logo" />
{ /* search box */}
{/* three links - hello/sign-in, returns & orders, your prime */}
{/*shopping cart icon, with items in cart */}

            
        </nav>
    )
}

export default Header
