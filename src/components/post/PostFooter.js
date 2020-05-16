import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: "#f4f4f4",
    padding:'10px'
  }
}));

export default function PostFooter() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={0}>
        <Grid item xs={4} sm={3}>
          <Button variant="outlined" color="primary">
            7 Answers
          </Button>
        </Grid>
        <Grid item xs={4}sm={3}>
          <Button variant="outlined" color="primary" disabled>
            826 views
          </Button>
        </Grid>
        <Grid item xs={4}sm={3}>
          <Button variant="contained" color="primary">
            Answer
          </Button>
        </Grid>
        <Grid item xs={3}></Grid>
      </Grid>
    </div>
  );
} 
