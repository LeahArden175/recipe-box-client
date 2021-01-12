import React, { Component } from "react";
import IngredientsService from "../../services/ingredients-services";
import config from "../../config";
import TokenService from "../../services/token-services";

export default class EditIngredient extends Component {
  state = {
    instructionId: "",
    food_item: "",
    amount: "",
    unit: "",
    recipeId: ''
  };

  componentDidMount = () => {
    IngredientsService.getIngredients().then((ingredients) => {
      const currentIngredient = ingredients.find(
        (ingredient) => ingredient.id == this.props.currentEditId
      );
      const instructionId = currentIngredient.id;
      const food_item = currentIngredient.food_item;
      const amount = currentIngredient.amount;
      const unit = currentIngredient.unit;
      const recipeId = currentIngredient.recipe_id
      this.setState({ instructionId });
      this.setState({ food_item });
      this.setState({ amount });
      this.setState({ unit });
      this.setState({recipeId})
    });
  };

  handleSubmit = (event) => {
      event.preventDefault()
      const id = this.state.instructionId
      const updatedIngredients = this.state
      fetch(`${config.API_ENDPOINT}/ingredients/${id}`, {
          method: 'PATCH',
          headers: {
              'content-type': 'application/json',
              authorization: `bearer ${TokenService.getAuthToken()}`,
          },
          body: JSON.stringify(updatedIngredients),
      }).then((res) => 
          !res.ok ? res.json().then((e) => Promise.reject(e)) : res.json()
      )
      .then(() => {
        this.props.history.push(`/recipe/${this.state.recipeId}`)
      })
  }

  setFoodItem = (food_item) => {
    this.setState({ food_item });
  };
  setAmount = (amount) => {
    this.setState({ amount });
  };
  setUnit = (unit) => {
    this.setState({ unit });
  };

  render() {
    console.log(this.state);
    return (
      <form onSubmit={this.handleSubmit} className="editing-forms">
          <label htmlFor="amount" className="editing-labels">Amount:</label>
          <input 
            type='text'
            name='amount'
            value={this.state.amount}
            onChange={(e) => this.setAmount(e.target.value)}
            className='ingredients-inputs'
          />
          
          <label htmlFor='unit' className="editing-labels">Unit:</label>
          <input
            type='text'
            name='unit'
            value={this.state.unit}
            onChange={(e) => this.setUnit(e.target.value)}
            className='ingredients-inputs'
          />
          
          <label htmlFor='food_item' className="editing-labels">Food:</label>
          <input
            type='text'
            name='food_item'
            value={this.state.food_item}
            onChange={(e) => this.setFoodItem(e.target.value)}
            className='ingredients-inputs'
          />
        
          <div className="button-div">
          <button className="editing-buttons" type='submit' >Submit</button>
          <button
            className="editing-buttons"
            onClick={(e) =>
              this.props.history.push(`/edit-recipe/${this.state.recipeId}`)
            }
          >
            Cancel
          </button>
          </div>
      </form>
    );
  }
}
