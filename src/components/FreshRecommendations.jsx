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

export default function FreshRecomendations(props) {
  const classes = useStyles();

  return (
    <div className="FreshRecommendations">
      <Typography variant="subtitle1" gutterBottom style={{ fontSize: "25px", color: "Black" }}>
        {props.text}
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={3}>
          <Paper className={classes.paper}><RecipeReviewCard image={require("../img/car 4.jpg")} price="1,00,00,000" location="Emaar Town Islamabad" date="09 Oct" spec="Auto gare + New sound System" /></Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper className={classes.paper}><RecipeReviewCard image={require("../img/house16.jpg")} price="19,00,000" location="Bahria Town Islamabad" date="03 Oct" spec="5 Marla - 3 Beds" /></Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper className={classes.paper}><RecipeReviewCard image={require("../img/car5.jpg")} price="2,00,000" location="PWD Islamabad" date="12 Oct" spec="Auto gare + New sound System" /></Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper className={classes.paper}><RecipeReviewCard image={require("../img/tv box.jpg")} price="25,000" location="CBR Town Islamabad" date="11 Oct" spec="WIFI + Internet Cable Support 1080 HD" /></Paper>
        </Grid>
      </Grid>
      <Grid container spacing={3}>
        <Grid item xs={3}>
          <Paper className={classes.paper}><RecipeReviewCard image={require("../img/car.jpg")} price="2,00,000" location="Emaar Town Islamabad" date="09 Oct" spec="Auto gare + New sound System" /></Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper className={classes.paper}><RecipeReviewCard image={require("../img/house5.jpg")} price="1,00,00,000" location="Bahria Town Islamabad" date="03 Oct" spec="5 Marla - 3 Beds" /></Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper className={classes.paper}><RecipeReviewCard image={require("../img/netflix.jpg")} price="2,00,000" location="PWD Islamabad" date="12 Oct" spec="10 Year Free Subsrciption" /></Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper className={classes.paper}><RecipeReviewCard image={require("../img/tv.jpg")} price="5,00,00,000" location="CBR Town Islamabad" date="11 Oct" spec="WIFI + Internet Cable Support 1080 HD" /></Paper>
        </Grid>
      </Grid><Grid container spacing={3}>
        <Grid item xs={3}>
          <Paper className={classes.paper}><RecipeReviewCard image={require("../img/mobile.png")} price="1,00,000" location="Emaar Town Islamabad" date="09 Oct" spec="8GB RAM 128 Storage Andriod 10+ Version" /></Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper className={classes.paper}><RecipeReviewCard image={require("../img/tv box.jpg")} price="19,00,000" location="Bahria Town Islamabad" date="03 Oct" spec="Remote + WIFI Control+ Andriod Setup" /></Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper className={classes.paper}><RecipeReviewCard image={require("../img/house2.jpg")} price="2,00,000" location="PWD Islamabad" date="12 Oct" spec="10 Marla - 4 Beds" /></Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper className={classes.paper}><RecipeReviewCard image={require("../img/house3.jpg")} price="25,00,90,000" location="CBR Town Islamabad" date="11 Oct" spec="7 Marla - 3 Beds" /></Paper>
        </Grid>
      </Grid><Grid container spacing={3}>
        <Grid item xs={3}>
          <Paper className={classes.paper}><RecipeReviewCard image={require("../img/plot.jpg")} price="21,10,00,000" location="Emaar Town Islamabad" date="09 Oct" spec="5 Marla - 3 Beds" /></Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper className={classes.paper}><RecipeReviewCard image={require("../img/house1.jpg")} price="19,13,00,000" location="Bahria Town Islamabad" date="03 Oct" spec="5 Marla - 3 Beds" /></Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper className={classes.paper}><RecipeReviewCard image={require("../img/house2.jpg")} price="2,77,00,000" location="PWD Islamabad" date="12 Oct" spec="10 Marla - 4 Beds" /></Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper className={classes.paper}><RecipeReviewCard image={require("../img/house3.jpg")} price="25,09,00,000" location="CBR Town Islamabad" date="11 Oct" spec="7 Marla - 3 Beds" /></Paper>
        </Grid>
      </Grid>
      <Grid item xs={3}>
          <Paper className={classes.paper}><RecipeReviewCard image={require("../img/house3.jpg")} price="25,09,00,000" location="CBR Town Islamabad" date="11 Oct" spec="7 Marla - 3 Beds" /></Paper>
        </Grid>
        <div className="text-center"><button className="btn-load" onClick="FreshRecomendations()">Load more</button></div>
        
    </div>
  );
}
