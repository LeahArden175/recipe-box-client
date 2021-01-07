import config from '../config'
import TokenService from './token-services'

const InstructionsService = {

    getInstructions(){
        return fetch(`${config.API_ENDPOINT}/instructions`, {
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

export default InstructionsService