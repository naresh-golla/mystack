import Axios from 'axios';
import { httpConstants } from '../utils/constants'

class HTTPService {

    fetchUserInfo(username) {
        const endpoint = httpConstants.ENDPOINT;
        const method = httpConstants.GET_USER;
        const param = username
        /*const config = {
            params: {
                username
            },
            withCredentials: true
        }*/
        return Axios.get(endpoint + method + param);
    }

}

export default HTTPService;