import React from 'react'
import PropTypes from 'prop-types'
import FontAwesome from 'react-fontawesome'
import { Link } from 'react-router-dom'
import './ButtonBar.style.css'
import HeartButton from '../HeartButton'

const ButtonBarContainer = ({ postIdx, postLikes }) => (
  <div className="ButtonBar">
    <HeartButton
      postIdx={postIdx}
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

ButtonBarContainer.propTypes = {
  postIdx: PropTypes.number.isRequired,
  postLikes: PropTypes.number.isRequired,
}

export default ButtonBarContainer
