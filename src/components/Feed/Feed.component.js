import React from 'react'
import PropTypes from 'prop-types'

const Feed = ({ posts }) => (
  <div>
    {posts[0].user.name}
  </div>
)

Feed.propTypes = {
  posts: PropTypes.array.isRequired,
}

export default Feed
