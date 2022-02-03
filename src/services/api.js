import axios from 'axios'

const key = 'ba881fc6035437b87b02402c369f6f698a93ed5f';

const apiBitly = axios.create({
  baseURL: 'https://api-ssl.bitly.com/v4',
  headers:{
    'Authorization': `Bearer ${key}`
  }
});


export default apiBitly;