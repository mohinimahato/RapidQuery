// DismissBtn.jsx
// import { useState } from 'react';
import PropTypes from 'prop-types';

function DismissBtn({ handleDismiss }) {


    const handleDismissal = () => {

        handleDismiss(); // Call the handleDismiss function passed from the parent
    };

    return (
        <div className="flex gap-2 justify-end ">
            <button
                className="py-1.5 px-3 hover:text-red-600 hover:scale-105 hover:shadow text-center border border-gray-300 rounded-md h-8 text-sm flex items-center gap-1 lg:gap-2"
                onClick={handleDismissal}
            >
                <svg
                    className="w-4 h-4"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M6 18L18 6M6 6l12 12"
                    />
                </svg>

            </button>
        </div>
    );
}

DismissBtn.propTypes = {
    handleDismiss: PropTypes.func.isRequired,
};

export default DismissBtn;