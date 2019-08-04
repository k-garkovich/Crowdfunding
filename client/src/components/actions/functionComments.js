import axios from 'axios'


  export const createComment = newComment => {
      return axios
        .post('create-comment', {
            text: newComment.text,
            nameUser: newComment.nameUser,
            surnameUser: newComment.surnameUser,
            campaignId: newComment.campaignId,
        })
        .then(response => {
          return response.data
        })
        .catch(err => {
          console.log(err)
        })
  }

  export const getComments = campaignId => {
    return axios
      .get('get-comments', { params: {
        campaignId:campaignId
      }})
      .then(response => {
        return response.data
      })
      .catch(err => {
        console.log(err)
      })
  }


export const deleteComment = commentId => {
  return axios
    .get('delete-comment', { params: {
        commentId:commentId
    }
    })
    .then(response => {
      return response.data
      
    })
    .catch(err => {
      console.log(err)
    })
}