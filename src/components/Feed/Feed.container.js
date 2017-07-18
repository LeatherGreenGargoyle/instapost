import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
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

FeedContainer.propTypes = {
  posts: PropTypes.array.isRequired,
}

const mapStateToProps = state => ({ posts: state.posts })

export default connect(mapStateToProps)(FeedContainer)
