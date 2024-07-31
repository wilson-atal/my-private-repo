import React from 'react';

interface PageButtonsProps {
    totalPages: number;
    currentPage: number;
    onPageChange: (page: number) => void;
    labels?:string;
}

const PageButtons: React.FC<PageButtonsProps> = ({ totalPages, currentPage, onPageChange,  labels}) => {
    const [visiblePageRange, setVisiblePageRange] = React.useState<number[]>([]);

    React.useEffect(() => {
        const maxVisiblePages = 5; // Adjust this value to control the number of visible page buttons
        let start = Math.max(1, currentPage - Math.floor(maxVisiblePages / 2));
        let end = Math.min(totalPages, start + maxVisiblePages - 1);

        if (end - start + 1 < maxVisiblePages) {
            start = Math.max(1, totalPages - maxVisiblePages + 1);
            end = totalPages;
        }

        setVisiblePageRange(Array.from({ length: end - start + 1 }, (_, i) => start + i));
    }, [currentPage, totalPages]);

    return (
        <div className="flex flex-wrap justify-center mt-4 overflow-scroll">
            {visiblePageRange.map((page) => (
                <button
                    key={page}
                    className={`px-4 py-2 rounded ${currentPage === page ? 'bg-blue-500 text-white' : 'bg-gray-200 hover:bg-gray-300'}`}
                    onClick={() => onPageChange(page)}
                >
                    {page}
                </button>
            ))}
            {labels}
        </div>
    );
};

export default PageButtons;
