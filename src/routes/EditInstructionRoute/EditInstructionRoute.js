import React, { Component } from "react";
import RecipesService from "../../services/recipe-services";
import EditRecipe from "../../components/EditRecipe/EditRecipe";
import InstructionsService from "../../services/instructions-service";
import IngredientsService from "../../services/ingredients-services";
import EditInstruction from '../../components/EditInstruction/EditInstruction'

export default class EditRecipeRoute extends Component {
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
        <EditInstruction
        //currentRecipe={currentRecipe}
          currentEditId={currentEditId}
          instructions={instructions}
          ingredients={ingredients}
          recipes={recipes}
          history={history}
        />
      </div>
    );
  }
}
