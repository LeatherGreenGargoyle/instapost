import { combineReducers } from 'redux'
import { data, actionTypes } from '../constants'

const posts = (state = data, { type, payload }) => {
  const newState = [...state]
  switch (type) {
    case actionTypes.LIKE_ACTION:
      if (payload.like) {
        newState[payload.postIdx].likes++
        newState[payload.postIdx].liked = true
      } else {
        newState[payload.postIdx].likes--
        newState[payload.postIdx].liked = false
      }
      return newState

    case actionTypes.POST_COMMENT:
      newState[0].comments.push(payload)
      return newState

    default:
      return state
  }
}

export default combineReducers({ posts })
