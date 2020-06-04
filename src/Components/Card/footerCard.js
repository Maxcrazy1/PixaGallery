import React from 'react'
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import CardActions from "@material-ui/core/CardActions";
import IconButton from "@material-ui/core/IconButton";
import FavoriteIcon from "@material-ui/icons/Favorite";
import VisibilityIcon from "@material-ui/icons/Visibility";

const footerStyle = makeStyles({
  iconSpace: {
    marginLeft: "5px",
  },
});

export default function footerCard(props) {
    const {likes, views}=props;
    const classes=footerStyle();
    return (
        <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon style={{color:"#e83b3b"}} />
          <Typography className={classes.iconSpace} variant="caption">
            {likes}
          </Typography>
        </IconButton>
        <IconButton aria-label="share">
          <VisibilityIcon style={{color:"#3785ff"}} />
          <Typography className={classes.iconSpace} variant="caption">
            {views}
          </Typography>
        </IconButton>
      </CardActions>
   
    )
}
