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
      <div className="sendIcon">
        <FontAwesome name='paper-plane-o' size="2x" />
      </div>

      <textarea
        className="commentInputField"
        type="text"
        placeholder="Add a comment..."
        onChange={handleCommentInput}
        value={inputfieldValue}
      />

      <div
        className="postCommentButton"
        onClick={handleCommentSubmit}
      >
        Post
      </div>

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
