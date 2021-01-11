import React, { Component } from "react";
import moment from "moment";
import { Link } from "react-router-dom";
import InstructionBlock from "../InstructionBlock/InstructionBlock";
import IngredientBlock from "../IngredientBlock/IngredientBlock";
import RecipeTags from "../RecipeTags/RecipeTags";

export default class RecipePage extends Component {
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
      <InstructionBlock
        key={index}
        id={instruction.id}
        recipe_id={instruction.recipe_id}
        list_order={instruction.list_order}
        step_info={instruction.step_info}
      />
    ));

    const getIngredients = findIngredients.map((ingredient, index) => (
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
      <div>
        <h2>{findRecipe.title}</h2>
        <p>Created: {formattedDate}</p>
        <div className="edit-button-div">
          <Link
            to={`/edit-recipe/${this.props.recipeId}`}
            className="recipe-button"
          >
            Edit
          </Link>
        </div>
        <div className="ingredients-div">
          <ul className="ingredients-list">{getIngredients}</ul>
        </div>
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
