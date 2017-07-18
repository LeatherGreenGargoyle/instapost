import React from 'react'
import PropTypes from 'prop-types'
import { avatarUrl } from '../../constants'
import './TopBar.style.css'

class TopBarContainer extends React.Component {
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
        <span className="username">
          {this.props.username}
        </span>
        <span className="ellipsis">
          . . .
        </span>
      </div>
    )
  }
}

TopBarContainer.propTypes = {
  username: PropTypes.string.isRequired,
  userAvatar: PropTypes.string.isRequired,
}

export default TopBarContainer
