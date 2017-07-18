export const actionTypes = {
  LIKE_ACTION: 'LIKE_ACTION',
  SET_CURR_POST: 'SET_CURR_POST',
  POST_COMMENT: 'POST_COMMENT',
}

export const data = [
  {
    "id": 1,
    "user": {
      "id": 1,
      "name": "nerdexplainsitall"
    },
    "image": "hackathon.jpg",
    "likes": 34,
    "comments": [
      {
        "id": 1,
        "name": "nerdexplainsitall",
        "comment": "#programming #coding #nerdexplainsitall"
      },
      {
        "id": 2,
        "name": "bart_simpson",
        "comment": "Don't have a cow, Man!"
      },
      {
        "id": 3,
        "name": "lisa_simpson",
        "comment": "Mom, romance is dead. It was acquired in a hostile takeover by Hallmark and Disney, homogenized, and sold off piece by piece."
      },
      {
        "id": 4,
        "name": "homer_simpson",
        "comment": "Oh, so they have internet on computers now!"
      },
      {
        "id": 5,
        "name": "marge_simpson",
        "comment": "Wow, your first day at the new school! Lisa, have fun. Bart, don't!"
      }
    ]
  }
]
