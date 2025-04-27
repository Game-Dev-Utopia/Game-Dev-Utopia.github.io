import React from 'react';

function Modal({ children, onClose }) {
    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50 animate-fade-in">
            <div className="bg-slate-800 rounded-lg shadow-lg w-[90%] max-w-md p-4 relative">
                <button
                    onClick={onClose}
                    className="absolute top-2 right-2 text-white text-lg"
                >
                    ✕
                </button>
                {children}
            </div>
        </div>
    );
}

export default Modal;