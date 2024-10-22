"use client";

import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import Card from "../components/Card";
import { useEffect, useState } from "react";
import { SERVER_URL } from "@/app/constants/api";
import Modal from "./Modal/page";
import ProjectDetailsPage from "../project-detail/page";

function Page() {
  const [data, setData] = useState<any>();
  const [payAmount, setPayAmount] = useState<number>(); // User-input pay amount
  const [isPaymentModalOpen, setPaymentModalOpen] = useState(false);
  const [isSuccessModalOpen, setSuccessModalOpen] = useState(false);
  const [isFailureModalOpen, setFailureModalOpen] = useState(false);

  const [isModalOpen, setIsModalOpen] = useState(false);

  // Function to open the modal
  const openModal = () => {
    setIsModalOpen(true);
  };

  // Function to close the modal
  const closeModal = () => {
    setIsModalOpen(false);
  };

  // Handler to simulate payment
  const handlePayment = () => {
    setPaymentModalOpen(false); // Close payment modal
    // Simulate a successful or failed payment (you can customize this logic)
    const isSuccess = Math.random() > 0.5;
    if (isSuccess) {
      setSuccessModalOpen(true); // Open success modal
    } else {
      setFailureModalOpen(true); // Open failure modal
    }
  };

  useEffect(() => {
    const userid = localStorage.getItem("userid") || "";
    const token = localStorage.getItem("token") || "";

    async function getOrders(userid: string, token: string) {
      const res = await fetch(`${SERVER_URL}/user/order/dashboard/${userid}`, {
        headers: { Authorization: `Bearer ${token}` },
      });

      if (!res.ok) {
        throw new Error("Failed to fetch data");
      }

      const data = await res.json();
      setData(data);
    }
    getOrders(userid, token);
  });

  console.log(data);

  const cardTitles = [
    "Total Orders",
    "Total project amount",
    "Total project paid",
    "Total amount left",
    "Total pending Orders",
    "Total Waiting orders",
    "Total working orders",
    "total complete orders",
    "total delivery orders",
    "total cancel orders",
  ];

  return (
    <section className="rounded-xl px-6 py-5">
      <div className="mb-3 grid grid-cols-6 gap-1">
        {cardTitles.map((title, i) => (
          <Card title={title} key={i} />
        ))}
      </div>

      <header className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">Orders</h1>
        <div>
          <input
            type="search"
            placeholder="Search here..."
            className="mr-2 min-w-[280px] rounded-lg border px-3 py-3 shadow-xl focus:border-[#FFB200] focus:outline-none"
          />
          <button className="rounded-lg bg-[#FFB200] px-6 py-3 font-semibold">
            Search
          </button>
        </div>
      </header>

      <table className="mt-4 w-full rounded-lg border border-[#FFB200] text-sm">
        <thead className="bg-[#FFB200]">
          <tr>
            <th className="py-6">No.</th>
            <th className="w-[12%]">Order ID</th>
            <th className="w-[12%]">Project Name</th>
            <th className="w-[13%]">Project Amount</th>
            <th className="w-[12%]">Paid Amount</th>
            <th className="w-[12%]">Left Amount</th>
            <th className="w-[12%]">Message</th>
            <th className="w-[12%]">Status</th>
            <th className="w-[11%]">Action</th>
          </tr>
        </thead>
        <tbody className="border border-[#FFB200] text-center">
          {data?.data?.userorders?.length === 0 ? (
            <tr>
              <td colSpan={9} className="py-4">
                There is no available order
              </td>
            </tr>
          ) : (
            <tr className="odd:bg-[#FAEFD8] even:bg-white">
              <td className="border-r border-r-[#FFB200] py-6">
                <span className="rounded bg-[#FFB200] px-2 py-1 font-semibold">
                  1
                </span>
              </td>
              <td className="border-r border-r-[#FFB200]">045001</td>
              <td className="border-r border-r-[#FFB200]">Web dev</td>
              <td className="border-r border-r-[#FFB200]">1500 USD</td>
              <td className="border-r border-r-[#FFB200]">500 USD</td>
              <td className="border-r border-r-[#FFB200]">1000 USD</td>
              <td className="border-r border-r-[#FFB200]">
                <button className="rounded bg-[#FFB200] px-3 py-2 text-sm font-semibold">
                  Update
                </button>
              </td>
              <td className="border-r border-r-[#FFB200]">
                <button
                
        onClick={() => setPaymentModalOpen(true)}
        className="bg-green-500 rounded text-white py-1 px-3 hover:bg-green-600"
      >
       Payment
      </button>

      {/* Payment Modal */}
      {isPaymentModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-6 rounded-lg shadow-lg w-96">
            <h2 className="text-2xl font-bold mb-4 text-center">Payment</h2>
            <div className="text-left mb-4">
              <p>Project Name: <span className="font-semibold">Web Dev</span></p>
              <p>Project Amount: <span className="font-semibold">1500 USD</span></p>
              <p>Paid Amount: <span className="font-semibold">500 USD</span></p>
              <p>Left Amount: <span className="font-semibold">1000 USD</span></p>
              <p>
                Pay Amount:{" "}
                <input
                  type="number"
                  value={payAmount}
                  onChange={(e) => setPayAmount(Number(e.target.value))}
                  className="border rounded w-24 text-center"
                  placeholder="Enter amount"
                />{" "}
                USD
              </p>
              <p>
                Total:{" "}
                <span className="font-semibold">${payAmount}</span>
              </p>
              </div>
            <div className="flex items-center mb-4">
              <input type="checkbox" className="mr-2" />
              <p>I agree with the terms and conditions</p>
            </div>
            <div className="flex justify-around">
              <button
                className="bg-gray-500 text-white py-2 px-4 rounded-lg hover:bg-gray-600"
                onClick={() => setPaymentModalOpen(false)}
              >
                Cancel Payment
              </button>
              <button
                className="bg-green-500 text-white py-2 px-4 rounded-lg hover:bg-green-600"
                onClick={handlePayment}
              >
                Pay ${payAmount}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Success Modal */}
      {isSuccessModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-6 rounded-lg shadow-lg w-96">
            <h2 className="text-2xl font-bold mb-4 text-center text-green-600">Payment Successful</h2>
            <p className="text-center mb-4">Your payment has been processed successfully. Thank you for your business!</p>
            <button
              className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 w-full"
              onClick={() => setSuccessModalOpen(false)}
            >
              Go Back Home
            </button>
          </div>
        </div>
      )}

      {/* Failure Modal */}
      {isFailureModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-6 rounded-lg shadow-lg w-96">
            <h2 className="text-2xl font-bold mb-4 text-center text-red-600">Insufficient Account Balance</h2>
            <p className="text-center mb-4">Your account does not have enough balance. Please deposit and try again.</p>
            <button
              className="bg-red-500 text-white py-2 px-4 rounded-lg hover:bg-red-600 w-full"
              onClick={() => setFailureModalOpen(false)}
            >
              OK
            </button>
          </div>
        </div>
      )}
              </td>
              <td>
                <button 
                onClick={openModal}
                className="rounded bg-[#FFB200] px-3 py-2 text-sm font-semibold uppercase">
                 
                  View
                </button>
                 {/* Modal with Project Details Page */}
      <Modal show={isModalOpen} onClose={closeModal}>
        <ProjectDetailsPage />
      </Modal>
              </td>
            </tr>
          )}
        </tbody>
      </table>
      <footer className="flex justify-between bg-white px-4 py-6 text-sm">
        <div>
          <p className="font-bold">Showing 1 to 5 of 97 results</p>
        </div>
        <div className="flex items-center gap-x-2">
          <FaArrowLeft className="text-[#FFB200]" />
          <button className="flex h-6 w-6 items-center justify-center rounded-full bg-[#FFB200] text-xs font-semibold text-white">
            1
          </button>
          <button className="flex h-6 w-6 items-center justify-center rounded-full bg-[#FFF2D4] text-xs font-semibold text-black">
            2
          </button>
          <FaArrowRight className="text-[#FFB200]" />
        </div>
      </footer>
    </section>

  );
}

export default Page;
