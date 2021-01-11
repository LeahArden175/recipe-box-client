import React, { Component } from "react";
import moment from "moment";
import { Link } from "react-router-dom";
import InstructionEditBlock from "../InstructionEditBlock/InstructionEditBlock";
import IngredientEditBlock from "../IngredientEditBlock/IngredientEditBlock";
import RecipeTags from "../RecipeTags/RecipeTags";
import "./RecipeEditPage.css";

export default class Recipe extends Component {
  state = {
    instructions: [],
    recipe: this.props.recipeId,
  };

  handleDeleteRecipe = (event) => {
    event.preventDefault();
    console.log("clicked");
    const recipe_id = this.props.recipeId;
    this.findInstructions();
    console.log(this.props);
  };

  findInstructions = () => {
    const id = this.props.recipeId;
    const instructions = this.props.instructions.filter(
      (instruction) => instruction.recipe_id == id
    );
    const instructionId = instructions.find(
      (instruction) => instruction.recipe_id == id
    );
    console.log(instructionId, "i");
    this.setState({ instructions });
  };

  setInstructionId = (instructionId) => {
    this.setState({ instructionId });
  };

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

    const getInstructions = findInstructions.map((instruction, index) => (
      <InstructionEditBlock
        key={index}
        id={instruction.id}
        recipe_id={instruction.recipe_id}
        list_order={instruction.list_order}
        step_info={instruction.step_info}
      />
    ));

    const getIngredients = findIngredients.map((ingredient, index) => (
      <IngredientEditBlock
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
        <p className='edit-message'>Choose which item you would like to edit</p>
        <div className='edit-button-div'>
        <h2 className="title-h2">{findRecipe.title}</h2>
          <Link
            to={`/edit-title/${this.props.recipeId}`}
            className="recipe-button-edit"
          >
            Edit
          </Link>
          </div>
        <p className='date'>Created: {formattedDate}</p>
        <div className="ingredients-div">
          <ul className="ingredients-list">{getIngredients}</ul>
        </div>
        <div className="instructions-div">
          <ol className="instructions-list">{getInstructions}</ol>
        </div>
        <div className="delete-button-div">
          <Link className="recipe-button">
            Cancel
          </Link>
        </div>
      </div>
    );
  }
}
