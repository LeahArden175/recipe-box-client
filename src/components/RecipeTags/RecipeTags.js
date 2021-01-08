import React, { Component } from "react";
import Recipe_TagsService from '../../services/recipe_tags-service'
import './RecipeTags.css'

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
      <div>
        <h5 className='tag-h5'>Tags:</h5>
        <div className='recipe-tag-div'>
        {this.state.tags.map((tag) => (
          <p className='tag-p' key={tag.id}>{tag.tag_name}</p>
        ))}
        </div>
      </div>
    );
  }
}
