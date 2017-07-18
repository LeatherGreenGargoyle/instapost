import React from 'react'
import PropTypes from 'prop-types'
import TopBar from '../TopBar'

const Post = ({ postObj }) => (
  <div>
    <TopBar
      username={postObj.user.name}
      userAvatar={'default_avatar.png'}
    />
  </div>
)

Post.propTypes = {
  postObj: PropTypes.object.isRequired,
}

export default Post
