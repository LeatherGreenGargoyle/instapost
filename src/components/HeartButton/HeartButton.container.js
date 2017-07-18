import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import FontAwesome from 'react-fontawesome'
import { likeAction } from '../../store/actions'
import './HeartButton.style.css'

class HeartButtonContainer extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      liked: false,
    }
  }

  handleLikeAction = () => {
    this.props.likeAction(this.props.postIdx, !this.state.liked)
    this.setState({ liked: !this.state.liked} )
  }

  render() {
    const heartColor = this.state.liked ? {'color': 'red'} : {'color': 'black'}
    return (
      <span
        className="HeartButton"
        style={heartColor}
        onClick={this.handleLikeAction}
        >
      <FontAwesome
        className="hearticon"
        name='heart'
      />
      </span>
    )
  }
}

HeartButtonContainer.propTypes = {
  likeAction: PropTypes.func.isRequired,
  postIdx: PropTypes.number.isRequired,
}

const mapStateToProps = state => ({})

const mapDispatchToProps = dispatch => ({
  likeAction: (postIdx, likeBool) => dispatch(likeAction(postIdx, likeBool)),
})

export default connect(mapStateToProps, mapDispatchToProps)(HeartButtonContainer)
