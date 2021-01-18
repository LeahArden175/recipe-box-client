import React, { Component } from "react";
import moment from "moment";
import { Link } from "react-router-dom";
import InstructionBlock from "../InstructionBlock/InstructionBlock";
import IngredientBlock from "../IngredientBlock/IngredientBlock";
import RecipeTags from "../RecipeTags/RecipeTags";
import config from "../../config";
import TokenService from "../../services/token-services";
import InstructionsService from "../../services/instructions-service";
import IngredientsService from "../../services/ingredients-services";
import "./RecipePage.css";

export default class RecipePage extends Component {
  state = {
    recipes: [],
    instructions: [],
    ingredients: [],
    currentRecipe: "",
    currentInstructions: [],
    currentIngredients: [],
  };

  handleDeleteRecipe = (event) => {
    event.preventDefault();
    const recipeId = this.props.recipeId;
    fetch(`${config.API_ENDPOINT}/recipes/${recipeId}`, {
      method: "DELETE",
      headers: {
        authorization: `bearer ${TokenService.getAuthToken()}`,
        "content-type": "application/json",
      },
    })
      .then((res) => {
        if (!res.ok) return res.json().then((event = Promise.reject(event)));
      })
      .then(() => {
        this.props.history.push(`/recipe-list`);
      });
  };

  getInstructions() {
    InstructionsService.getInstructions()
      .then((instructions) => {
        this.setInstructions(instructions);
      })
      .then(() => {
        const filteredInstructions = this.state.instructions.filter(
          (instruction) => instruction.recipe_id == this.props.recipeId
        );
        this.setState({ currentInstructions: filteredInstructions });
      });
  }

  getRecipe() {
    return fetch(`${config.API_ENDPOINT}/recipes/${this.props.recipeId}`, {
      headers: {
        authorization: `bearer ${TokenService.getAuthToken()}`,
      },
    })
      .then((res) =>
        !res.ok ? res.json().then((e) => Promise.reject(e)) : res.json()
      )
      .then((currentRecipe) => {
        this.setState({ currentRecipe });
      });
  }

  getIngredients() {
    IngredientsService.getIngredients().then((ingredients) => {
      this.setIngredients(ingredients);
    })
    .then(() => {
      const filteredIngredients =
      this.state.ingredients.filter(
        (ingredient) => ingredient.recipe_id == this.props.recipeId
      );
      this.setState({ currentIngredients: filteredIngredients})
    })
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
    this.getRecipe()
      .then(() => {
        this.getInstructions();
      })
      .then(() => {
        this.getIngredients();
      });
  }

  render() {
    if (!this.state.currentRecipe) {
      return "loading";
    }

    return (
      <div className="recipe-page-div">
        <div className="title-div">
          <h2 className="title-h2">{this.state.currentRecipe.title}</h2>
          <Link
            to={`/edit-recipe/${this.props.recipeId}`}
            className="edit-recipe-button"
          >
            Edit
          </Link>
        </div>
        <div className="edit-button-div"></div>
        <p className="ingredient-instruction-title">Ingredients:</p>
        <div className="ingredients-div">
          <ul className="ingredients-list">{this.state.currentIngredients.map((ingredient, index) => (
      <IngredientBlock
        key={index}
        id={ingredient.id}
        food_item={ingredient.food_item}
        amount={ingredient.amount}
        recipe_id={ingredient.recipe_id}
        unit={ingredient.unit}
      />
    ))}</ul>
        </div>
        <p className="ingredient-instruction-title">Instructions:</p>
        <div className="instructions-div">
          <ol className="instructions-list">
            {this.state.currentInstructions.map((instruction, index) => (
              <InstructionBlock
                key={index}
                id={instruction.id}
                recipe_id={instruction.recipe_id}
                list_order={instruction.list_order}
                step_info={instruction.step_info}
              />
            ))}
          </ol>
        </div>
        <div className="delete-button-div">
          <button className="recipe-button" onClick={this.handleDeleteRecipe}>
            Delete recipe
          </button>
        </div>
        <div className="recipe-tags-div">
          <RecipeTags id={this.props.recipeId} />
        </div>
      </div>
    );
  }
}
