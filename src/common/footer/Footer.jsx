import React from "react"
import "./style.css"


const Footer = () => {
  return (
    <>
      <footer className="bg dark py-5">
        <div className='container grid2'>
          <div className='box'>
            <h1>Fajardo Tailor</h1>
            <p>This shop runs by Fajardo Family that started during pandemic while our Convenience store addedd some sewing machine and we decide to become Convenience store and sewing shop that always available</p>
            <div className='icon d_flex'>
              <div className='img d_flex'>
                <i class='fa-brands fa-google-play'></i>
                <span>Google Play</span>
              </div>
              <div className='img d_flex'>
                <i class='fa-brands fa-app-store-ios'></i>
                <span>App Store</span>
              </div>
            </div>
          </div>

          <div className='box'>
            <h2>About Us</h2>
            <ul>
              <li>Careers</li>
              <li>Our Stores</li>
              <li>Our Cares</li>
              <li>Terms & Conditions</li>
              <li>Privacy Policy</li>
            </ul>
          </div>
          
          <div className='box'>
            <h2>Contact Us</h2>
            <ul>
              <li>187 Don.t. herrera, Sta. Quiteria Caloocan City,Philippines </li>
              <li>Email: Fajardo_SewingShop@gmail.com</li>
              <li>Phone: +639204340677</li>
            </ul>
          </div>
          <div className='box'>
            <h2>Follow Us</h2>
            <ul>
              <li>
                <a href="https://www.facebook.com/profile.php?id=100064281574087"> 
                < i className="fab fa-facebook-f"></i>
                </a>
              </li>
              <li>
                <a href="#"> 
                < i className="fab fa-twitter"></i>
                </a>
              </li>
              <li>
                <a href="#"> 
                < i className="fab fa-instagram"></i>
                </a>
              </li>
              <li>
                <a href="#"> 
                < i className="fab fa-pinterest"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer
