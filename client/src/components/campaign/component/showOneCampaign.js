import React from 'react'



function PageOneCampaign(props) {

  var posts = props.posts.posts;

    return (

        <div>
            { posts?
              posts.map((item, i) =>
                      <div className="campaign-component" key={i}> 

                            <h2  className='text-left'> {item.name}</h2>
                            <br/>
                            <img src="https://www.w3schools.com/howto/img_forest.jpg" alt="new" />
                            <br/>
                            <br/>
                            <h5>{item.description}</h5>
                            <hr/>
                            <br/>

                            <div className='row'>
                              <div className='col-sm-6'>
                                <h5>Money:  {item.money} of {item.amount_money}€</h5>
                              </div>
                              <div className='col-sm-6'>
                              <h5>Expiry date  {item.date}</h5>
                              </div>
                            </div>
                            <br/>
                            <hr/>

                           
                      </div>
                  ) 
                  :  "Loading..."
            }
            
          </div>
    )
    
  }

export default PageOneCampaign