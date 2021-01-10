import React, { Component } from "react";
import RecipesService from "../../services/recipe-services";
import EditRecipe from "../../components/EditRecipe/EditRecipe";
import InstructionsService from "../../services/instructions-service";
import IngredientsService from "../../services/ingredients-services";
import EditIngredient from '../../components/EditIngredient/EditIngredient'

export default class EditIngredientRoute extends Component {
  state = {
    recipes: [],
    instructions: [],
    ingredients: [],
  };

  getAll() {
    RecipesService.getRecipes().then((recipes) => {
      this.setState({ recipes });
    })
    .then(() => {
        InstructionsService.getInstructions()
        .then((instructions) => {
            this.setState({ instructions })
        })
    })
    .then(() => {
        IngredientsService.getIngredients()
            .then((ingredients) => {
                this.setState({ingredients})
            })
    })
  }

  getInstructions() {
    InstructionsService.getInstructions().then((instructions) => {
      this.setState({ instructions });
    });
  }

  getIngredients() {
    IngredientsService.getIngredients().then((ingredients) => {
      this.setState({ ingredients });
    });
  }

  componentDidMount() {
    this.getAll();
    // this.getInstructions();
    // this.getIngredients();
  }

  render() {
    const currentEditId = this.props.match.params.id;
    const recipes = this.state.recipes;
    const instructions = this.state.instructions;
    const ingredients = this.state.ingredients;
    const history = this.props.history
    //const currentRecipe = recipes && recipes.find((recipe) => recipe.id == currentEditId)

    return (
      <div>
          <EditIngredient  currentEditId={currentEditId} history={history} ingredients={ingredients}/>
      </div>
    );
  }
}
