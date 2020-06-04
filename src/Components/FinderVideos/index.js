import React, { Component } from "react";
import axios from "axios";
import { API_PIXABAY_IMAGES } from "../../Api_Pixabay";
import SearcherMain from "../SearcherMain";
const TAG_DEFAULT = "inspiration";

export default class index extends Component {
  state = {
    tag: TAG_DEFAULT,
    page: 1,
    total: 0,
    mediaData: {
      hits: [],
    },
  };

  componentWillMount() {
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

  FilterApi = async (tag) => {
    const fetch = await axios.get(
      API_PIXABAY_IMAGES + `&q=${tag || this.state.tag}&page=${this.state.page}`
    );

    this.setState({
      mediaData: fetch.data,
      total: fetch.total,
    });
  };

  FetchMoreMedia = async () => {
    const fetch = await axios.get(
      API_PIXABAY_IMAGES +
        `&q=${this.state.tag || TAG_DEFAULT}&page=${this.state.page + 1}`
    );
    this.setState({
      page: this.state.page + 1,
      mediaData: {
        hits: this.state.mediaData.hits.concat(fetch.data.hits),
      },
    });

    // this.IsAllDataMedia();
  };

  IsAllDataMedia = () => {};

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
