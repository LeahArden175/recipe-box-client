import React, { Component } from "react";
import config from "../../config";
import TokenService from "../../services/token-services";
import "./AddRecipe.css";

export default class AddRecipe extends Component {
  state = {
    title: "",
    recipe_id: "",
    ingredients: [
      {
        unit: "",
        amount: "",
        food_item: "",
      },
    ],
    instructions: [
      {
        list_order: "",
        step_info: "",
        recipe_id: '',
      },
    ],
  };

  handleSubmit = (event) => {
    event.preventDefault();
    let newRecipe = { title: this.state.title };
    console.log(newRecipe);
    fetch(`${config.API_ENDPOINT}/recipes`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
        authorization: `bearer ${TokenService.getAuthToken()}`,
      },
      body: JSON.stringify(newRecipe),
    })
      .then((res) =>
        !res.ok ? res.json().then((e) => Promise.reject(e)) : res.json()
      )
      .then((res) => {
        this.setRecipeId(res.id)
      })
      .then(() => {
        const newIngredients = this.state.ingredients
        const recipe_id = this.state.recipe_id

        newIngredients.map((ingredient) => {
         ingredient = {recipe_id, ...ingredient}
        console.log(ingredient)
          fetch(`${config.API_ENDPOINT}/ingredients`, {
            method: 'POST',
            headers : {
              'content-type': 'application/json',
              authorization: `bearer ${TokenService.getAuthToken()}`
            },
            body: JSON.stringify(ingredient)
          })
          .then((res) =>
        !res.ok ? res.json().then((e) => Promise.reject(e)) : res.json()
      )
          .then((res) => {
            console.log(res, 'res')
          }) 
        })
        // .then((recipe) => {
        //   this.props.history.push(`/recipe/${recipe.id}`);
        // });
      })
    }


  titleChanged = (title) => {
    this.setState({ title });
    console.log(this.state);
  };

  setRecipeId = (recipe_id) => {
    this.setState({ recipe_id });
  };

  updateIngredient = (e, index) => {
    const newIngredients = [...this.state.ingredients];
    newIngredients[index] = {
      ...newIngredients[index],
      [e.target.name]: e.target.value,
    };
    this.setState({ ingredients: newIngredients });
  };

  updateInstruction = (e, index) => {
    const newInstructions = [...this.state.instructions];
    newInstructions[index] = {
      ...newInstructions[index],
      [e.target.name]: e.target.value,
    };
    this.setState({ instructions: newInstructions });
  };

  render() {
    console.log(this.state);
    return (
      <form onSubmit={this.handleSubmit} className="add-new-form">
        <label htmlFor="title">
          Title:
          <input
            type="text"
            placeholder="title"
            value={this.state.title}
            onChange={(e) => this.titleChanged(e.target.value)}
          />
        </label>
        <h2>Ingredients</h2>
        {this.state.ingredients.map((ingredient, index) => (
          <div>
            <label htmlFor="amount">
              Amount:
              <input
                type="number"
                placeholder="amount"
                name="amount"
                id="amount"
                // value={ingredient.amount}
                onChange={(e) => this.updateIngredient(e, index)}
              />
            </label>
            <label htmlFor="units">
              Unit:
              <select
                name="unit"
                id="unit"
                onChange={(e) => this.updateIngredient(e, index)}
              >
                <option name="tbs" value="tbs">
                  tbs
                </option>
                <option name="tsp" value="tsp">
                  tsp
                </option>
                <option name="cup" value="cup">
                  cup
                </option>
                <option name="cups" value="cups">
                  cups
                </option>
                <option name="quart" value="quart">
                  quart
                </option>
                <option name="quarts" value="quarts">
                  quarts
                </option>
                <option name="lb" value="lb">
                  lb
                </option>
                <option name="lbs" value="lbs">
                  lbs
                </option>
                <option name="oz" value="oz">
                  oz
                </option>
                <option name="ml" value="ml">
                  ml
                </option>
                <option name="gram" value="gram">
                  gram
                </option>
                <option name="grams" value="grams">
                  grams
                </option>
              </select>
            </label>
            <label htmlFor="ingredient">
              Ingredient:
              <input
                name="food_item"
                type="text"
                placeholder="ingredient"
                onChange={(e) => this.updateIngredient(e, index)}
              />
            </label>
          </div>
        ))}
        <button
          type="button"
          onClick={() =>
            this.setState({ ingredients: [...this.state.ingredients, ""] })
          }
        >
          Add Ingredient
        </button>
        <h2>Instructions</h2>
        {this.state.instructions.map((instruction, index) => (
          <div>
            <label>
              Step Number
              <input
                type="text"
                placeholder="Step number"
                name="list_order"
                id="list_order"
                onChange={(e) => this.updateInstruction(e, index)}
              />
            </label>
            <label>
              Instruction
              <input
                type="text"
                placeholder="instruction"
                name="step_info"
                id="step_info"
                onChange={(e) => this.updateInstruction(e, index)}
              />
            </label>
          </div>
        ))}
        <button
          type="button"
          onClick={() =>
            this.setState({ instructions: [...this.state.instructions, ""] })
          }
        >
          Add Ingredient
        </button>
        <button type="submit">Submit</button>
      </form>
    );
  }
}
