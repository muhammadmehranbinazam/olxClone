import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345
  },
  media: {
    height: 0,
    paddingTop: "56.25%" // 16:9
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest
    })
  },
  expandOpen: {
    transform: "rotate(180deg)"
  },
  avatar: {
    backgroundColor: red[500]
  }
}));

export default function RecipeReviewCard(props) {
  const classes = useStyles();
  // console.log("this is image",props.image)
  return (
    <Card className={classes.root}>
      <IconButton aria-label="add to favorites" style={{ float: "right" }}>
        <FavoriteIcon />
      </IconButton>
      {console.log("this is image",props.image)}
      <CardMedia
        className={classes.media}
        image={props.image}
        
        title="Paella dish"
      />
      <CardContent>
        <Typography
          variant="body0"
          color="black"
          font_Weight="bolder"
          component="h4"
          style={{textAlign:"left"}}
        >
          {props.price}
        </Typography>
        <Typography
          variant="body1"
          color="black"
          font_Weight="bolder"
          component="h5"
          style={{textAlign:"left"}}
        >
          {props.spec}
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p" style={{textAlign:"left"}}>
          {props.location}
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p" style={{float:"right"}}>
          {props.date}
        </Typography>
      </CardContent>
   
    </Card>
  );
}
