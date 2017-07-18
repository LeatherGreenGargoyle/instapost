import React from 'react'
import PropTypes from 'prop-types'
import Post from '../Post'
import FontAwesome from 'react-fontawesome'
import './Feed.style.css'

const Feed = ({ posts }) => (
  <div className="feed">
    <div className="appBar">
      <FontAwesome
        className="cameraIcon"
        name="camera"
        size="2x"
      />
      <span className="appTitle">Instagram</span>
      <FontAwesome
        className="messagesIcon"
        name="paper-plane-o"
        size="2x"
      />
    </div>
    {posts.map((post, i) => <Post key={i} postObj={post} postIdx={i} />)}
  </div>
)

Feed.propTypes = {
  posts: PropTypes.array.isRequired,
}

export default Feed
