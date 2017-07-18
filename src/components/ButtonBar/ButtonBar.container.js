import React from 'react'
import PropTypes from 'prop-types'
import './ButtonBar.style.css'

class ButtonBarContainer extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {

    return (
      <div className="ButtonBar">
      </div>
    )
  }
}

ButtonBarContainer.propTypes = {
  username: PropTypes.string.isRequired,
  userAvatar: PropTypes.string.isRequired,
}

export default ButtonBarContainer
