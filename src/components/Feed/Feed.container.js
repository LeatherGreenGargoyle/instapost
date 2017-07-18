import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import Feed from './Feed.component'

class FeedContainer extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return (
      <div>
        <Feed
          posts={this.props.posts}
        />
      </div>
    )
  }
}

FeedContainer.propTypes = {
  posts: PropTypes.array.isRequired,
}

const mapStateToProps = state => ({ posts: state.posts })

export default connect(mapStateToProps)(FeedContainer)
