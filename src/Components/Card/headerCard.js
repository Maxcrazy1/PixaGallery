import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import CardHeader from "@material-ui/core/CardHeader";
import Avatar from "@material-ui/core/Avatar";

const headerStyle= makeStyles({
  splitTags: {
    overflow: "hidden !important",
    whiteSpace: "nowrap !important",
    textOverflow: "ellipsis !important",
    width: "71% !important",
  },
});

export default function header(props) {
  const classes = headerStyle();
  const { userImageURL, user, tags } = props;
  return (
    <div>
      <CardHeader
        className={classes.splitTags}
        avatar={
          <Avatar
            src={userImageURL}
            aria-label="recipe"
            className={classes.avatar}
          ></Avatar>
        }
        title={user}
        subheader={tags}
      />
    </div>
  );
}
