import React from 'react';

interface ButtonProps {
    label: string;
    pageSize?: number;
    activePageSize?: number;
    onClick: (pageSize?: number) => void;
}

const Button: React.FC<ButtonProps> = ({ label, pageSize, activePageSize, onClick }) => (
  <button
    className={`px-4 py-2 rounded ${pageSize === activePageSize ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
    onClick={() => (pageSize ? onClick(pageSize) : onClick())}
  >
    {label}
  </button>
);

export default Button;
