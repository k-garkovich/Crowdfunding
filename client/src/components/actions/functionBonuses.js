import axios from 'axios'


  export const createBonus = newBonus => {
      return axios
        .post('create-bonus', {
          name: newBonus.name,
          description: newBonus.description,
          cost: newBonus.cost,
          campaignId: newBonus.campaignId
        })
        .then(response => {
        
          return response.data
        })
        .catch(err => {
          console.log(err)
        })
  }

  export const getBonuses = campaignId => {
    return axios
      .get('get-bonuses', { params: {
        campaignId:campaignId
      }})
      .then(response => {
        return response.data
        
      })
      .catch(err => {
        console.log(err)
      })
  }

  export const saveBonus =  (data) => {
    
    return axios
      .post('save-bonus', {
        data:data
        
      })
      .then(response => {
      
        return response.data
      })
      .catch(err => {
        console.log(err)
      })
}

export const getBonusesUser = userId => {
  return axios
    .get('get-bonuses-user', { params: {
      userId:userId
    }})
    .then(response => {
      return response.data
      
    })
    .catch(err => {
      console.log(err)
    })
}

export const getBonusesId = bonusId => {
  
  return axios
    .get('get-bonuses-id', { params: {
      bonusId:bonusId
    }})
    .then(response => {
     
      return response.data
      
    })
    .catch(err => {
      console.log(err)
    })
}

export const deleteBonus = bonusId => {
  return axios
    .get('delete-bonus', { params: {
      bonusId:bonusId
    }
    })
    .then(response => {
      return response.data
      
    })
    .catch(err => {
      console.log(err)
    })
}