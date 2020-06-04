import React, { useState } from "react";
import FsLightbox from "fslightbox-react";
import CardMedia from "@material-ui/core/CardMedia";
import Link from "@material-ui/core/Link";

import { makeStyles } from "@material-ui/core/styles";
const BodyStyle = makeStyles({
  media: {
    paddingTop: "56.25%", // 16:9
  },
});

export default function BodyCard(props) {
  const [toggler, setToggler] = useState(false);
  const { largeImageURL,  previewURL, tags } = props;
  const classes = BodyStyle();
  return (
    <div>
      <Link href="#" onClick={() => setToggler(!toggler)} >
        <CardMedia className={classes.media} image={previewURL} title={tags} />
      </Link>
      <FsLightbox
        toggler={toggler}
        sources={[
        largeImageURL 
        ]}
      />
    </div>
  );
}