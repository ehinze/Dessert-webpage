import React, { useState } from 'react';
import Modal from './modal';

export default function Order({ cart, deleteFromCart, setCart }) {


  const clearCart = () => {
    setCart([]);
  };
  const [isModalOpen, setIsModalOpen] = useState(false);
  const orderTotal = cart.reduce((sum, item) => sum + item.total, 0);

  return (
    <div className="order">
      <div className="w-full p-7 bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
        <div className="flex items-center justify-between mb-4">
          <h5 className="text-xl font-bold leading-none text-gray-900 dark:text-white">
            Your Cart ({cart.length})
          </h5>
        </div>
        <div className="flow-root">
          <ul role="list" className="divide-y divide-gray-200 dark:divide-gray-700">
            {cart.length > 0 ? (
              cart.map((item) => (
                <li key={item.id} className="py-5">
                  <div>
                    <p className="text-sm text-left font-medium text-gray-900 dark:text-white">{item.name}</p>
                    <div className="flex justify-between gap-3 items-center">
                      <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                        {item.quantity}
                      </p>
                      <div className="text-base font-semibold text-gray-900 dark:text-white">
                        ${item.total.toFixed(2)}
                      </div>
                      <button
                        type="button"
                        onClick={() => deleteFromCart(item.id)}
                        className="text-gray-600 mb-4 bg-transparent hover:bg-gray-200 hover:text-gray-900 text-sm w-8 h-8 ms-auto inline-flex justify-center items-center"
                        aria-label="Remove item"
                      >
                        <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                          <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                        </svg>
                      </button>
                      
                    </div>

                  </div>
                </li>
              ))
            ) : (
              <p className="text-center text-gray-500">Your cart is empty.</p>

            )}

          </ul>

        </div>
        <div className='text-left font-bold'>
          <h2>Order Total: ${orderTotal.toFixed(2)}</h2>
        </div>

        <button type="button" onClick={() => setIsModalOpen(true)}
          disabled={cart.length === 0}
          className="text-white bg-red-800 hover:bg-red-800 w-full mx-auto font-medium rounded-full text-sm px-5 py-2.5 text-center mt-10">
          {cart.length === 0 ? "Order" : "Confirm Order"}
        </button>

      </div>
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} cart={cart} clearCart={clearCart} />
    </div>
  );
}
