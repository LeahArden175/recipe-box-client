import React, { Component, useImperativeHandle } from "react";
import RecipesService from "../../services/recipe-services";
import config from "../../config";
import TokenService from "../../services/token-services";
import InstructionsService from "../../services/instructions-service";
import IngredientsService from "../../services/ingredients-services";
import "./EditRecipe.css";

export default class EditRecipe extends Component {
  state = {
    recipe: {},
    currentInstructions: [],
    currentIngredients: [],
  };

  titleRef = React.createRef();
  step_infoRef = React.createRef();
  amountRef = React.createRef()
  unitRef = React.createRef()
  food_itemRef = React.createRef()

  setTitle = (title) => {
    this.setState({ title });
  };

  componentDidMount = () => {
    RecipesService.getRecipe(this.props.currentRecipeId)
      .then((recipe) => {
        this.setState({ recipe });
      })
      .then(() => {
        InstructionsService.getInstructions().then((instructions) => {
          const currentInstructions = instructions.filter(
            (instruction) => instruction.recipe_id == this.props.currentRecipeId
          );
          this.setState({ currentInstructions });
        });
      })
      .then(() => {
        IngredientsService.getIngredients().then((ingredients) => {
          const currentIngredients = ingredients.filter(
            (ingredient) => ingredient.recipe_id == this.props.currentRecipeId
          );
          this.setState({ currentIngredients });
        });
      });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const recipeToSubmit = {
      title: e.target["recipe-title"].value,
    };
    const instructionsToSubmit = {
      step_info: e.target["step_info"].value,
    };
    const id = this.props.currentRecipeId;
    fetch(`${config.API_ENDPOINT}/recipes/${id}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
        authorization: `bearer ${TokenService.getAuthToken()}`,
      },
      body: JSON.stringify(recipeToSubmit),
    })
      .then((res) =>
        !res.ok ? res.json().then((e) => Promise.reject(e)) : res.json()
      )
      .then(() => {
        fetch(`${config.API_ENDPOINT}/instructions/${id}`, {
          method: "PATCH",
          headers: {
            "content-type": "application/json",
            authorization: `bearer ${TokenService.getAuthToken()}`,
          },
          body: JSON.stringify(instructionsToSubmit),
        }).then((res) =>
          !res.ok ? res.json().then((e) => Promise.reject(e)) : res.json()
        );
      })
      .then(() => {
        this.props.history.push(`/recipe/${id}`);
      });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="recipe-title">Title:</label>
          <input
            key={this.state.recipe.id}
            type="text"
            name="recipe-title"
            ref={this.titleRef}
            defaultValue={this.state.recipe.title}
          />
          <h3>ingredients</h3>
          {this.state.currentIngredients.map((ingredient) => (
            <div>
              <label htmlFor="ingredients"></label>
              <input
                className="ingredient-inputs"
                defaultValue={ingredient.amount}
                name='ingredient-amount'
                type="text"
                ref={this.amountRef}
              />
              <label htmlFor="unit"></label>
              <input
                className="ingredient-inputs"
                defaultValue={ingredient.unit}
                name='ingredient-unit'
                type="text"
                ref={this.unitRef}
              />
              <label htmlFor="food_item"></label>
              <input
                className="ingredient-inputs"
                defaultValue={ingredient.food_item}
                name='ingredient-food_item'
                type="text"
                ref={this.food_itemRef}
              />
            </div>
          ))}
          <h3>instructions</h3>
          {this.state.currentInstructions.map((instruction) => (
            <div>
              <label htmlFor="instructions">{instruction.list_order}</label>
              <input
                key={instruction.id}
                defaultValue={instruction.step_info}
                type="text"
                name={`instructions_${instruction.id}`}
                ref={this.step_infoRef}
                id={`instructions_${instruction.id}`}
                data-instruction-id={instruction.id}
              />
            </div>
          ))}
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}
