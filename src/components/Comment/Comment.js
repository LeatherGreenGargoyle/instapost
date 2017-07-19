import React from 'react'
import PropTypes from 'prop-types'
import FontAwesome from 'react-fontawesome'
import { avatarUrl } from '../../constants'
import './Comment.style.css'

const Comment = ({ username, comment }) => (
  <div className="Comment">
    <img
      src={avatarUrl}
      alt="Poster Avatar"
      className="userAvatar"
    />
    <div className="usernameCommentBlock">
      <span className="username">{username}</span>
      <span className="comment">{comment}</span>
    </div>
    <div className="heartCommentIcon">
      <FontAwesome
        name="heart-o"
      />
    </div>
    <div className="linebreak" />
  </div>
)

Comment.propTypes = {
  username: PropTypes.string.isRequired,
  comment: PropTypes.string.isRequired,
}

export default Comment
