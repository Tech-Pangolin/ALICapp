import React, { useState, Children, isValidElement } from 'react';
import { Pagination } from 'react-bootstrap';

interface PaginationWrapperProps {
    children: React.ReactNode;
    rowsPerPage?: number; // Number of rows to show per page
    showPagination?: boolean;
    className?: string;
    totalItems?: number; // Total number of actual items (PhotoCards) for display
    itemLabel?: string; // Label for the items (default: "items")
}

const PaginationWrapper: React.FC<PaginationWrapperProps> = ({
    children,
    rowsPerPage = 4,
    showPagination = true,
    className = '',
    totalItems,
    itemLabel = 'items'
}) => {
    const [currentPage, setCurrentPage] = useState(1);

    // Convert children to array and filter out invalid elements
    // Each child is a Row component
    const rowsArray = Children.toArray(children).filter(isValidElement);
    const totalPages = Math.ceil(rowsArray.length / rowsPerPage);
    
    // Use provided totalItems or fall back to rows count
    const actualTotalItems = totalItems || rowsArray.length;

    // Calculate current page rows
    const startIndex = (currentPage - 1) * rowsPerPage;
    const endIndex = startIndex + rowsPerPage;
    const currentPageRows = rowsArray.slice(startIndex, endIndex);

    // Handle page change
    const handlePageChange = (page: number) => {
        setCurrentPage(page);
        // Scroll to top of the pagination component when page changes
        const element = document.getElementById('pagination-wrapper');
        if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    };

    // Generate pagination items
    const renderPaginationItems = () => {
        const items = [];
        const maxVisiblePages = 5;
        
        if (totalPages <= maxVisiblePages) {
            // Show all pages if total is small
            for (let i = 1; i <= totalPages; i++) {
                items.push(
                    <Pagination.Item
                        key={i}
                        active={i === currentPage}
                        onClick={() => handlePageChange(i)}
                    >
                        {i}
                    </Pagination.Item>
                );
            }
        } else {
            // Show pages with ellipsis for large page counts
            if (currentPage <= 3) {
                // Show first 4 pages + ellipsis + last page
                for (let i = 1; i <= 4; i++) {
                    items.push(
                        <Pagination.Item
                            key={i}
                            active={i === currentPage}
                            onClick={() => handlePageChange(i)}
                        >
                            {i}
                        </Pagination.Item>
                    );
                }
                items.push(<Pagination.Ellipsis key="ellipsis1" />);
                items.push(
                    <Pagination.Item
                        key={totalPages}
                        active={totalPages === currentPage}
                        onClick={() => handlePageChange(totalPages)}
                    >
                        {totalPages}
                    </Pagination.Item>
                );
            } else if (currentPage >= totalPages - 2) {
                // Show first page + ellipsis + last 4 pages
                items.push(
                    <Pagination.Item
                        key={1}
                        active={1 === currentPage}
                        onClick={() => handlePageChange(1)}
                    >
                        1
                    </Pagination.Item>
                );
                items.push(<Pagination.Ellipsis key="ellipsis1" />);
                for (let i = totalPages - 3; i <= totalPages; i++) {
                    items.push(
                        <Pagination.Item
                            key={i}
                            active={i === currentPage}
                            onClick={() => handlePageChange(i)}
                        >
                            {i}
                        </Pagination.Item>
                    );
                }
            } else {
                // Show first page + ellipsis + current-1, current, current+1 + ellipsis + last page
                items.push(
                    <Pagination.Item
                        key={1}
                        active={1 === currentPage}
                        onClick={() => handlePageChange(1)}
                    >
                        1
                    </Pagination.Item>
                );
                items.push(<Pagination.Ellipsis key="ellipsis1" />);
                for (let i = currentPage - 1; i <= currentPage + 1; i++) {
                    items.push(
                        <Pagination.Item
                            key={i}
                            active={i === currentPage}
                            onClick={() => handlePageChange(i)}
                        >
                            {i}
                        </Pagination.Item>
                    );
                }
                items.push(<Pagination.Ellipsis key="ellipsis2" />);
                items.push(
                    <Pagination.Item
                        key={totalPages}
                        active={totalPages === currentPage}
                        onClick={() => handlePageChange(totalPages)}
                    >
                        {totalPages}
                    </Pagination.Item>
                );
            }
        }
        
        return items;
    };

    if (rowsArray.length === 0) {
        return (
            <div className={`text-center py-5 ${className}`}>
                <p>No items to display.</p>
            </div>
        );
    }

    return (
        <div id="pagination-wrapper" className={className}>
            {/* Current page rows */}
            {currentPageRows}
            
            {/* Pagination Controls */}
            {showPagination && totalPages > 1 && (
                <div className="d-flex justify-content-center mt-4">
                    <Pagination>
                        <Pagination.Prev 
                            disabled={currentPage === 1}
                            onClick={() => currentPage > 1 && handlePageChange(currentPage - 1)}
                        />
                        {renderPaginationItems()}
                        <Pagination.Next 
                            disabled={currentPage === totalPages}
                            onClick={() => currentPage < totalPages && handlePageChange(currentPage + 1)}
                        />
                    </Pagination>
                </div>
            )}
            
            {/* Page Info */}
            {showPagination && totalPages > 1 && (
                <div className="text-center mt-2 text-muted">
                    <small>
                        Showing {startIndex + 1}-{Math.min(endIndex, rowsArray.length)} of {actualTotalItems} {itemLabel}
                    </small>
                </div>
            )}
        </div>
    );
};

export default PaginationWrapper;
