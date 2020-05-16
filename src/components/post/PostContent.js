import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import FormLabel from "@material-ui/core/FormLabel";
const useStyles = makeStyles(theme => ({
  postTitle: {
    fontWeight: 500,
    fontSize: "120%",
    marginBottom: "0.85em"
  },
  postContent: {
    color: "#777575"
  },
  formLabel: {
    border: "1px #9e9c9c solid",
    padding: '4px 10px',
    borderRadius: 2,
    fontSize: "90%",
    marginLeft: 6
  }
}));
function PostContent() {
  const classes = useStyles();
  return (
    <div>
      <Grid container spacing={0}>
        <Grid item>
          <Typography variant="h5" className={classes.postTitle}>
            What is a programmer’s life like?
          </Typography>
        </Grid>
        <Grid item>
          <Typography
            variant="subtitle1"
            gutterBottom
            className={classes.postContent}
          >
            subtitle1. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Quos blanditiis tenetur How is their personal life, family life,
            friends, work environment and everything that you can think that a
            programmer does throughout the day?
          </Typography>
        </Grid>
        <Grid item style={{margin:'15px 0'}}>
          <FormLabel className={classes.formLabel}>English</FormLabel>
          <FormLabel className={classes.formLabel}>Hindi</FormLabel>
        </Grid>
      </Grid>
    </div>
  );
}

export default PostContent;
