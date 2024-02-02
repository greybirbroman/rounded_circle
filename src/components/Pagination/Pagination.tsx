import React from 'react';
import './Pagination.scss';
import usePagination from '../../utils/hooks/usePagination';

type PaginationProps = {
  currentPage: number | undefined;
  totalPages: number | null;
};

const Pagination = ({ currentPage, totalPages }: PaginationProps) => {
  const { handleNextPage, handlePrevPage } = usePagination();

  return (
    <div className="pagination">
      <p className="pagination__counter">
        0{currentPage}/0{totalPages}
      </p>
      <div className="pagination__buttons">
        <button
          type="button"
          className="pagination__button button_prev"
          disabled={currentPage === 1}
          onClick={handlePrevPage}
        />
        <button
          type="button"
          className="pagination__button button_next"
          disabled={currentPage === totalPages}
          onClick={handleNextPage}
        />
      </div>
    </div>
  );
};

export default Pagination;
