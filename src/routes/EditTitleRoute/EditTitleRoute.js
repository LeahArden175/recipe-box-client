import React, { Component } from "react";
import RecipesService from "../../services/recipe-services";
import EditTitle from '../../components/EditTitle/EditTitle'

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
  }

  componentDidMount() {
    this.getAll();
  }

  render() {
    const currentEditId = this.props.match.params.id;
    const history = this.props.history

    return (
      <div>
          <EditTitle  currentEditId={currentEditId} history={history} recipes={this.state.recipes}/>
      </div>
    );
  }
}
