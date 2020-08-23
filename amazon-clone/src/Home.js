import React from 'react'
import './Home.css';
import Product from './Product.js';

function Home() {
    return (
        <div className="home">
            <img className="home__image" src="https://images-fe.ssl-images-amazon.com/images/G/35/kindle/journeys/NDhmYmFkNDUt/NDhmYmFkNDUt-MmZmOGY4NTMt-w1500._CB408794244_.jpg" alt="" />
       
       {/* Product with id, title, price, rating and image */}
       <div className="home__row">
       <Product 
        id="10001"
        title="Apple Airpods Pro"
        price={399.95}
        rating={5}
        image="https://azcd.harveynorman.com.au/media/catalog/product/a/i/airpods_pro_pdp_us_1.jpg"
        />
        

<Product 
        id="10002"
        title="Xiaomi Mi SMart Air Purifier 3"
        price={218.00}
        rating={3}
        image="data:image/jpeg;base64,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"
        />

<Product 
        id="10003"
        title="Alexander McKenzie: The Adventurous Gardener"
        price={49.95}
        rating={4}
        image="https://azcd.harveynorman.com.au/media/catalog/product/a/i/airpods_pro_pdp_us_1.jpg"
        />
      </div>
        </div>
    )
}

export default Home
