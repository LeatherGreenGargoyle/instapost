import React from 'react'
import PropTypes from 'prop-types'
import { avatarUrl } from '../../constants'
import './TopBar.style.css'

class TopBar extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return (
      <div className="TopBar">
        <img
          src={avatarUrl}
          alt="Poster Avatar"
          className="userAvatar"
        />
        <div className="usernameContainer">
          {this.props.username}
        </div>
        <span className="ellipsis">
          ...
        </span>
      </div>
    )
  }
}

TopBar.propTypes = {
  username: PropTypes.string.isRequired,
  userAvatar: PropTypes.string.isRequired,
}

export default TopBar
