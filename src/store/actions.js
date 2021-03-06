import { actionTypes } from '../constants'

export const postComment = commentObj => ({ type: actionTypes.POST_COMMENT, payload: commentObj })

export const likeAction = (postIdx, likeBool) => ({
  type: actionTypes.LIKE_ACTION,
  payload: {
    like: likeBool,
    postIdx,
  },
})
