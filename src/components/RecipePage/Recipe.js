import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Recipe extends Component {
    render() {
        const recipes = this.props.recipes
        const id = this.props.recipeId
        const findRecipe = recipes && recipes.find((recipe) => recipe.id == id)

        if(!findRecipe){
            return 'loading'
        }
        return (
            <div>
                <p>{findRecipe.title}</p>
            </div>
        )
    }
}