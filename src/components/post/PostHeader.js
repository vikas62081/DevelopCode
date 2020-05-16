import React from "react";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
const useStyles = makeStyles({
  root: {
    width: "100%",
    maxWidth: 500
  },
  name:{
      fontSize:'95%'
  }
});

export default function PostHeader() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={2}>
        <Grid item>
          <Typography variant="h6" className={classes.name} color="primary" gutterBottom>
            Martin Hope Enlightened
          </Typography>
        </Grid>
        <Grid item>
          <Typography variant="body" gutterBottom>
            Asked: <span color="primary">April 19, 2018</span>
          </Typography>
        </Grid>
        <Grid item>
          <Typography variant="body" gutterBottom>
            In: <span color="primary">Language</span>
          </Typography>
        </Grid>
      </Grid>
    </div>
  );
}
