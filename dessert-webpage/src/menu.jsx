import React, { useState } from 'react';
import data from './data.json';

export default function Menu({ cart, addToCart, removeFromCart }) {
  const [activeItemId, setActiveItemId] = useState(null); // Track active item

  return (
    <div className="menu">
      <h1 className="text-2xl font-bold">Desserts</h1>
      <div className="grid mt-20 md:grid-cols-3 gap-4">
        {data.map((item) => {
          const cartItem = cart.find((cartItem) => cartItem.id === item.id);
          const isActive = activeItemId === item.id;

          return (
            <div key={item.id} className="mb-5 hover:shadow-lg shadow-md rounded-lg p-4">
              <div className="relative">
                <img
                  src={item.image?.mobile || "/default-image.jpg"}
                  alt={item.name}
                  className="w-full h-40 hover:scale-105 object-cover rounded-md"
                />
                <div className="relative left-1/6 bottom-5 flex items-center justify-center space-x-2">
                  {isActive ? (
                    <div className="text-red-500 bg-white hover:text-black font-medium rounded-full text-sm px-5 py-2.5 text-center inline-flex items-center border-2 border-red-800">
                      <button
                        onClick={() => {
                          removeFromCart(item.id);
                          setActiveItemId(null); // Reset active item
                        }}
                        className="px-3 py-1 bg-red-500 text-white"
                      >
                        -
                      </button>
                      <span className="text-lg font-bold">{cartItem?.quantity || 0}</span>
                      <button
                        onClick={() => addToCart(item)}
                        className="px-3 py-1 bg-green-500 text-white"
                      >
                        +
                      </button>
                    </div>
                  ) : (
                    <button
                      type="button"
                      onClick={() => {
                        setActiveItemId(item.id);
                        addToCart(item);
                      }}
                      className="text-red-500 bg-white hover:text-black font-medium rounded-full text-sm px-5 py-2.5 text-center inline-flex items-center border-2 border-red-800"
                    >
                      <svg className="w-3.5 h-3.5 me-2 fill-red-800" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 21">
                        <path d="M15 12a1 1 0 0 0 .962-.726l2-7A1 1 0 0 0 17 3H3.77L3.175.745A1 1 0 0 0 2.208 0H1a1 1 0 0 0 0 2h.438l.6 2.255v.019l2 7 .746 2.986A3 3 0 1 0 9 17a2.966 2.966 0 0 0-.184-1h2.368c-.118.32-.18.659-.184 1a3 3 0 1 0 3-3H6.78l-.5-2H15Z" />
                      </svg>
                      Add to Cart
                    </button>
                  )}
                </div>
              </div>
              <h2 className="text-lg font-semibold mt-2">{item.name}</h2>
              <p className="text-gray-500">{item.category}</p>
              <p className="text-red-800 font-bold mt-1">${item.price.toFixed(2)}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
