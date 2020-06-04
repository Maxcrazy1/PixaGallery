import React from "react";
import VideoCard from "../Components/VideoCard";
import CardMedia from "../Components/Card";
import Grid from "@material-ui/core/Grid";
import InfiniteScroll from "../Components/InfiniteScroll";


const FillDataCard = (dataMedia) => {
  return dataMedia.hits.map((itemMedia, key) => (
    <Grid key={key} item xs={12} sm={6} md={4} lg={3}>
      <CardMedia dataMedia={itemMedia} />
    </Grid>
  ));
};

const FillVideoCard = (dataMedia) => {
  return dataMedia.hits.map((itemMedia, key) => (
    <Grid key={key} item xs={12} sm={6} md={4} lg={3}>
      <VideoCard dataMedia={itemMedia} />
    </Grid>
  ));
};

const AreVideosOrImages = (dataMedia) => {
  let path = window.location.pathname;
  if (path === "/videos") {
    return FillVideoCard(dataMedia);
  } else {
    return FillDataCard(dataMedia);
  }
};

const FetchMedia = (props) => {
  return (
    <Grid item xs={12} align="center">
      <InfiniteScroll
        total={props.dataMedia.hits.length}
        fetchMoreMedia={props.fetchMoreMedia}
        divLoadData={
          <Grid container>{AreVideosOrImages(props.dataMedia)}</Grid>
        }
      />
    </Grid>
  );
};

export default FetchMedia;
