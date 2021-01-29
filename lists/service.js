const axios = require('axios');
const URL = `https://swapi.dev/api/people`

const getPeople = async name => {
    let res = await axios.get(`${URL}/?search=${name}&format=json`)
    // return res.data.results.map(mapPeople)
    // console.log(res.data)
    return res.data
}

const mapPeople = item =>{
    return {
        name: item.name,
        height: item.height
    }
}
module.exports = {
    getPeople, mapPeople
}