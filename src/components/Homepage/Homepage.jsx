import React from 'react'
import './Homepage.css'
import CustomerReviews from '../CustomerReviews/CustomerReviews'
import 'font-awesome/css/font-awesome.css'

const Homepage = () => {
  return (
    <div>
      <div className="toolbar">
        <a href="/" className='logo'>
          <h1>LEVIATHAN</h1>
        </a>
        <input type="text" placeholder="Search..." />
        
        <div className="cart">
          <i className="fas fa-shopping-cart"></i>
        </div>
      </div>
      <nav>
        <button>DUMBBELLS</button>
        <button>WEIGHT SETS</button>
        <button>BARBELLS</button>
        <button>WEIGHT BENCHES</button>
        <button>MEDICINE BALLS</button>
        <button>WEIGHT STORAGE</button>
      </nav>
      <div className="content">
        <h2>Welcome to Leviathan</h2>
        <p>We are the premier destination for all your fitness equipment and supplement needs. Our mission is to help you reach your fitness goals through high-quality products and exceptional customer service. Scroll down to browse our selection and read what our satisfied customers have to say:</p>
      </div>
      <CustomerReviews />
    </div>
  )
}

export default Homepage
