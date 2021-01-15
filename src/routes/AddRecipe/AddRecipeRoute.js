import React, { Component } from 'react';
import AddRecipe from '../../components/AddRecipe/AddRecipe';
import './AddRecipeRoute.css'

export default class AddRecipeRoute extends Component {

    render() {
       const history = this.props.history
        return (
            <section className='add-recipe'>
                <AddRecipe history={history}/>
            </section>
        )
    }
}