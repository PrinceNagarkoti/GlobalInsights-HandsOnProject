import React from 'react'
import './CountriesDetailShimmer.css'

function CountriesDetailShimmer() {
  return (
    <div className="country-details-container shimmer">
      <span className="back-button shimmer-line"></span>
      <div className="country-details">
        <div className="shimmer-flag shimmer-line"></div>
        <div className="details-text-container">
          <div className="shimmer-title shimmer-line"></div>
          <div className="details-text">
            <div className="shimmer-line"></div>
            <div className="shimmer-line"></div>
            <div className="shimmer-line"></div>
            <div className="shimmer-line"></div>
            <div className="shimmer-line"></div>
            <div className="shimmer-line"></div>
            <div className="shimmer-line"></div>
            <div className="shimmer-line"></div>
          </div>
          <div className="border-countries">
            <div className="shimmer-line"></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CountriesDetailShimmer
