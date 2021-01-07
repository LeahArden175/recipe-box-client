import React, { Component } from "react";
import RecipeList from "../../components/RecipeList/RecipeList";
import RecipesService from "../../services/recipe-services";
import config from "../../config";
import TokenService from "../../services/token-services";
import TagsService from "../../services/tags-service";
import TagSideBar from "../../components/TagSideBar/TagSideBar";

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
      .then(this.setRecipes);
  }

  getTags() {
    TagsService.getTags().then((tags) => {
      this.setTags(tags);
    });
  }

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
    const tags = this.state.tags.map((tag, index) => (
        <TagSideBar 
        key={index}
        tag_name={tag.tag_name}
        id={tag.id}
        />
    ))
    return (
      <div>
          <section>
            <ul>
              {tags}
              </ul>
          </section>
        <section>
          <ul>{recipes}</ul>
        </section>
      </div>
    );
  }
}
