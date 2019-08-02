import React from 'react';
import MaterialTable from 'material-table';
import {withRouter} from 'react-router-dom'

 function TableCampaign(props) {
     const posts = props.posts
 
  const [state] = React.useState({
    columns: [
      { title: 'Name', field: 'name' },
      { title: 'Description', field: 'description' },
      { title: 'Amount of money', field: 'amount_money' },
      { title: 'User name', field: 'userName'}
    ],

   
   
  }

   
  );

  return (
    <MaterialTable
      title="List of campaigns"
      columns={state.columns}
      data={posts}

      editable={
        (data)=>{
          return (
            <button className="btn btn-dark" onClick={props.onDelete.bind(this, data._id)}>D </button>
          )
        }
      }

      actions={[
        {
          icon: 'view_column',
          tooltip: 'Page campaign',
          onClick: (event, rowData) => {
           
          props.onSub( rowData._id)
          }
        },
        {
          icon: 'delete',
          tooltip: 'Delete campaign',
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

export default withRouter(TableCampaign)