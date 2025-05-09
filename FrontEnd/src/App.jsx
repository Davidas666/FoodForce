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
    </div>
  );
}

export default App;
