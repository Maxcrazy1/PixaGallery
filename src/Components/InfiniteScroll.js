import React from 'react'
import CircularProgress from "@material-ui/core/CircularProgress";
import InfiniteScroll from "react-infinite-scroll-component";

const styleScroller = {
    backgroundColor: "#f0f0f0",
    borderStyle: "solid",
    borderWidth: "2px",
    borderColor: "rgb(223, 224, 225)",
    borderRadius: "10px 0px 0px 10px",
    boxShadow: "2px 2px 2px 2px #979797",
  };
  
  
  export default function scrollInfinite(props) {
      return (
      <InfiniteScroll
        dataLength={props.total}
        height={700}
        next={props.fetchMoreMedia}
        hasMore={true}
        loader={<CircularProgress color="secondary"/>}
        style={styleScroller}
      >
          {props.divLoadData}
      </InfiniteScroll>
      )
  }
  