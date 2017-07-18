import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import FontAwesome from 'react-fontawesome'
import { postComment } from '../../store/actions'
import Comment from '../Comment'
import './CommentsList.style.css'

class CommentsListContainer extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      textInputBody: '',
    }
  }

  render() {
    return (
      <div className="CommentsListContainer">
        <div className="CommentsTopBar">
          <Link to="/"><FontAwesome name="angle-left" size="2x" /></Link>
          <span className="CommentsHeader">Comments</span>
        </div>
        <div className="commentsList">
          {this.props.posts[0].comments.map(comment => (
            <Comment
              key={comment.id}
              comment={comment.comment}
              username={comment.name}
            />
          ))}
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  posts: state.posts,
})

const mapDispatchToProps = dispatch => ({
  postComment: (comment, username, id) => dispatch(postComment({
    id,
    name: username,
    comment,
  })),
})

export default connect(mapStateToProps, mapDispatchToProps)(CommentsListContainer)
