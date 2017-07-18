import { combineReducers } from 'redux'
import { data, actionTypes } from '../constants'

const posts = (state = data, { type, payload }) => {
  const newState = [...state]
  switch (type) {
 // payload will be {postIdx: num, like: bool}
    case actionTypes.LIKE_ACTION:
      if (payload.like) {
        newState[payload.postIdx].likes++
      } else {
        newState[payload.postIdx].likes--
      }
      return newState

// payload will be {postIdx: num, commentObj: {id, name, comment}}
    case actionTypes.POST_COMMENT:
      newState[payload.postIdx].comments.push(payload.commentObj)
      return newState

    default:
      return state
  }
}

export default combineReducers({ posts })
