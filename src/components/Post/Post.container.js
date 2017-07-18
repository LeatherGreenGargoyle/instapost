import React from 'react'
import PropTypes from 'prop-types'
import Post from './Post.component'

class PostContainer extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return (
      <div className="post">
        <Post postObj={this.props.postObj} />
      </div>
    )
  }
}

PostContainer.propTypes = {
  postObj: PropTypes.object.isRequired,
}

export default PostContainer
