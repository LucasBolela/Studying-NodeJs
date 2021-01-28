const service = require('./service');

Array.prototype.myMap = function (callback) {
    const arr=[];
    for (el of this){
        arr.push(callback(el))
    }
    return arr
}

const main = async () => {
    try {
        let result = await service.getPeople('a')
        
        console.time('forEach')
        result.results.forEach(people=>console.log(people.name))
        console.timeEnd('forEach')
        
        
        console.time('forOf')
        for (people of result.results){
            console.log(people.name)
        }
        console.timeEnd('forOf')


        console.time('map')
        console.log(result.results.map(people=>people.name))
        console.timeEnd('map')


        console.time('myMap')
        console.log(result.results.myMap(people=>people.name))
        console.timeEnd('myMap')

    } catch (err){
        console.error(err)
    }
}
main()