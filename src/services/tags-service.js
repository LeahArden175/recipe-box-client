import config from '../config'
import TokenService from './token-services'

const TagsService = {

    getTags(){
        return fetch(`${config.API_ENDPOINT}/tags`, {
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

export default TagsService