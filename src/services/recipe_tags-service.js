import config from '../config'
import TokenService from './token-services'

const Recipe_TagsService = {

    getRecipesForTags(recipe_id){
        return fetch(`${config.API_ENDPOINT}/recipe_tags/recipe/${recipe_id}`, {
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
    getTagsForRecipes(tag_id){
        return fetch(`${config.API_ENDPOINT}/recipe_tags/tag/${tag_id}`, {
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

export default Recipe_TagsService