import React from "react";
import RestaurantSelector from "./components/RestaurantSelector";
import FoodCardsList from "./components/FoodCardsList";

function App() {
  return (
    <div>
      <header>
        <button
          className="menu-button"
          onClick={() => alert("Side menu opened!")}
        >
          ☰
        </button>
        <span className="logo">Food Force</span>
        <div className="header-buttons">
          {/* Naudojame RestaurantSelector komponentą */}
          <RestaurantSelector />

          <a
            href="/register.html"
            className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-700"
          >
            Sign Up
          </a>
          <a
            href="/login.html"
            className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-700"
          >
            Login
          </a>
        </div>
      </header>

      <main>
        <h1>Welcome to Food Force</h1>
        <p>Select your city to get started!</p>
     
        <FoodCardsList />
      </main>
      <footer> 
        <div>
          <div className="footer_icon">
            <a href="https://www.facebook.com/"><div className='fb-icon icons'></div></a>
            <a href="https://www.instagram.com/"><div className='insta-icon icons'></div></a>
            <a href="https://www.x.com/"><div className='x-icon icons'></div></a>
          </div>
          <div className='footer_brands'>
            <p>&#169; Copyright "FoodForce" 2025. All Rights Reserved </p>
            <a href="#"><div className='companyLogo '></div></a>
          </div>
          <div className="footer_info"> 
            <p>Contacts: +370555777123</p>
            <p>Email: FoodForce@sportfood.eat</p>
            <p>Adress: Kazkokia g.</p>
            <p>Work hours: I-VII 8:00-18:00</p>
          </div>
        </div>
        
        
         
        
      </footer>
    </div>
  );
}

export default App;
