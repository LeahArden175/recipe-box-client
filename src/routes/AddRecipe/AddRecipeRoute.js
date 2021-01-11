import React, { Component } from 'react';
import AddRecipe from '../../components/AddRecipe/AddRecipe';

export default class AddRecipeRoute extends Component {

    render() {
       const history = this.props.history
        return (
            <section>
                <AddRecipe history={history}/>
            </section>
        )
    }
}