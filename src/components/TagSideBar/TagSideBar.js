import React, { Component } from "react";
import { Link } from "react-router-dom";
import Recipe_TagsService from '../../services/recipe_tags-service'

export default class TagSideBar extends Component {




    getRecipesForTags = (event) => {
        event.preventDefault();
        Recipe_TagsService.getRecipesForTags(this.props.id)
        .then((res) => {
            console.log(res)
        })
    }


  render() {
    return (
      <li>
        <button onClick={this.getRecipesForTags}>{this.props.tag_name}</button>
      </li>
    );
  }
}
