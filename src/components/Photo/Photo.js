import React from 'react'
import './Photo.style.css'

const Photo = ({ photoPath }) => (
  <div className="photoContainer">
    <img
      src={photoPath}
      alt="Post"
      className="photo"
    />
  </div>
)

export default Photo
