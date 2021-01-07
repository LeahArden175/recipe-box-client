import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class TagSideBar extends Component {
  render() {
    console.log(this.props);
    return (
    <li>{this.props.tag_name}</li>
    )
  }
}
