import React, { Component } from "react";
import config from "../../config";
import TokenService from "../../services/token-services";
import TagsService from "../../services/tags-service";
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
      },
    ],
    tag_id: '',

    allTags: [],
  };

  handleSubmit = (event) => {
    event.preventDefault();
    let newRecipe = { title: this.state.title };
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
        this.setRecipeId(res.id);
      })
      .then(() => {
        const newIngredients = this.state.ingredients;
        const recipe_id = this.state.recipe_id;

        newIngredients.map((ingredient) => {
          ingredient = { ...ingredient, recipe_id };
          fetch(`${config.API_ENDPOINT}/ingredients`, {
            method: "POST",
            headers: {
              "content-type": "application/json",
              authorization: `bearer ${TokenService.getAuthToken()}`,
            },
            body: JSON.stringify(ingredient),
          })
            .then((res) =>
              !res.ok ? res.json().then((e) => Promise.reject(e)) : res.json()
            )
            .then(() => {
              const newInstructions = this.state.instructions;
              const recipe_id = this.state.recipe_id;

              newInstructions.map((instruction) => {
                instruction = { recipe_id, ...instruction };
                fetch(`${config.API_ENDPOINT}/instructions`, {
                  method: "POST",
                  headers: {
                    "content-type": "application/json",
                    authorization: `bearer ${TokenService.getAuthToken()}`,
                  },
                  body: JSON.stringify(instruction),
                }).then((res) =>
                  !res.ok
                    ? res.json().then((e) => Promise.reject(e))
                    : res.json()
                );
              });
            })
            .then(() => {
              const tag = this.state.tag_id;
              const recipe_id = this.state.recipe_id;
              const tagWithId = {recipe_id, tag_id: tag}
              console.log(tagWithId)

              fetch(`${config.API_ENDPOINT}/recipe_tags`, {
                    method: "POST",
                    headers: {
                      "content-type": "application/json",
                      authorization: `bearer ${TokenService.getAuthToken()}`,
                    },
                    body: JSON.stringify(tagWithId),
                  }).then((res) =>
                    !res.ok
                      ? res.json().then((e) => Promise.reject(e))
                      : res.json()
                  );
            })
            .then(() => {
              this.props.history.push(`/recipe/${this.state.recipe_id}`);
            });
        });
      });
  };

  titleChanged = (title) => {
    this.setState({ title });
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

  updateTags = (e) => {
    this.setState({
      tag_id: e.target.id
    })
  };

  componentDidMount = () => {
    TagsService.getTags().then((allTags) => {
      this.setState({ allTags });
    });
  };

  render() {
    console.log(this.state.tag_id);
    return (
      <form onSubmit={this.handleSubmit} className="add-new-form">
        <div className="title-add-div">
          <h2>Title</h2>
          <label htmlFor="title" className="labels">
            Title:
            <input
              required
              className="add-inputs"
              type="text"
              placeholder="title"
              value={this.state.title}
              onChange={(e) => this.titleChanged(e.target.value)}
            />
          </label>
        </div>
        <div className="ingredients-form">
          <h2>Ingredients</h2>
          {this.state.ingredients.map((ingredient, index) => (
            <div
              className="ingredients-form-divide"
              key={`ingredients ${index}`}
            >
              <label htmlFor="amount" className="labels">
                Amount:
                <input
                  required
                  step=".01"
                  className="add-inputs"
                  type="number"
                  placeholder="amount"
                  name="amount"
                  id="amount"
                  onChange={(e) => this.updateIngredient(e, index)}
                />
              </label>
              <label htmlFor="units" className="labels">
                Unit:
                <select
                  required
                  name="unit"
                  id="unit"
                  onChange={(e) => this.updateIngredient(e, index)}
                  className="select"
                >
                  <option hidden={true} value="">
                    Choose Unit
                  </option>
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
              <label htmlFor="ingredient" className="labels">
                Ingredient:
                <input
                  required
                  className="add-inputs"
                  name="food_item"
                  type="text"
                  placeholder="ingredient"
                  onChange={(e) => this.updateIngredient(e, index)}
                />
              </label>
            </div>
          ))}
        </div>
        <button
          type="button"
          onClick={() =>
            this.setState({ ingredients: [...this.state.ingredients, ""] })
          }
        >
          Add Another Ingredient
        </button>
        <div className="instructions-form">
          <h2>Instructions</h2>
          {this.state.instructions.map((instruction, index) => (
            <div
              className="ingredients-form-divide"
              key={`instructions ${index}`}
            >
              <label className="labels">
                Step Number
                <input
                  required
                  type="text"
                  placeholder="Step number"
                  name="list_order"
                  id="list_order"
                  onChange={(e) => this.updateInstruction(e, index)}
                />
              </label>
              <label className="labels">
                Instruction
                <textarea
                  className="text-area"
                  type="text"
                  placeholder="instruction"
                  name="step_info"
                  id="step_info"
                  onChange={(e) => this.updateInstruction(e, index)}
                />
              </label>
            </div>
          ))}
        </div>
        <button
          type="button"
          onClick={() =>
            this.setState({ instructions: [...this.state.instructions, ""] })
          }
        >
          Add Another Instruction
        </button>
        <div className="tags-form">
          <h2>Tags</h2>
          {this.state.allTags.map((tag, index) => (
            <div key={tag.id} required>
              <input
                required
                type="radio"
                id={tag.id}
                name='tags'
                onChange={(e) => this.updateTags(e)}
              />
              <label htmlFor='tags'>{tag.tag_name}</label>
            </div>
          ))}
        </div>
        <button type="submit">Submit</button>
      </form>
    );
  }
}
