import React, { Component } from "react";
import RecipesService from "../../services/recipe-services";
import config from "../../config";
import TokenService from "../../services/token-services";
import "./EditTitle.css";

export default class EditTitle extends Component {
  state = {
    title: "",
    id: "",
  };

  componentDidMount = () => {
    RecipesService.getRecipes().then((recipes) => {
      const currentRecipe = recipes.find(
        (recipe) => recipe.id == this.props.currentEditId
      );
      const title = currentRecipe.title;
      const id = currentRecipe.id;
      this.setState({ title });
      this.setState({ id });
    });
  };

  setTitle = (title) => {
    this.setState({ title });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const id = this.state.id;
    const updatedTitle = this.state;
    fetch(`${config.API_ENDPOINT}/recipes/${id}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
        authorization: `bearer ${TokenService.getAuthToken()}`,
      },
      body: JSON.stringify(updatedTitle),
    })
      .then((res) =>
        !res.ok ? res.json().then((e) => Promise.reject(e)) : res.json()
      )
      .then(() => {
        this.props.history.push(`/recipe/${id}`);
      });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit} className="editing-forms">
        <label htmlFor="title" className="editing-labels">
          Title:
          <input
            key={this.state.id}
            type="text"
            name="title"
            value={this.state.title}
            onChange={(e) => this.setTitle(e.target.value)}
            className="title-input"
          />
        </label>
        <div className="button-div">
          <button type="submit" className="editing-buttons">
            Submit
          </button>
          <button
            className="editing-buttons"
            onClick={(e) =>
              this.props.history.push(`/edit-recipe/${this.state.id}`)
            }
          >
            Cancel
          </button>
        </div>
      </form>
    );
  }
}
