import React from 'react'

function UserInfo(props) {
 
   var users = props.data.users
  
    return <div className="container">
    
        <div className="col-sm-8 mx-auto">
            <h1 className="text-center">PROFILE</h1>
        </div>
        <br/>
        <br/>
                    {
                    users
                        ? users.map((item, i) =>
                             <div className="campaign-component" key={i}> 

                                    <h5>First Name  -  {item.first_name}</h5>
                                    <hr/>
                                    <h5>Last Name  -  {item.last_name}</h5>
                                    <hr/>
                                    <h5>Email  -  {item.email}</h5>
                                    <hr/>
                                    <h5>Id  -  {item._id}</h5>
                                    <hr/>
                                    <h5>Role  -  {item.role}</h5>
                            </div>
                            )
                        :  "Loading..." }
                   
                   <br/>
                   </div>
    
}

export default UserInfo