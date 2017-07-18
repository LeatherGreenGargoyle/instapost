import React from 'react'
import { Link } from 'react-router-dom'

class FeedContainer extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return (
      <div>
        <span>Feed</span>
        <span>
          <Link to="/comments">To Comments</Link>
        </span>
      </div>
    )
  }
}

export default FeedContainer