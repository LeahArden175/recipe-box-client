import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class RecipeList extends Component {
    render() {
        console.log(this.props)
        return (
            <div>
                <p>recipe Lists</p>
            </div>
        )
    }
}