import React from 'react';
import './Pagination.scss';
import usePagination from '../../utils/hooks/usePagination';
import useIsMobileResolution from '../../utils/hooks/useIsMobile';

type PaginationProps = {
  currentPage: number | undefined;
  totalPages: number | null;
};

const Pagination = ({ currentPage, totalPages }: PaginationProps) => {
  const { handleNextPage, handlePrevPage } = usePagination();
  // const isMobile = useIsMobileResolution({ mobileResolution: 992 });

  return (
    <div className="pagination">
      <p className="pagination__counter">
        0{currentPage}/0{totalPages}
      </p>
      <div className="pagination__buttons">
        <button
          // style={{
          //   width: isMobile ? '25px' : '50px',
          //   height: isMobile ? '25px' : '50px',
          // }}
          className="pagination__button button_prev"
          disabled={currentPage === 1}
          onClick={handlePrevPage}
        />
        <button
          // style={{
          //   width: isMobile ? '25px' : '50px',
          //   height: isMobile ? '25px' : '50px',
          // }}
          className="pagination__button button_next"
          disabled={currentPage === totalPages}
          onClick={handleNextPage}
        />
      </div>
    </div>
  );
};

export default Pagination;
