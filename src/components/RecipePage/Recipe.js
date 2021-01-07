import React, { Component } from "react";
import moment from "moment";
import { Link } from "react-router-dom";
import InstructionBlock from "../InstructionBlock/InstructionBlock";
import IngredientBlock from "../IngredientBlock/IngredientBlock";

export default class Recipe extends Component {
  render() {
    // console.log(this.props)
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
        <div>
          <Link to="/recipe-list">Go back to list</Link>
        </div>
        <p>{findRecipe.title}</p>
        <p>{formattedDate}</p>
        <div>
          <ul>{getIngredients}</ul>
        </div>
        <ol>{getInstructions}</ol>
      </div>
    );
  }
}
