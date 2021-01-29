const {getPeople} = require('./service');

Array.prototype.myFilter = function (callback){
    let list =[]
    for(item of this){
        callback(item)?list.push(item):0;
    }
    return list;
}

const main = async () => {
    try {
        let {results} = await getPeople('a');

        // let arr2 = results.filter(people=>people.name.toLowerCase().indexOf('lars')!=-1)
        
        let arr = results.myFilter(people=>people.name.toLowerCase().indexOf('lars')!=-1)
        
        arr.forEach(el => console.log('-',el.name))
    } catch (error) {
        console.error(error)        
    }
}
main()