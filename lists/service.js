const axios = require('axios');
const URL = `https://swapi.dev/api/people`

const getPeople = async name => {
    let res = await axios.get(`${URL}/?search=${name}&format=json`)
    return res.data
}

// getPeople('')
//     .then(result=>console.log(result))
//     .catch(err=> console.error(err))

module.exports = {
    getPeople
}