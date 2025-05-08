import React, { useState } from 'react';

function RestaurantSelector() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedCity, setSelectedCity] = useState('Mano Miestas'); // Pradinė būsena

  const handleSelect = (city) => {
    setSelectedCity(city); // Nustato pasirinktą miestą
    setIsOpen(false); // Uždaro popup
  };

  return (
    <div className="relative">
      <button
        className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 shadow-md"
        onClick={() => setIsOpen(!isOpen)}
      >
        {selectedCity} {/* Mygtuko tekstas keičiasi pagal pasirinktą miestą */}
      </button>
      {isOpen && (
        <div className="absolute top-14 right-0 bg-white border border-gray-300 shadow-lg rounded-lg w-48">
          <h3 className="text-center text-lg font-semibold text-gray-700 py-2 border-b border-gray-200">
            Pasirinkite miestą
          </h3>
          <ul className="py-2">
            <li>
              <button
                className="block w-full text-left px-4 py-2 mb-2 text-gray-700 hover:bg-blue-100 hover:text-blue-500"
                onClick={() => handleSelect('Vilnius')}
              >
                Vilnius
              </button>
            </li>
            <li>
              <button
                className="block w-full text-left px-4 py-2 mb-2 text-gray-700 hover:bg-blue-100 hover:text-blue-500"
                onClick={() => handleSelect('Kaunas')}
              >
                Kaunas
              </button>
            </li>
            <li>
              <button
                className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-blue-100 hover:text-blue-500"
                onClick={() => handleSelect('Klaipėda')}
              >
                Klaipėda
              </button>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}

export default RestaurantSelector;