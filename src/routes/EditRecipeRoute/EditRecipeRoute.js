import React, { Component } from "react";
import RecipesService from "../../services/recipe-services";
import EditRecipe from "../../components/EditRecipe/EditRecipe";
import InstructionsService from "../../services/instructions-service";

export default class EditRecipeRoute extends Component {
  state = {
    recipes: [],
    insructions: [],
    ingredients: [],
  };

  getRecipes() {
    RecipesService.getRecipes().then((recipes) => {
      this.setRecipes(recipes);
    });
  }

  getInstructions() {
      InstructionsService.getInstructions()
      .then((instructions) => {
        this.setInstructions(instructions)
      })
  }

  setRecipes = (recipes) => {
    this.setState({ recipes });
  };

  setInstructions = (instructions) => {
      this.setState({instructions})
  }

  componentDidMount() {
    this.getRecipes();
    this.getInstructions()
  }

  render() {
    console.log(this.state);
    const currentRecipeId = this.props.match.params.id;
    const recipes = this.state.recipes;
    const instructions = this.state.insructions
    return (
      <div>
        <EditRecipe currentRecipeId={currentRecipeId} recipes={recipes} instructions={instructions}/>
      </div>
    );
  }
}
