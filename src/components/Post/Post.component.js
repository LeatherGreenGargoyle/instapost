import React from 'react'
import PropTypes from 'prop-types'
import TopBar from '../TopBar'
import Photo from '../Photo'
import { postUrl } from '../../constants'
import './Post.style.css'

const Post = ({ postObj }) => (
  <div className="post">
    <TopBar
      username={postObj.user.name}
      userAvatar={'default_avatar.png'}
    />
    <Photo
      photoPath={postUrl}
    />
  </div>
)

Post.propTypes = {
  postObj: PropTypes.object.isRequired,
}

export default Post
