import React, { Component } from 'react';
import RecipeList from '../../components/RecipeList/RecipeList';
import RecipesService from '../../services/recipe-services'
import config from '../../config'
import TokenService from '../../services/token-services'

export default class RecipeListRoute extends Component {

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
        console.log(this.state)
    }

    componentDidMount () {
        this.getRecipes()
    }



    render() {
        const recipes = this.state.recipes.map((recipe, index) => (
            <RecipeList 
            key={index}
            id={recipe.id}
            title={recipe.title}
            date_created={recipe.date_created}
            user_id={recipe.user_id}
            />
        ))
        return (
            <section>
                <ul>
                {recipes}
                </ul>
            </section>
        )
    }
}