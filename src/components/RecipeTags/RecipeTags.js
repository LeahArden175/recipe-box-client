import React, { Component } from "react";
import Recipe_TagsService from '../../services/recipe_tags-service'

export default class RecipeTags extends Component {

  state = {
    tags: []
  }

  getTagsForRecipes () {
    Recipe_TagsService.getTagsForRecipes(this.props.id)
    .then((tags) => {
      this.setTags(tags)
    })
  }

  setTags(tags) {
    this.setState({tags})
  }

  componentDidMount(){
    this.getTagsForRecipes()
  }


  render() {
    console.log(this.state)
    return (
      <footer>
        <h5>Tags:</h5>
        <div>
        {this.state.tags.map((tag) => (
          <p key={tag.id}>{tag.tag_name}</p>
        ))}
        </div>
      </footer>
    );
  }
}
