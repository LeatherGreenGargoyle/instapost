import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import FontAwesome from 'react-fontawesome'
import { postComment } from '../../store/actions'
import Comment from '../Comment'
import CommentsList from './CommentsList.component'
import './CommentsList.style.css'

class CommentsListContainer extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      textInputBody: '',
    }
  }

  handleCommentInput = (e) => this.setState({textInputBody: e.target.value}) 
  handleCommentSubmit = (e) => {
    e.preventDefault()
    this.props.postComment(this.state.textInputBody, 'defaultUser', this.props.posts[0].comments.length + 1)
    this.setState({textInputBody: ''})
  }

  render() {
    return (
      <CommentsList
        comments={this.props.posts[0].comments}
        handleCommentSubmit={this.handleCommentSubmit}
        handleCommentInput={this.handleCommentInput}
        inputfieldValue={this.state.textInputBody}
      />
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
