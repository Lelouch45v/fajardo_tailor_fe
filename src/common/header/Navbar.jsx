import React, { useState } from "react"
import { Link } from "react-router-dom"

const Navbar = () => {
  // Toogle Menu
  const [MobileMenu, setMobileMenu] = useState(false)
  return (
    <>
      <header className='header'>
          <div className='navlink' >
            <ul className={MobileMenu ? "nav-links-MobileMenu" : "link f_flex capitalize"} onClick={() => setMobileMenu(false)}>
              {/*<ul className='link f_flex uppercase {MobileMenu ? "nav-links-MobileMenu" : "nav-links"} onClick={() => setMobileMenu(false)}'>*/}
              <li>
                <Link to='/'>home</Link>
              </li>
              <li>
                <Link to='/pages'>Collections</Link>
              </li>
              <li>
                <Link to='/ShopCart'>Products</Link>
              </li>
              <li>
                <Link to='/'>About Us</Link>
              </li>
                          
            </ul>
          </div>
      </header>
    </>
  )
}

export default Navbar
