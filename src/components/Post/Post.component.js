import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
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
      postLiked={postObj.liked}
    />
    <div className="caption">
      <span className="captionUsername">{postObj.user.name}</span>
      <span className="captionCommentClip">
        {postObj.comments[0].comment} ...
      </span>
      <span>
        <Link to="/comments" style={{ textDecoration: 'none' }}>
          <span className="moreCommentsLink">more</span>
        </Link>
      </span>
    </div>
  </div>
)

Post.propTypes = {
  postIdx: PropTypes.number.isRequired,
  postObj: PropTypes.object.isRequired,
}

export default Post

