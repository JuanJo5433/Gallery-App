import React from 'react'
import PropTypes from 'prop-types'

const Card = ({img}) => {
  return (
    <div>
       
        <div 
      className="card">
        <img src={img} 
        className="card-img" 
        alt="..." />
      </div>
    </div>
  )
}

Card.propTypes = {
    img: PropTypes.string
}

export default Card
