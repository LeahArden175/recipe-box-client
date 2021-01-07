import config from '../config'
import TokenService from './token-services'

const IngredientsService = {

    getIngredients(){
        return fetch(`${config.API_ENDPOINT}/ingredients`, {
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

export default IngredientsService