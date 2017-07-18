import React from 'react'
import PropTypes from 'prop-types'
import Post from '../Post'
import './Feed.style.css'

const Feed = ({ posts }) => (
  <div className="feed">
    {posts.map(post => <Post postObj={post} />)}
  </div>
)

Feed.propTypes = {
  posts: PropTypes.array.isRequired,
}

export default Feed
