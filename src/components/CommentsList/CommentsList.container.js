import React from 'react'
import { Link } from 'react-router-dom'
import FontAwesome from 'react-fontawesome'
import './CommentsList.style.css'

class CommentsListContainer extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return (
      <div className="CommentsList">
        <div className="CommentsTopBar">
          <Link to="/"><FontAwesome name="angle-left" size="2x" /></Link>
          <span className="CommentsHeader">Comments</span>
        </div>
      </div>
    )
  }
}

export default CommentsListContainer
