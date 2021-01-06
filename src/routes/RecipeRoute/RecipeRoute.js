import React, { Component } from 'react';
import Recipe from '../../components/RecipePage/Recipe'
import config from '../../config'
import TokenService from '../../services/token-services'

export default class RecipeRoute extends Component {

    state = {
        recipes : []
    }

    getRecipes(){
        return fetch(`${config.API_ENDPOINT}/recipes`, {
            headers : {
                authorization: `bearer ${TokenService.getAuthToken()}`,
            },
        })
        .then(res =>
            (!res.ok)
              ? res.json().then(e => Promise.reject(e))
              : res.json()
          )
          .then(this.setRecipes)
    }

    setRecipes = (recipes) => {
        this.setState({recipes})
    }

    componentDidMount () {
        this.getRecipes()
    }

    render() {
        const recipeId = this.props.match.params.id
        const history = this.props.history
        const recipes = this.state.recipes
        return (
            <section>
                <Recipe recipeId={recipeId} history={history} recipes={recipes}/>
            </section>
        )
    }
}