import React, { Component } from "react";
import RecipesService from '../../services/recipe-services'
import config from '../../config'
import TokenService from '../../services/token-services'
import InstructionsService from '../../services/instructions-service'
import IngredientsService from '../../services/ingredients-services'

export default class EditRecipe extends Component {

    state ={
        recipe: {}
    }

    titleRef = React.createRef()

    setTitle = (title) => {
        this.setState({title})
    }

    componentDidMount = () => {
        RecipesService.getRecipe(this.props.currentRecipeId).then((recipe) => {
            this.setState({ recipe });
          })
        //   .then(() => {
        //       InstructionsService.getInstructions()
        //       .then((instructions) => {
        //           this.setState({ instructions })
        //       })
        //   })
        //   .then(() => {
        //       IngredientsService.getIngredients()
        //           .then((ingredients) => {
        //               this.setState({ingredients})
        //           })
        //   })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        const recipeToSubmit = {
            title: e.target['recipe-title'].value
        }
        const id = this.props.currentRecipeId
        const updatedRecipe = recipeToSubmit
         fetch(`${config.API_ENDPOINT}/recipes/${id}`, {
                method: "PATCH",
                headers: {
                    "content-type": "application/json",
                    authorization: `bearer ${TokenService.getAuthToken()}`,
                },
                body: JSON.stringify(updatedRecipe),
            })
            .then(res =>
                (!res.ok)
                  ? res.json().then(e => Promise.reject(e))
                  : res.json()
            )
            .then((data) => {
                this.props.history.push(`/recipe/${data.id}`)
            })
    }

  render() {
    return (
      <div>
         <form onSubmit={this.handleSubmit}>
             <label htmlFor='recipe-title'>Title:</label>
             <input
                key={this.state.recipe.id}
                type='text'
                name='recipe-title'
                ref={this.titleRef}
                defaultValue={this.state.recipe.title}
                //onChange={(e) => this.titleChanged(e.target.value)}
             />
             <button type='submit'>Submit</button>
         </form>
      </div>
    );
  }
}