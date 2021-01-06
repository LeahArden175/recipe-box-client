import React, { Component } from 'react';
import moment from 'moment'

export default class Recipe extends Component {
    render() {
        const recipes = this.props.recipes
        const id = this.props.recipeId
        const findRecipe = recipes && recipes.find((recipe) => recipe.id == id)
        const formattedDate = moment.utc(findRecipe.date_created).format("MMM Do YYYY");

        if(!findRecipe){
            return 'loading'
        }
        return (
            <div>
                <p>{findRecipe.title}</p>
                <p>{formattedDate}</p>
            </div>
        )
    }
}