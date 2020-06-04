import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import HeaderCard from "./headerCard";
import BodyCard from "./bodyCard";
import FooterCard from './footerCard'

const useStyles = makeStyles({
  root: {
    maxWidth: "100%",
    margin: 10,
  },
});

export default function CardImage(props) {
  const classes = useStyles();
  const {
    largeImageURL,
    userImageURL,
    webformatURL,
    likes,
    user,
    tags,
    views,
  } = props.dataMedia;

  return (
    <Card className={classes.root}>
      <HeaderCard userImageURL={userImageURL} user={user} tags={tags} />
      <BodyCard  previewURL={webformatURL} tags={tags} largeImageURL={largeImageURL} />
      <FooterCard likes={likes} views={views} />
   </Card>
  );
}
