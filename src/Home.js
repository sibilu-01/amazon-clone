import React from 'react'
import "./Home.css"
import Product from './Product'
function Home() {
    return (
        <div className = 'home'>
            <div className = 'home-container'>
                <img 
                    className = 'home-image'  
                    src = "https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Hero/Fuji_TallHero_45M_v2_1x._CB432458380_.jpg" 
                    alt = ""
                />      
            </div>
            <div className='home-row'>
                <Product 
                    title = "the lean startup"
                    price={29.99}
                    image="http://1.bp.blogspot.com/-T-d3JPMr-Uk/UPshLuidy6I/AAAAAAAAFbU/vOiHd0qgnC4/s1600/lean-startup_book-cover.jpeg"
                    rating={5}
                />
                <Product 
                    title = "the lean startup"
                    price={29.99}
                    image="http://1.bp.blogspot.com/-T-d3JPMr-Uk/UPshLuidy6I/AAAAAAAAFbU/vOiHd0qgnC4/s1600/lean-startup_book-cover.jpeg"
                    rating={5}
                />
            </div>

            <div className = 'home-row'>
                <Product 
                    title = "the lean startup"
                    price={29.99}
                    image="http://1.bp.blogspot.com/-T-d3JPMr-Uk/UPshLuidy6I/AAAAAAAAFbU/vOiHd0qgnC4/s1600/lean-startup_book-cover.jpeg"
                    rating={5}
                />
                <Product 
                    title = "the lean startup"
                    price={29.99}
                    image="http://1.bp.blogspot.com/-T-d3JPMr-Uk/UPshLuidy6I/AAAAAAAAFbU/vOiHd0qgnC4/s1600/lean-startup_book-cover.jpeg"
                    rating={5}
                />
                <Product 
                    title = "the lean startup"
                    price={29.99}
                    image="http://1.bp.blogspot.com/-T-d3JPMr-Uk/UPshLuidy6I/AAAAAAAAFbU/vOiHd0qgnC4/s1600/lean-startup_book-cover.jpeg"
                    rating={5}
                />
            </div>

            <div className = 'home-row'>
                <Product 
                    title = "the lean startup"
                    price={29.99}
                    image="http://1.bp.blogspot.com/-T-d3JPMr-Uk/UPshLuidy6I/AAAAAAAAFbU/vOiHd0qgnC4/s1600/lean-startup_book-cover.jpeg"
                    rating={5}
                />
            </div>


        </div>
    )
}

export default Home
