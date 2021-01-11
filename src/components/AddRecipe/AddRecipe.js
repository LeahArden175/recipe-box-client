import React, { Component } from "react";
import config from '../../config'
import TokenService from '../../services/token-services'
import "./AddRecipe.css";

export default class AddRecipe extends Component {
  state = {
    title: "",
  };

  handleSubmit = (event) => {
      event.preventDefault()
      let newRecipe = {title: this.state.title}
      console.log(newRecipe)
      fetch(`${config.API_ENDPOINT}/recipes`, {
        method: 'POST',
        headers : {
            'content-type': 'application/json',
            authorization: `bearer ${TokenService.getAuthToken()}`,
        },
        body: JSON.stringify(newRecipe),
    })
    .then(res =>
        (!res.ok)
          ? res.json().then(e => Promise.reject(e))
          : res.json()
      )
      .then((recipe) => {
          this.props.history.push(`/recipe/${recipe.id}`)
      })
  };

  titleChanged = (title) => {
    this.setState({ title });
    console.log(this.state);
}

  render() {
    return (
      <form onSubmit={this.handleSubmit} className="add-new-form">
        <label htmlFor="title">Title:</label>
        <input
          type="text"
          placeholder="title"
          value={this.state.title}
          onChange={(e) => this.titleChanged(e.target.value)}
        />
        {/* <label htmlFor='amount'>Amount:</label>
                <input type='text' placeholder='amount'/>
                <label htmlFor='units'>Unit:</label>
                <select name='unit' id='unit'>
                    <option value='tbs'>tbs</option>
                    <option value='tps'>tsp</option>
                    <option value='cup'>cup</option>
                    <option value='cups'>cups</option>
                    <option value='quart'>quart</option>
                    <option value='quarts'>quarts</option>
                    <option value='lb'>lb</option>
                    <option value='lbs'>lbs</option>
                    <option value='oz'>oz</option>
                    <option value='ml'>ml</option>
                    <option value='gram'>gram</option>
                    <option value='grams'>grams</option>
                </select>
                <label htmlFor='ingredient'>Ingredient:</label>
                <input type='text' placeholder='ingredient'/> */}
                <button type="submit">Submit</button>
      </form>
    );
  }
}
