import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  card: {
    margin: 40
  },
  media: {
    height: 240,
  },
  details: {
   
      flex: '1 0 auto',
  },
  content: {
      flex: '1 0 auto',
    
  }
});

 function PageCampaign(props) {

  var posts = props.data.posts;
  const classes = useStyles();

  return (
<div className='container'>


{ posts ? 
  posts.map((item, i) =>
                      <div className="campaign-component" key={i}> 
    <Card className={classes.card}>
    
    <div className={classes.details}>
      <div className='row'>
      <div className='col-sm-5'>
       <CardMedia
          className={classes.media}
          image="https://www.w3schools.com/howto/img_forest.jpg"
          title="Contemplative Reptile"
        />
         </div>
      <div className='col-sm-7'>
      <CardActionArea  >
       
        <CardContent >
          <Typography gutterBottom variant="h5" component="h2">
          {item.name}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
          {item.description}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button  variant="outlined" size="small" color="primary" onClick={props.click.bind(this, item._id)}>
          Learn More
        </Button>
      </CardActions>
      </div>
      </div>
    </div>
    </Card>
    </div>
                  ) :  "Loading..."
            }
   
  
  </div>
  );
}

export default  PageCampaign;

