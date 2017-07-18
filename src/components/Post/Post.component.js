import React from 'react'
import PropTypes from 'prop-types'
import TopBar from '../TopBar'
import Photo from '../Photo'
import ButtonBar from '../ButtonBar'
import { postUrl } from '../../constants'
import './Post.style.css'

const Post = ({ postIdx, postObj }) => (
  <div className="post">
    <TopBar
      username={postObj.user.name}
      userAvatar={'default_avatar.png'}
    />
    <Photo
      photoPath={postUrl}
    />
    <ButtonBar
      postIdx={postIdx}
      postLikes={postObj.likes}
    />
  </div>
)

Post.propTypes = {
  postIdx: PropTypes.number.isRequired,
  postObj: PropTypes.object.isRequired,
}

export default Post
