import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import RecipeBlock from '../RecipeBlock/RecipeBlock'

export default class RecipeList extends Component {

    render() {
        console.log(this.props)
        return (
            <div>
                <p>{this.props.title}</p>
                {/* <p>{this.props.date_created}</p> */}
            </div>
        )
    }
}