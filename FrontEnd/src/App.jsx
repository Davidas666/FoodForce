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
    </div>
  );
}

export default App;