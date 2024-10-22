import React, { useState } from 'react';
import HCaptcha from '@hcaptcha/react-hcaptcha';
import Modal from '../Modal/page';
import WithdrawalHistoryPage from '../../refund-payment/page';
import Image from 'next/image';
import NextModal from './NextModal/page';

const DepositModal: React.FC = () => {
  const [isCaptchaVerified, setIsCaptchaVerified] = useState(false);
  const [isWithdrawSuccess, setIsWithdrawSuccess] = useState(false);

  // const [currentPage, setCurrentPage] = useState<'deposithistory' | 'withdrawhistory'>('deposithistory');
  const [modalType, setModalType] = useState<'deposithistory' | 'withdrawhistory' | 'deposit' | 'withdraw' | null>(null);
  const [showModal, setShowModal] = useState<boolean>(false);
  const [isWalletChecked, setIsWalletChecked] = useState<boolean>(false);
  const [isPaymentSuccess, setIsPaymentSuccess] = useState(false);
  // Handle checkbox change
  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIsWalletChecked(e.target.checked);
  };

  // Show modal on button click
  const handleWithdraw = () => {
    setShowModal(true);
  };

  // Close modal function
  const closeModal = () => {
    setShowModal(false);
  };
  const handlePaymentSuccess = () => {
    setIsPaymentSuccess(true);
  };

  // const openModalWithPage = (page: 'deposithistory' | 'withdrawhistory' | 'deposit' | 'withdraw') => {
  //   setModalType(page);
  //   setShowModal(true);
  // };

  // const closeModal = () => {
  //   setShowModal(false);
  //   setModalType(null);
  // };

  const HCAPTCHA_SITE_KEY = 'cc30dd1a-a148-4414-8f2a-548c2bc80cf2';



  // Handle hCaptcha verification
  const handleCaptchaChange = (token: string | null) => {
    if (token) {
      setIsCaptchaVerified(true);
    } else {
      setIsCaptchaVerified(false);
    }
  };

  // const handleWithdraw = () => {
  //   if (isCaptchaVerified) {
  //     setIsWithdrawSuccess(true);
  //   } else {
  //     alert('Please complete the CAPTCHA verification!');
  //   }
  // };

  return (
    <div className="max-w-[80vw] mt-4 max-h-fit mb-4 flex flex-col items-start">
        <nav className="w-full  shadow-lg -mt-6 text-black px-6 py-4 flex justify-center gap-20 items-center">

          <select className="rounded-full border border-blue-500 px-2 py-1 bg-white text-black">
            <option value="account" disabled>Payment Method</option>
            <option value="sbi">SBI Bank</option>
            <option value="uk">UK Bank</option>
            <option value="venmo">Venmo</option>
            <option value="paypal">Paypal</option>
          </select>
          <h1>Pay Amount $</h1>
          <input
            type="number"
            placeholder="Enter amount"
            className="border rounded-full border-blue-500 px-2 py-1 w-30"
          />
        </nav>

        <div className="bg-white w-full p-5 rounded-b-lg mt-2">
          <div className='flex justify-between'>
            <Image src="/icons/image 7103.png" alt='bank' width={270} height={150} />
            <div className='font-semibold'>
              <p>Bank: Payoneer</p>
              <p>Account Name: parsonal</p>
              <p>Account: 49494949449</p>
              <p>Routing:  SD46649646</p>
            </div>
            <Image src="/icons/image 7104.png" alt='bank' width={140} height={130} />

          </div>

          <div className='flex justify-between mt-6'>
            {/* Withdraw Processing Section */}
            <div className="bg-blue-50 p-4 flex-1 rounded-lg border border-blue-300">
              {/* <h2 className="text-lg text-center font-semibold mb-4">Withdrawal Processing</h2> */}
              <div className="flex flex-col space-y-2">
                <div className="flex justify-between">
                  <span>Pay amount:</span>
                  <span>500 USD</span>
                </div>
                <div className="flex justify-between">
                  <span>VAT (2%):</span>
                  <span>10 USD </span>
                </div>
                <div className="flex justify-between font-bold">
                  <span>Total Amount:</span>
                  <span>510 USD</span>
                </div>
              </div>
            </div>
            <div className="flex flex-1 justify-end items-end">
            <button
        type="button"
        onClick={handleWithdraw}
        className="bg-blue-500 text-white px-16 font-bold py-2 rounded hover:bg-blue-600"
      >
        Next
      </button>
            </div>
             {/* Modal component */}
      <NextModal show={showModal} onClose={closeModal}>
        <div className='w-full'>
          {/* Navbar */}
          <nav className="w-full shadow-lg -mt-6 text-black px-6 py-4 flex justify-center items-center">
            <h3 className="text-md font-semibold flex justify-center text-center">Enter Your Payment Account Details</h3>       
          </nav>

          <div className="bg-white w-full p-5 rounded-b-lg mt-2">
                 <div className="flex justify-between gap-4">
              <form className="pr-4 flex-1">
                <div className="mb-2">
                  <label className="block mb-1">Account Holder Name</label>
                  <input
                    type="text"
                    className="w-full border rounded px-3 py-2"
                    placeholder="Enter your name"
                  />
                </div>

                <div className="mb-2">
                  <label className="block mb-1">Account Name/Type</label>
                  <input
                    type="text"
                    className="w-full border rounded px-3 py-2"
                    placeholder="Enter your account name/type"
                  />
                </div>
                <div className="mb-2">
                  <label className="block mb-1">Account Number/Type</label>
                  <input
                    type="text"
                    className="w-full border rounded px-3 py-2"
                    placeholder="Enter your account number"
                  />
                </div>
                <div className="mb-2">
                  <label className="block mb-1">Transaction ID</label>
                  <input
                    type="text"
                    className="w-full border rounded px-3 py-2"
                    placeholder="Enter your Transaction ID"
                  />
                </div>

                    <div className="mb-2">
                      <label className="block mb-1">Transaction receipt</label>
                      <input
                        type="text"
                        className="w-full border rounded px-3 py-2"
                        placeholder="Enter Transaction Receipt"
                      />
                    </div>
                
                <div className="mb-2">
                  <label className="block mb-1">Any Additional Information</label>
                  <textarea
                    className="w-full border rounded px-3 py-2"
                    placeholder="Enter any additional information"
                  ></textarea>
                </div>
              </form>

              {/* Withdraw Processing Section */}
              <div className="flex-1 bg-blue-50 p-4 rounded-lg border border-blue-300">
                <h2 className="text-lg text-center font-semibold mb-4">
                  Payment Processing
                </h2>
                <div className="flex flex-col space-y-2">
                  <div className="flex justify-between">
                    <span>Pay amount:</span>
                    <span>500 USD</span>
                  </div>
                  <div className="flex justify-between">
                    <span>VAT (2%):</span>
                    <span>10 USD</span>
                  </div>
                  <div className="flex justify-between font-bold">
                    <span>Total Amount:</span>
                    <span>510 USD</span>
                  </div>
                </div>
                <div className="my-4 flex items-center flex-1">
                  <input type="checkbox" className="form-checkbox mr-2" />
                  <span className='text-md'>I agree with the terms & conditions</span>
                </div>
                <div className="my-4">
                  {/* Add HCaptcha */}
                  <div className="my-8">
                  <HCaptcha
                    sitekey={HCAPTCHA_SITE_KEY}
                    onVerify={handleCaptchaChange}
                  />
                </div>
                </div>
                <div className="flex justify-center">
                <button
  type="button"
  onClick={handlePaymentSuccess}  // Trigger the success modal
  className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
>
  Submit Payment
</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </NextModal>
    </div>

          </div>
           {/* Payment Success Modal */}
      {isPaymentSuccess && (
        <div className="fixed z-50 inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50">
          <div className="bg-white p-8 rounded-lg text-center">
            <div className="text-2xl font-bold text-green-600 mb-4">
              <span>✔</span> Payment Successful
            </div>
            <p className="text-lg mb-6">Thank you! Your payment is complete.</p>
            <button
              className="bg-green-500 text-white px-6 py-2 rounded hover:bg-green-600"
              onClick={() => setIsPaymentSuccess(false)}
            >
              Done
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
       

export default DepositModal;

