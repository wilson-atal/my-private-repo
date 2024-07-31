import React from 'react';

interface PageSelectorProps {
    totalPages: number;
    currentPage: number;
    onPageChange: (page: number) => void;
}

const PageSelector: React.FC<PageSelectorProps> = ({ totalPages, currentPage, onPageChange }) => {
    return (
        <div className="flex justify-center mt-4 ">
            <label htmlFor="page-selector" className="mr-2 ">
                Page:
            </label>
            <select
                id="page-selector"
                value={currentPage}
                onChange={(e) => onPageChange(parseInt(e.target.value))}
                className="cursor-pointer px-4 py-2 rounded bg-gray-200 hover:bg-gray-300"
            >
                {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                    <option key={page} value={page}>
                        {page}
                    </option>
                ))}
            </select>
        </div>
    );
};

export default PageSelector;
