import React from 'react';
import MaterialTable from 'material-table';
import {withRouter} from 'react-router-dom'

  
   function UsersTable(props) {
       const posts = props.data.users
   
    const [state] = React.useState({
      columns: [
        { title: 'Email', field: 'email' },
        { title: 'Name', field: 'first_name' },
        { title: 'Last name', field: 'last_name' },
        { title: 'Role', field: 'role' },
        { title: 'ID', field: '_id'}
      ]
    });
  
    return (
      <MaterialTable
        title="List of users"
        columns={state.columns}
        data={posts}
  
        actions={[
          {
            icon: 'view_column',
            tooltip: 'Page user',
            onClick: (event, rowData) => {
              console.log(rowData._id)
            props.getUser(rowData._id)
            }
          },

          {
            icon: 'edit',
            tooltip: 'Change role',
            onClick: (event, rowData) => {
              props.onRole( rowData._id)
            }
          },

          {
            icon: 'delete',
            tooltip: 'Delete user',
            onClick: (event, rowData) => {
              props.onDelete( rowData._id)
            }
          }
        ]}
    
        options={{
          actionsColumnIndex: -1
        }}
           
      
      />
    );
  }
  
  export default withRouter(UsersTable)