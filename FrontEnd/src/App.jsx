import React from 'react';

function App() {
  return (
    <div>
      <header>
        <button className="menu-button" onClick={() => alert('Side menu opened!')}>☰</button>
        <span className="logo">Food Force</span>
        <div className="header-buttons">
          <a href="#" onClick={() => alert('Restaurant selection popup opened!')}>Vilnius</a>
          <a href="/register.html">Sign Up</a>
          <a href="/login.html">Login</a>
        </div>
      </header>
      <main>
        <p>Welcome to Food Force! This is the main content area.</p>
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