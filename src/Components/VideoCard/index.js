import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import HeaderCard from "../Card/headerCard";
import FooterCard from "../Card/footerCard";
import BodyCard from "../VideoCard/bodyCard";

const useStyles = makeStyles({
  root: {
    maxWidth: "100%",
    margin: 10,
  },
});

export default function CardImage(props) {
  const classes = useStyles();
  const {
    userImageURL,
    likes,
    user,
    tags,
    views,
    videos,
  } = props.dataMedia;

  return (
    <Card className={classes.root}>
      <HeaderCard userImageURL={userImageURL} user={user} tags={tags} />
      <BodyCard
        smallVideo={videos.medium.url}
        highVideo={videos.medium.url}
        tags={tags}
      />
      <FooterCard likes={likes} views={views} />
    </Card>
  );
}
