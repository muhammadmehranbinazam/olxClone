import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import RecipeReviewCard from "./Card.jsx";
import "../App.css";
const useStyles = makeStyles((theme) => ({
  container: {
    display: 'grid',
    gridTemplateColumns: 'repeat(12, 1fr)',
    gridGap: theme.spacing(3),
  },
  paper: {
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    whiteSpace: 'nowrap',
    marginBottom: theme.spacing(1),
  },
  divider: {
    margin: theme.spacing(2, 0),
  },
}));

export default function CSSGrid(props) {
  const classes = useStyles();

  return (
    <div className="lastSearch">
      <Typography variant="subtitle1" gutterBottom style={{fontSize:"25px",color:"Black"}}>
      {props.text}
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={3}>
          <Paper className={classes.paper}><RecipeReviewCard image={require("../img/plot.jpg")} price="21,00,00,000" location="Emaar Town Islamabad" date="09 Oct" spec="5 Marla - 3 Beds"/></Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper className={classes.paper}><RecipeReviewCard image={require("../img/house1.jpg") } price="19,00,00,000" location="Bahria Town Islamabad" date="03 Oct" spec="5 Marla - 3 Beds" /></Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper className={classes.paper}><RecipeReviewCard image={require("../img/house2.jpg") } price="2,00,00,000" location="PWD Islamabad" date="12 Oct" spec="10 Marla - 4 Beds" /></Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper className={classes.paper}><RecipeReviewCard image={require("../img/house3.jpg") } price="25,00,00,000" location="CBR Town Islamabad" date="11 Oct" spec="7 Marla - 3 Beds" /></Paper>
        </Grid> 
      </Grid>
      
      
    </div>
  );
}
