import axios from 'axios'

export const postProduct = (data) =>{
    return axios.post('http://localhost:3001/create-payment-link',data)
}

