import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { withStyles } from "@material-ui/styles";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import PhotoSizeSelectActualIcon from "@material-ui/icons/PhotoSizeSelectActual";
import MovieIcon from "@material-ui/icons/Movie";

const useStyles = theme => ({
  alignRight: {
    display: "flex",
    justifyContent: "right",
  },
  buttonUnhover: {
    color: "#8c8c8c",
  },
  buttonHover: {
    color: "#8360c3",
  },
});

class LinksMedia extends Component {
  handleClick=()=>{
  }

  render() {
    const {classes} = this.props;
    return (
      <React.Fragment>
        <Grid item xs={6} className={classes.alignRight}>
          <Button
            className={
              this.props.history.location.pathname === "/"
                ? classes.buttonHover
                : classes.buttonUnhover
            }
            onClick={()=>this.props.history.push("/")}
            startIcon={<PhotoSizeSelectActualIcon />}
          >
            Images
          </Button>
        </Grid>
        <Grid item xs={6}>
          <Button
            className={
              this.props.history.location.pathname === "/videos"
                ? classes.buttonHover
                : classes.buttonUnhover
            }
            startIcon={<MovieIcon />}
            onClick={()=>this.props.history.push("/videos")}
          >
            Videos
          </Button>
        </Grid>
      </React.Fragment>
    );
  }
}

export default withRouter(withStyles(useStyles)(LinksMedia));
