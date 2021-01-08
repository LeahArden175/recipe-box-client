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
    }
}

export default RecipesService