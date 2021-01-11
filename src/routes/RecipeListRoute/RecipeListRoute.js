import React, { Component } from "react";
import RecipeList from "../../components/RecipeList/RecipeList";
import RecipesService from "../../services/recipe-services";
import config from "../../config";
import TokenService from "../../services/token-services";
import TagsService from "../../services/tags-service";
import Recipe_TagsService from "../../services/recipe_tags-service";
import './RecipeListRoute.css'

export default class RecipeListRoute extends Component {
  state = {
    recipes: [],
    tags: [],
  };

  getRecipes() {
    return fetch(`${config.API_ENDPOINT}/recipes`, {
      headers: {
        authorization: `bearer ${TokenService.getAuthToken()}`,
      },
    })
      .then((res) =>
        !res.ok ? res.json().then((e) => Promise.reject(e)) : res.json()
      )
      .then((res) => {
        const sorted = res.sort((a, b) => a.id - b.id)
        console.log(sorted)
        this.setRecipes(sorted)
      });
  }

  getTags() {
    TagsService.getTags().then((tags) => {
      this.setTags(tags);
    });
  }

  handleGetRecipesClick = (event) => {
    return fetch(`${config.API_ENDPOINT}/recipes`, {
      headers: {
        authorization: `bearer ${TokenService.getAuthToken()}`,
      },
    })
      .then((res) =>
        !res.ok ? res.json().then((e) => Promise.reject(e)) : res.json()
      )
      .then((res) => {
        this.setRecipes(res)
      });
  }

  getRecipesForTags = (event) => {
    event.preventDefault();
    const tagId = event.currentTarget.value;
    Recipe_TagsService.getRecipesForTags(tagId).then((res) => {
      this.setRecipes(res);
    });
  };

  setRecipes = (recipes) => {
    this.setState({ recipes });
  };

  setTags = (tags) => {
    this.setState({ tags });
  };

  componentDidMount() {
    this.getRecipes();
    this.getTags();
  }

  render() {
    const recipes = this.state.recipes.map((recipe, index) => (
      <RecipeList
        key={index}
        id={recipe.id}
        title={recipe.title}
        date_created={recipe.date_created}
        user_id={recipe.user_id}
      />
    ));

    return (
      <div className='recipe-list-div'>
        <div className='recipe-tag-search'>
          <h4 className='tags-h4'>Tags:</h4>
          {this.state.tags.map((tag) => (
            <button
              onClick={this.getRecipesForTags}
              key={tag.id}
              value={tag.id}
              className='tag-button'
            >
              {tag.tag_name}
            </button>
          ))}
          <button className='tag-button' onClick={this.handleGetRecipesClick}>All</button>
        </div>
        <div className='items'>
          {recipes}
        </div>
      </div>
    );
  }
}
