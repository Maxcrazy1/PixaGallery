import React, { useState } from "react";
import FsLightbox from "fslightbox-react";
import CardMedia from "@material-ui/core/CardMedia";
import Link from "@material-ui/core/Link";
import { makeStyles } from "@material-ui/core/styles";
const bodyCardVideo = makeStyles({
  media: {
    height: "56.25%", // 16:9
  },
});

export default function BodyCard(props) {
  const [toggler, setToggler] = useState(false);
  const {  tags, smallVideo,highVideo } = props;
  const classes=bodyCardVideo();
  return (
    <div>
      <Link href="#" onClick={() => setToggler(!toggler)}>
        <CardMedia
          component="video"
          className={classes.bodyCardVideo}
          image={smallVideo}
          title={tags}
          src={smallVideo}
        />
      </Link>
      <FsLightbox toggler={toggler} sources={[highVideo]} />
    </div>
  );
}
