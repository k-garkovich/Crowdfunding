import axios from 'axios'


  export const create = newCampaign => {
      return axios
        .post('post', {
          name: newCampaign.name,
          description: newCampaign.description,
          bonuses: newCampaign.bonuses,
          subject: newCampaign.subject,
          video: newCampaign.video,
          tags: newCampaign.tags,
          image: newCampaign.image,
          amount_money: newCampaign.amount_money,
          date: newCampaign.date,
          userId: newCampaign.userId,
          userName: newCampaign.userName,
          userLast: newCampaign.userLast,
          money: newCampaign.money
        })
        .then(response => {
          
          return response.data
        })
        .catch(err => {
          console.log(err)
        })
  }

  export const getCampaign = userId => {
    return axios
      .get('get', { params: {
        userId:userId
      }
      })
      .then(response => {
        return response.data
        
      })
      .catch(err => {
        console.log(err)
      })
  }

  export const getAllCampaign = () => {
    return axios
      .get('getall')
      .then(response => {
        return response.data
        
      })
      .catch(err => {
        console.log(err)
      })
  }

  export const deleteCampaign = campaignId => {
    return axios
      .get('delete', { params: {
        campaignId:campaignId
      }
      })
      .then(response => {
        return response.data
        
      })
      .catch(err => {
        console.log(err)
      })
  }

  export const updateMoney = (data) => {
     
    return axios
      .put('update', { params: {
        data:data
      }
     
      })
      .then(response => {
        return response.data
        
      })
      .catch(err => {
        console.log(err)
      })
  }

  export const getOneCampaign = campaignId => {
    return axios
      .get('getone', { params: {
        campaignId:campaignId
      }})
      .then(response => {
        return response.data
        
      })
      .catch(err => {
        console.log(err)
      })
  }


  export const createNews = newNews => {
    return axios
      .post('create-news', {
        name: newNews.name,
        description: newNews.description,
        campaignId: newNews.campaignId
      })
      .then(response => {
        
        return response.data
      })
      .catch(err => {
        console.log(err)
      })
}

export const getNews = campaignId => {
  return axios
    .get('get-news', { params: {
      campaignId:campaignId
    }})
    .then(response => {
      return response.data
      
    })
    .catch(err => {
      console.log(err)
    })
}

export const updateCampaign = (data) => {
     
  return axios
    .put('update-campaign', { params: {
      data:data
    }
   
    })
    .then(response => {
      return response.data
      
    })
    .catch(err => {
      console.log(err)
    })
}

export const updateNews = (data) => {
     
  return axios
    .put('update-news', { params: {
      data:data
    }
   
    })
    .then(response => {
      return response.data
      
    })
    .catch(err => {
      console.log(err)
    })
}

export const deleteNews = newsId => {
  return axios
    .get('delete-news', { params: {
      newsId:newsId
    }
    })
    .then(response => {
      return response.data
      
    })
    .catch(err => {
      console.log(err)
    })
}