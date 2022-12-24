import React from 'react';

const Button = ({children, className, ...props}) => {
    return (
        <button
            type="button"
            className={`inline-flex items-center rounded-md border border-transparent bg-indigo-600 px-3 py-2 text-sm font-medium leading-4 text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 ${className}`}
            {...props}
        >
            {children}
        </button>
    );
};

export default Button;
