import React from "react";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";

const apiStyles = makeStyles({
  labelApi: {
    marginTop: "-25px",
    paddingRight: "11% !important",
    color: "gray",
  },
});

export default function apiCaption() {
  const classes = apiStyles();
  return (
    <Grid className={classes.labelApi} item align="right" xs={12}>
      <Typography variant="caption">Api by Pixabay</Typography>
    </Grid>
  );
}
