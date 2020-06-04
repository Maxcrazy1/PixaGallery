import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import ImageSearchIcon from "@material-ui/icons/ImageSearch";
import Paper from "@material-ui/core/Paper";
import InputBase from "@material-ui/core/InputBase";
import IconButton from "@material-ui/core/IconButton";
import ApiCaption from "./apiCaption";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: "2px 4px",
    display: "flex",
    alignItems: "center",
    width: "80%",
  },
  input: {
    marginLeft: theme.spacing(1),
    flex: 1,
  },
}));

export default function FilterInput(props) {
  const classes = useStyles();

  return (
    <React.Fragment>
      <Grid item xs={12} align="center">
        <Paper component="form" className={classes.root}>
          <InputBase
            className={classes.input}
            onChange={props.handleChange}
            onKeyDown={props.handleEnter}
            placeholder={window.location.pathname==="/"?"Finder images":"Finder Videos"}
            inputProps={{ "aria-label": "search google maps" }}
          />
          <IconButton
            onClick={props.handleClick}
            className={classes.iconButton}
            aria-label="search"
          >
            <ImageSearchIcon />
          </IconButton>
        </Paper>
      </Grid>
      <ApiCaption />
    </React.Fragment>
  );
}
