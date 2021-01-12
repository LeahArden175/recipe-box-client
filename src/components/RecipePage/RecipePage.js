import React, { Component } from "react";
import moment from "moment";
import { Link } from "react-router-dom";
import InstructionBlock from "../InstructionBlock/InstructionBlock";
import IngredientBlock from "../IngredientBlock/IngredientBlock";
import RecipeTags from "../RecipeTags/RecipeTags";
import config from '../../config'
import TokenService from '../../services/token-services'
import "./RecipePage.css";

export default class RecipePage extends Component {

  handleDeleteRecipe = (event) => {
    event.preventDefault();
    const recipeId = this.props.recipeId
    fetch(`${config.API_ENDPOINT}/recipes/${recipeId}`, {
      method: 'DELETE',
      headers: {
        authorization: `bearer ${TokenService.getAuthToken()}`,
        'content-type': 'application/json'
      },
    })
    .then((res) => {
      if (!res.ok) return res.json().then((event = Promise.reject(event)));
    })
  }

  render() {
    const recipes = this.props.recipes;
    const instructions = this.props.instructions;
    const ingredients = this.props.ingredients;
    const id = this.props.recipeId;
    const findRecipe = recipes && recipes.find((recipe) => recipe.id == id);
    const findInstructions =
      instructions &&
      instructions.filter((instruction) => instruction.recipe_id == id);

    const findIngredients =
      ingredients &&
      ingredients.filter((ingredient) => ingredient.recipe_id == id);

    const sortedIngredients = findIngredients.sort((a, b) => a.id - b.id)  

    const sortedInstructions = findInstructions.sort((a, b) => a.id - b.id);

    const getInstructions = sortedInstructions.map((instruction, index) => (
      <InstructionBlock
        key={index}
        id={instruction.id}
        recipe_id={instruction.recipe_id}
        list_order={instruction.list_order}
        step_info={instruction.step_info}
      />
    ));

    const getIngredients = sortedIngredients.map((ingredient, index) => (
      <IngredientBlock
        key={index}
        id={ingredient.id}
        food_item={ingredient.food_item}
        amount={ingredient.amount}
        recipe_id={ingredient.recipe_id}
        unit={ingredient.unit}
      />
    ));

    if (!findRecipe) {
      return "loading";
    }

    const formattedDate = moment
      .utc(findRecipe.date_created)
      .format("MMM Do YYYY");

    return (
      <div className="recipe-page-div">
        <h2 className="title-h2">{findRecipe.title}</h2>
        <p className="date">Created: {formattedDate}</p>
        <div className="edit-button-div">
          <Link
            to={`/edit-recipe/${this.props.recipeId}`}
            className="recipe-button"
          >
            Edit
          </Link>
        </div>
        <p className="ingredient-instruction-title">Ingredients:</p>
        <div className="ingredients-div">
          <ul className="ingredients-list">{getIngredients}</ul>
        </div>
        <p className="ingredient-instruction-title">Ingredients:</p>
        <div className="instructions-div">
          <ol className="instructions-list">{getInstructions}</ol>
        </div>
        <div className="delete-button-div">
          <button className="recipe-button" onClick={this.handleDeleteRecipe}>
            Delete recipe
          </button>
        </div>
        <RecipeTags id={this.props.recipeId} />
      </div>
    );
  }
}
