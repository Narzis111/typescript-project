"use client"; // Enable client-side rendering

import React, { useState } from 'react';
import OrderForm from './OrderForm';
import { BsReceipt } from 'react-icons/bs';

const OrderNowButton: React.FC = () => {
  // State to control modal visibility
  const [showModal, setShowModal] = useState<boolean>(false);

  // Handler for opening the modal
  const handleButtonClick = (): void => {
    setShowModal(true);
  };

  // Handler for closing the modal
  const closeModal = (): void => {
    setShowModal(false);
  };

  return (
    <>
      {/* Order Now Button */}
      <button className="mx-auto flex w-fit items-center gap-x-1 bg-[#ffb200] px-4 py-2 text-xs uppercase mt-3 rounded-md font-semibold">
        <BsReceipt />
        Order Now
      </button>

      {/* Modal for Order Form */}
      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50 z-50">
          <div className="bg-white w-full max-w-4xl h-full overflow-y-scroll p-5 rounded-lg shadow-lg relative">
            {/* Close Button */}
            <button
              onClick={closeModal}
              className="absolute top-3 right-3 text-gray-500 hover:text-gray-700"
            >
              &#10005; {/* X mark for closing modal */}
            </button>

            {/* Order Form Component */}
            <OrderForm />
          </div>
        </div>
      )}
    </>
  );
};

export default OrderNowButton;
