import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import FontAwesome from 'react-fontawesome'
import { likeAction } from '../../store/actions'
import HeartButton from './HeartButton.component'

class HeartButtonContainer extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  handleLikeAction = () => {
    this.props.likeAction(this.props.postIdx, !this.props.postLiked)
  }

  render() {
    const heartColor = this.props.postLiked ? {'color': 'red'} : {'color': 'black'}
    const heartStyle = this.props.postLiked ? 'heart' : 'heart-o'
    return (
      <HeartButton
        handleLikeAction={this.handleLikeAction}
        heartColor={heartColor}
        heartStyle={heartStyle}
      />
    )
  }
}

HeartButtonContainer.propTypes = {
  likeAction: PropTypes.func.isRequired,
  postIdx: PropTypes.number.isRequired,
  postLiked: PropTypes.bool.isRequired,
}

const mapStateToProps = state => ({})

const mapDispatchToProps = dispatch => ({
  likeAction: (postIdx, likeBool) => dispatch(likeAction(postIdx, likeBool)),
})

export default connect(mapStateToProps, mapDispatchToProps)(HeartButtonContainer)
