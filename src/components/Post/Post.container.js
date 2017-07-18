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
      <Post
        postObj={this.props.postObj}
        postIdx={this.props.postIdx}
      />
    )
  }
}

PostContainer.propTypes = {
  postIdx: PropTypes.number.isRequired,
  postObj: PropTypes.object.isRequired,
}

export default PostContainer
