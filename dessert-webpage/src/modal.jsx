import { useState } from "react";

export default function Modal({ isOpen, onClose, cart, clearCart }) {

const handleNewOrder = () => {
    if (clearCart) {
        clearCart();  
    }
    onClose();  
}


    if (!isOpen) return null;

    const orderTotal = cart.reduce((sum, item) => sum + item.total, 0);


    return (
        <div id="popup-modal" className="fixed inset-0 z-50 flex justify-center items-center bg-black bg-opacity-50">
            <div className="relative p-4 w-full max-w-md bg-white rounded-lg shadow-sm dark:bg-gray-700">
                <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#1a895f">
                    <path d="m424-296 282-282-56-56-226 226-114-114-56 56 170 170Zm56 216q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z" />
                </svg>
                <button
                    type="button"
                    className="absolute top-3 end-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                    onClick={onClose}
                >
                    <svg className="w-3 h-3" aria-hidden="true" viewBox="0 0 14 14">
                        <path stroke="currentColor" strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                    </svg>
                </button>

                <div className="text-left">
                    <h1 className="text-2xl font-bold text-left mt-7">Order Confirmed</h1>
                    <p className="text-red-900">We hope you enjoy your meal!</p>
                </div>


                <div className="p-4 md:p-5 mt-7 rounded-md bg-red-100 text-center">
                    <ul className="divide-y divide-gray-300 dark:divide-gray-700">
                        {cart.map((item) => (
                            <li key={item.id} className="py-3">
                                <div className="flex items-center justify-between gap-5">
                                    <div className="flex items-center gap-4">
                                        <img
                                            src={item.image.thumbnail}
                                            alt={item.name}
                                            className="w-16 h-16 object-cover rounded-md"
                                        />
                                        <div className="flex flex-col">
                                            <p className="text-sm font-medium text-gray-900 dark:text-white">{item.name}</p>
                                            <p className="text-sm font-medium text-gray-900 dark:text-white">{item.quantity}x</p>
                                        </div>
                                    </div>
                                    <div className="font-semibold text-gray-900 dark:text-white min-w-[60px] text-right">
                                        ${item.total.toFixed(2)}
                                    </div>
                                </div>
                            </li>
                        ))}
                    </ul>
                    <div className='text-left mt-10 font-bold'>
                        <h2>Order Total: ${orderTotal.toFixed(2)}</h2>
                    </div>
                </div>
                <button type="button"
                    onClick={handleNewOrder}
                    className="text-white bg-red-600 hover:bg-red-800 mt-10 font-medium rounded-lg text-sm px-5 py-2.5"
                >
                    Start a New Order
                </button>


            </div>
        </div>
    );
}
