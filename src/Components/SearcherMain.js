import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import SearchFilter from "../Components/InputSearch";
import LinksMedia from "./LinksMedia";
import FetchMedia from "../Containers/FetchMedia";
import CardLibraries from "../Components/LibrariesInformation";

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
    padding: "2rem",
  },
  
});

export default function App(props) {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <LinksMedia />
        <SearchFilter
          handleEnter={props.handleEnter}
          handleChange={props.handleChange}
          handleClick={props.handleClick}
        />
        <FetchMedia
          dataMedia={props.dataMedia}
          fetchMoreMedia={props.fetchMoreMedia}
        />
        <CardLibraries />
      </Grid>
    </div>
  );
}
