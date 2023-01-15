import React from 'react'
import './Homepage.css'
import { AiOutlineShoppingCart } from "react-icons/ai";
import coverPhoto from "../../img/cover.jpg"
import Featured from '../Featured/Featured';
import ShoesGear from '../ShoesGear/ShoesGear';
import PopularCategories from '../PopularCategories/PopularCategories';
import Footer from '../BottomSection/Footer';

const Homepage = () => {

  const texts = [
    'ORDERS OF $5K SHIP FREE',
    'FREE SHIPPING ON SELECT ITEMS: SHOP NOW',
    'BUY A RIG AND YOUR ENTIRE ORDER SHIPS FREE'
  ];
  
  let currentTextIndex = 0;
  
  setInterval(() => {
    const shippingDealsText = document.querySelector('.shipping-deals-text');
    shippingDealsText.classList.add('out');
  
    setTimeout(() => {
      shippingDealsText.textContent = texts[currentTextIndex];
      shippingDealsText.classList.remove('out');
  
      currentTextIndex = (currentTextIndex + 1) % texts.length;
    }, 1000);
  }, 5000);


  return (
    <div>
      <div className="top-bar">
        <h3 className='small-logo'>LEVIATHAN</h3>
        <div className="link-container">
          <a href="/gift-cards" className="link">Gift Cards</a>
          <a href="/contact-us" className="link">Contact Us</a>
          <a href="/order-status" className="link">Order Status</a>
          <a href="/live-chat" className="link">Live Chat</a>
        </div>
      </div>
   
      <div className="toolbar">
        <a href="/" className='logo'>
          <h1>LEVIATHAN</h1>
        </a>
        <div className="search-container">
          <input type="text" placeholder="Search" />
        </div>
        <button className="shipping-deals"> DAILY SHIPPING DEALS </button>
        <div className="text-fade-container">
          <p className="shipping-deals-text fade">BUY A RIG AND YOUR ENTIRE ORDER SHIPS FREE</p>
        </div>
        <div className="shoppingCart"><AiOutlineShoppingCart style={{color: 'white'}}/></div>
      </div>


      <nav>
        <button>DUMBBELLS</button>
        <button>WEIGHT SETS</button>
        <button>BARBELLS</button>
        <button>WEIGHT BENCHES</button>
        <button>MEDICINE BALLS</button>
        <button>WEIGHT STORAGE</button>
      </nav>

      <div className="cover-text-container" style={{position: 'relative'}}>
        <img src={coverPhoto} className="coverPhoto" alt="Cover" />
        <h1 className="cover-text">TRANSFORM <br/> THE WAY <br/> YOU TRAIN</h1>
        <div className="resolution-text">
          <h1 className="cover-text-high">YOUR <br/></h1>
          <h1 className="cover-text-big">NEW YEARS RESOLUTION <br/></h1>
          <h1 className="cover-text-low">WON'T KNOW WHAT HIT IT  </h1>
        </div>
        <div className="shop-weightlifting-container">
          <button className="shop-weightlifting">SHOP WEIGHTLIFTING</button>
        </div>
      </div>


     <Featured/>
     <ShoesGear/>
     <PopularCategories/>
     <Footer/>
     
      
    </div>
  )
}

export default Homepage
