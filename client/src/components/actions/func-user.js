import axios from 'axios'

export const register = newUser => {
  return axios
    .post('register', {
      first_name: newUser.first_name,
      last_name: newUser.last_name,
      email: newUser.email,
      password: newUser.password
    })
    .then(response => {
      console.log('Registered')
    })
    .catch(err => {
      console.log( err)
      
    })
}


export const login = user =>  {
    return axios
      .post('login', {
        email: user.email,
        password: user.password
      })
      .then(response => {
        if(response.data.error) {
          alert("This user doesn't exist");
        }
        else {
          localStorage.setItem('usertoken', response.data)
         
          return response.data
        }
      })
      .catch(err => {
        console.log(err)
      })
  }

  
export const getProfile = user => {
    return axios
      .get('profile', {
      })
      .then(response => {
      
        return response.data
      })
      .catch(err => {
        console.log(err)
      })
  }


  