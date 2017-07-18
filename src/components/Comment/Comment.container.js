import React from 'react'
import { avatarUrl } from '../../constants'
import './Comment.style.css'

const CommentContainer = ({ username, comment }) => (
  <div className="CommentContainer">
    <img
      src={avatarUrl}
      alt="Poster Avatar"
      className="userAvatar"
    />
    <div className="usernameCommentBlock">
      <span className="username">{username}</span>
      <span className="comment">{comment}</span>
    </div>
    <div className="linebreak" />
  </div>
)

export default CommentContainer
