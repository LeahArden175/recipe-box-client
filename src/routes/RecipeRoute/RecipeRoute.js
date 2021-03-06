import React, { Component } from "react";
import RecipePage from "../../components/RecipePage/RecipePage";
import config from "../../config";
import TokenService from "../../services/token-services";
import InstructionsService from "../../services/instructions-service";
import IngredientsService from "../../services/ingredients-services";
import './RecipeRoute.css'

export default class RecipeRoute extends Component {
  state = {
    recipes: [],
    instructions: [],
    ingredients: [],
  };

  getInstructions() {
    InstructionsService.getInstructions().then((instructions) => {
      this.setInstructions(instructions);
    });
  }

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

  getIngredients() {
    IngredientsService.getIngredients().then((ingredients) => {
      this.setIngredients(ingredients)
    });
  }

  setRecipes = (recipes) => {
    this.setState({ recipes });
  };

  setInstructions = (instructions) => {
    this.setState({ instructions });
  };

  setIngredients = (ingredients) => {
    this.setState({ ingredients });
  };

  componentDidMount() {
    this.getRecipes()
    .then(() => {
      this.getInstructions();
    })
    .then(() => {
      this.getIngredients();
    })
  }

  render() {
    const recipeId = this.props.match.params.id;
    const history = this.props.history;
    // const recipes = this.state.recipes;
    // const instructions = this.state.instructions;
    // const ingredients = this.state.ingredients;
    return (
      <section className="recipe-section">
        <RecipePage
          //instructions={instructions}
          recipeId={recipeId}
          history={history}
          // recipes={recipes}
          // ingredients={ingredients}
        />
      </section>
    );
  }
}
