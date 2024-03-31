import React from "react";
import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useEffect } from "react";

const PaymentModel = ({ setIsOpen, isOpen, price, afterPayment }) => {
  const closeModal = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    const loadRazorpay = async () => {
      const script = document.createElement("script");
      script.src = "https://checkout.razorpay.com/v1/checkout.js";
      script.async = true;
      script.onload = () => {
        console.log("Razorpay SDK loaded");
      };
      document.body.appendChild(script);
    };

    loadRazorpay();

    return () => {
      document.body.removeChild(document.querySelector("script[src='https://checkout.razorpay.com/v1/checkout.js']"));
    };
  }, []);

  const launchRazorPay = () => {
    if (!window.Razorpay) {
      console.error("Razorpay SDK not loaded yet");
      return;
    }

    let options = {
      key: "rzp_test_UR1RXcKK4NZyYp",
      amount: price * 100,
      currency: "INR",
      name: "Game-Dev-Utopia",
      description: "Events Payment",
      image: "https://gamedevutopia.in/static/media/gdu_logo.7ecd244d3f80faa5df09.png",
      handler: (response) => {
        setIsOpen(false);
        console.log(response.razorpay_payment_id)
        alert("Payment Successful");
        afterPayment(response.razorpay_payment_id);
      },
      theme: {
        color: "#222",
        backdrop_color: "#222",
      },
    };

    let razorPay = new window.Razorpay(options);
    razorPay.open();
  };

  return (
    <>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-50" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-50" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-gray-800 p-6 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-medium leading-6 text-white"
                  >
                    Please make a payment
                  </Dialog.Title>
                  <div className="mt-2">
                    <p className="text-sm text-gray-300">
                      Hello please click on the below button to make a payment.
                    </p>
                  </div>

                  <div className="mt-4 flex gap-3">
                    <button
                      type="button"
                      className="inline-flex justify-center rounded-md border border-transparent bg-[#222] px-4 py-2 text-sm font-medium text-white hover:bg-[#0c0c0c] focus:outline-none focus-visible:ring-2 focus-visible:ring-red-500 focus-visible:ring-offset-2"
                      onClick={launchRazorPay}
                    >
                      Pay ₹{price}
                    </button>
                    <button
                      type="button"
                      className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                      onClick={closeModal}
                    >
                      Cancel Payment
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};

export default PaymentModel;