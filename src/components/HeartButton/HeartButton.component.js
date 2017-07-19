import React from 'react'
import PropTypes from 'prop-types'
import FontAwesome from 'react-fontawesome'
import './HeartButton.style.css'

const HeartButton = ({ handleLikeAction, heartColor, heartStyle }) => (
  <span
    className="HeartButton"
    style={heartColor}
    onClick={handleLikeAction}
  >
    <FontAwesome
      name={heartStyle}
      size="2x"
    />
  </span>
)

HeartButton.propTypes = {
  handleLikeAction: PropTypes.func.isRequired,
  heartColor: PropTypes.object.isRequired,
  heartStyle: PropTypes.string.isRequired,
}

export default HeartButton
