import React from 'react'
import { Link } from 'react-router-dom'
import FontAwesome from 'react-fontawesome'
import PropTypes from 'prop-types'
import Comment from '../Comment'
import './CommentsList.style.css'

const CommentsList = ({ comments, handleCommentInput, handleCommentSubmit, inputfieldValue }) => (
  <div className="CommentsListContainer">
    
    <div className="CommentsTopBar">
      <Link to="/">
        <FontAwesome className="commentsBackIcon" name="angle-left" size="2x" />
      </Link>
      <span className="CommentsHeader">Comments</span>
    </div>

    <div className="commentsList">
      {comments.map(comment => (
        <Comment
          key={comment.id}
          comment={comment.comment}
          username={comment.name}
        />
      ))}
    </div>

    <form className="commentForm" onSubmit={handleCommentSubmit}>
      <FontAwesome className="sendIcon" name='paper-plane-o' size="2x" />

      <input
        className="commentInputField"
        type="text"
        placeholder="Add a comment..."
        onChange={handleCommentInput}
        value={inputfieldValue}
      />

      <span
        className="postCommentButton"
        onClick={handleCommentSubmit}
      >
        Post
      </span>

    </form>
  </div>
)

CommentsList.propTypes = {
  comments: PropTypes.array.isRequired,
  handleCommentSubmit: PropTypes.func.isRequired,
  handleCommentInput: PropTypes.func.isRequired,
  inputfieldValue: PropTypes.string.isRequired,
}

export default CommentsList
