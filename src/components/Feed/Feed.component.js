import React from 'react'
import PropTypes from 'prop-types'
import Post from '../Post'

const Feed = ({ posts }) => (
  <div>
    {posts.map(post => <Post postObj={post} />)}
  </div>
)

Feed.propTypes = {
  posts: PropTypes.array.isRequired,
}

export default Feed
