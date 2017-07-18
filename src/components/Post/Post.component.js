import React from 'react'
import PropTypes from 'prop-types'

const Post = ({ postObj }) => (
  <div>
    {postObj.user.name}
  </div>
)

Post.propTypes = {
  postObj: PropTypes.object.isRequired,
}

export default Post
