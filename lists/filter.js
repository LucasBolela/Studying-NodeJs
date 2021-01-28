const {getPeople} = require('./service');

const main = async () => {
    try {
        let {results} = await getPeople('a');

        console.log(results.filter(people=>people.name.toLowerCase().indexOf('lars')!=-1))
        
    } catch (error) {
        console.error(error)        
    }
}
main()