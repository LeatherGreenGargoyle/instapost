import React from 'react'
import PropTypes from 'prop-types'
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
      </div>
    )
  }
}

ButtonBarContainer.propTypes = {
  postIdx: PropTypes.number.isRequired,
}

export default ButtonBarContainer
