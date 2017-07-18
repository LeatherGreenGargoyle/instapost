import React from 'react'
import './Photo.style.css'

const PhotoContainer = ({ photoPath }) => (
  <div className="photoContainer">
    <img
      src={photoPath}
      alt="Post"
      className="photo"
    />
  </div>
)

export default PhotoContainer
