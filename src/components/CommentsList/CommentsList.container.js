import React from 'react'
import { Link } from 'react-router-dom'

class CommentsListContainer extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return (
      <div>
        <span>Comments</span>
        <span>
          <Link to="/">To Feed</Link>
        </span>
      </div>
    )
  }
}

export default CommentsListContainer
