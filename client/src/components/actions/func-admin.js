import axios from 'axios'

export const getAllUser = () => {
    return axios
      .get('getusers')
      .then(response => {
        if(response.data.error) {
          console.log("This user doesn't exist");
        }
        else {
          
         
          return response.data
        
        }
        
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

  export const getOneUser = userId => {
    return axios
      .get('user', { params: {
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

  export const deleteUser = userId => {
    return axios
      .get('delete', { params: {
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

  export const deleteCampaign = campaignId => {
    return axios
      .get('delete-campaign', { params: {
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

  export const getOneCampaign = campaignId => {
    return axios
      .get('getone-campaign', { params: {
        campaignId:campaignId
      }})
      .then(response => {
        return response.data
        
      })
      .catch(err => {
        console.log(err)
      })
  }


  export const changeRole = data => {
  
    return axios
    .put('change-role', { params: {
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