import React from 'react'
import PropTypes from 'prop-types'
import FontAwesome from 'react-fontawesome'
import { Link } from 'react-router-dom'
import './ButtonBar.style.css'
import HeartButton from '../HeartButton'

class ButtonBarContainer extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return (
      <div className="ButtonBar">
        <HeartButton
          postIdx={this.props.postIdx}
        />
        <span className="commentIcon" >
          <Link to="/comments">
            <FontAwesome name="comment-o" size="2x" />
          </Link>
        </span>
        <FontAwesome name='paper-plane-o' size="2x" />
        <span className="bookmarkIcon">
          <FontAwesome name="bookmark-o" size="2x" />
        </span>
        <div className="likes">
          {this.props.postLikes} Likes
        </div>
      </div>
    )
  }
}

ButtonBarContainer.propTypes = {
  postIdx: PropTypes.number.isRequired,
  postLikes: PropTypes.number.isRequired,
}

export default ButtonBarContainer
