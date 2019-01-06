import axios from 'axios'
import MockAdapter from 'axios-mock-adapter'

/**
 * Initialize Mock Data
 *
 */
const initialize = () => {
    const mock = new MockAdapter(axios)
    mock.onGet('/user').reply(200, require('./user.json'))
}

export default initialize
