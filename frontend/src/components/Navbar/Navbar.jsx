import React, { useContext, useState, useRef, useEffect } from 'react'
import './Navbar.css'
import {assets} from '../../assets/assets'
import {Link} from 'react-router-dom';
import { StoreContext } from '../../context/StoreContext';


const Navbar = ({setShowLogin}) => {

    const [menu,Setmenu] = useState("home");
    const [showSearch, setShowSearch] = useState(false);
    const {getTotalCartAmount, searchQuery, setSearchQuery} = useContext(StoreContext);
    const searchInputRef = useRef(null);

    const handleSearchClick = () => {
      setShowSearch(prev => {
        if (prev) {
          setSearchQuery("");
        }
        return !prev;
      });
    };

    useEffect(() => {
      if (showSearch && searchInputRef.current) {
        searchInputRef.current.focus();
      }
    }, [showSearch]);

    const handleSearchBlur = () => {
      if (!searchQuery) {
        setShowSearch(false);
      }
    };
    
  return (
    <div className='navbar'>
      <Link to='/'><img src={assets.logo} alt="" className="logo" /></Link>
      <ul className='navbar-menu'>
        <Link to='/' onClick={()=>Setmenu("home")} className={menu==="home"?"active":""}>home</Link>
        <a href='#explore-menu' onClick={()=>Setmenu("menu")} className={menu==="menu"?"active":""}>menu</a>
        <a href='#app-download' onClick={()=>Setmenu("mobile-app")} className={menu==="mobile-app"?"active":""}>mobile-app</a>
        <a href='#footer' onClick={()=>Setmenu("contact-us")} className={menu==="contact-us"?"active":""}>contact us</a>
      </ul>
      <div className='navbar-right'>
        <div className={`navbar-search-container ${showSearch ? 'search-expanded' : ''}`}>
          <img 
            src={assets.search_icon} 
            alt="Search" 
            onClick={handleSearchClick}
            className={showSearch ? 'search-icon-active' : ''}
          />
          <input
            ref={searchInputRef}
            type="text"
            className={`navbar-search-input ${showSearch ? 'search-visible' : ''}`}
            placeholder="Search food..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onBlur={handleSearchBlur}
          />
        </div>
        <div className='navbar-search-icon'>
          <Link to="/cart"><img src={assets.basket_icon} alt="" /></Link>
            <div className={getTotalCartAmount()===0?"":"dot"}></div>
        </div>
        <button onClick={()=>setShowLogin(true)}>sign in</button>
      </div>
    </div> 
  )
}

export default Navbar
