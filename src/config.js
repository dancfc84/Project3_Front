const devUrl = '/api'

const REACT_APP_PROD_URL="https://it-links.herokuapp.com/api"

const prodUrl = process.env.REACT_APP_PROD_URL
const baseUrl = process.env.NODE_ENV === 'production' ? prodUrl : devUrl

export default baseUrl