import React from 'react'



function UserInfo(props) {
   
    return <table className="table col-md-6 mx-auto">
    <tbody>
      <tr>
        <td>Fist Name</td>
        <td>{props.data.first_name}</td>
      </tr>
      <tr>
        <td>Last Name</td>
        <td>{props.data.last_name}</td>
      </tr>
      <tr>
        <td>Email</td>
        <td>{props.data.email}</td>
      </tr>
      <tr>
        <td>Id</td>
        <td>{props.data._id}</td>
      </tr>
      <tr>
        <td>Role</td>
        <td>{props.data.role}</td>
      </tr>
    </tbody>
  </table>;
}

export default UserInfo