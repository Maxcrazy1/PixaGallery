import React, { Component } from "react";
import axios from "axios";
import { withRouter } from "react-router-dom";
import { API_PIXABAY_IMAGES, API_PIXABAY_VIDEOS } from "../../Api_Pixabay";
import SearcherMain from "../SearcherMain";

const TAG_DEFAULT = "inspiration";

class index extends Component {
  state = {
    tag: TAG_DEFAULT,
    page: 1,
    total: 0,
    mediaData: {
      hits: [],
    },
  };

  componentWillMount() {
    this.unlisten = this.props.history.listen((location, action) => {
    this.FilterApi();
    });

    this.FilterApi();
  }

  handleClick = () => {
    this.FilterApi(this.state.tag);
  };

  handleChange = (e) => {
    this.setState({
      tag: e.target.value,
    });
  };

  handleEnter = (e) => {
    if (e.key === "Enter") {
      this.FilterApi(this.state.tag);
      e.preventDefault();
    }
  };

  urlAPiToSearchMedia = () => {
    let path = this.props.history.location.pathname;
    return path === "/videos" ? API_PIXABAY_VIDEOS : API_PIXABAY_IMAGES;
  };

  clearState=()=>{
    this.setState({
      tag:TAG_DEFAULT,
      page:1,
      total:0,
      mediaData:{
        hits:[],
      }
    })
  }
  FilterApi = async (tag) => {
    this.clearState()
    let apiUrl = this.urlAPiToSearchMedia();

    const fetch = await axios.get(
      apiUrl + `&q=${tag || this.state.tag}&page=${this.state.page}`
    );

    this.setState({
      mediaData: fetch.data,
      total: fetch.total,
    });
  };

  FetchMoreMedia = async () => {
    let apiUrl = this.urlAPiToSearchMedia();
    const fetch = await axios.get(
      apiUrl + `&q=${this.state.tag || TAG_DEFAULT}&page=${this.state.page + 1}`
    );

    this.setState({
      page: this.state.page + 1,
      mediaData: {
        hits: this.state.mediaData.hits.concat(fetch.data.hits),
      },
    });
  };

  render() {
    return (
      <SearcherMain
        dataMedia={this.state.mediaData}
        handleChange={this.handleChange}
        handleClick={this.handleClick}
        handleEnter={this.handleEnter}
        fetchMoreMedia={this.FetchMoreMedia}
      />
    );
  }
}

export default withRouter(index);
