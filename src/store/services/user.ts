import axios from 'axios'
import config from '../../config'

export const getUser = () => axios.get(
    `${config.sourceURL}/user`
)
