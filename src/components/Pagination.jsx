import React from 'react'
import PropTypes from 'prop-types'
import './Pagination.css'; 

const Pagination = ({prevPage,page,nextPage, selectPage}) => {
  return (
    <nav >
    <ul className="pagination justify-content-center"   >
      <li className={`page-item ${page === 1 ? 'disabled' : ''}`} onClick={prevPage}>
        <a className="page-link" href='#'>Previous</a>
      </li>
      {page > 2  && (
        <li className="page-item">
          <a className="page-link" href='#' onClick={() => selectPage(page - 2)}>{page - 2}</a>
        </li>
      )}
      {page !== 1 && (
        <li className="page-item">
          <a className="page-link" href='#' onClick={() => selectPage(page - 1)}>{page - 1}</a>
        </li>
      )}
      <li className="page-item active">
        <a className="page-link " onClick={() => selectPage(page)}>{page}</a>
      </li>
      <li className="page-item">
        <a className="page-link" href='#' onClick={() => selectPage(page + 1)}>{page + 1}</a>
      </li>
      <li className="page-item">
        <a className="page-link" href='#' onClick={() => selectPage(page + 2)}>{page + 2}</a>
      </li>
      <li className="page-item" onClick={nextPage}>
        <a className="page-link" href='#'>Next</a>
      </li>
    </ul>
  </nav>
  
  )
}
Pagination.propTypes = {
  prevPage: PropTypes.func.isRequired,
  page: PropTypes.number.isRequired,
  nextPage: PropTypes.func.isRequired,
  selectPage: PropTypes.func.isRequired,
};
export default Pagination
