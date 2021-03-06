import React from 'react'
import PropTypes from 'prop-types'
import FontAwesome from 'react-fontawesome'
import { Link } from 'react-router-dom'
import './ButtonBar.style.css'
import HeartButton from '../HeartButton'

const ButtonBar = ({ postIdx, postLiked, postLikes }) => (
  <div className="ButtonBar">
    <HeartButton
      postIdx={postIdx}
      postLiked={postLiked}
    />
    <Link to="/comments">
      <FontAwesome className="commentIcon" name="comment-o" size="2x" />
    </Link>
    <FontAwesome name='paper-plane-o' size="2x" />
    <span className="bookmarkIcon">
      <FontAwesome name="bookmark-o" size="2x" />
    </span>
    <div className="likes">
      {postLikes} Likes
    </div>
  </div>
)

ButtonBar.propTypes = {
  postIdx: PropTypes.number.isRequired,
  postLiked: PropTypes.bool.isRequired,
  postLikes: PropTypes.number.isRequired,
}

export default ButtonBar
