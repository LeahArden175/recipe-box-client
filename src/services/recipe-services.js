import config from '../config'
import TokenService from './token-services'

const RecipesService = {

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
    },
    getRecipe(recipeId){
        return fetch(`${config.API_ENDPOINT}/recipes/${recipeId}`, {
            headers : {
                authorization: `bearer ${TokenService.getAuthToken()}`,
            },
        })
        .then(res =>
            (!res.ok)
              ? res.json().then(e => Promise.reject(e))
              : res.json()
          )
    },
    patchRecipe(recipeId, updatedRecipe){
        return fetch(`${config.API_ENDPOINT}/recipes/${recipeId}`, {
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
    }
}

export default RecipesService