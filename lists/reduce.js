const {getPeople} = require('./service');

Array.prototype.myReduce = function (callback, value){
    let finalValue = value!==undefined?value:0;
    for (el of this){
        finalValue = callback(finalValue, el)
    }
    return finalValue
}

const main = async () => {
    try {
        const {results} = await getPeople('');
        let altura = results.map(el => parseInt(el.height));
        
        // Soma das alturas
        console.log(altura.myReduce((acc, el)=>acc+el,null))
        
        // Array multidimencional
        console.log([['Meu','nome'],['é','Lucas']].myReduce((acc, el)=>acc.concat(el),[]).join(' '))


    } catch (error) {
        console.error(error)
    }
}

main()