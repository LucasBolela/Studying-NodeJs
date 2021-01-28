const { rejects } = require('assert');
const eventEmitter = require('events');
const { resolve } = require('path');
class MeuEmissor extends eventEmitter {

}
const meuEmissor = new MeuEmissor();
const nomeEvento = 'usuario:click';
// meuEmissor.on(nomeEvento, click=> console.log('User click on', click))

// meuEmissor.emit(nomeEvento, 'Scroll')

// setInterval(() => {
//     meuEmissor.emit(nomeEvento, 'Ok')
    
// }, 1000);

const stdin = process.openStdin()

const main = () => new Promise((resolve,rejects)=>{
    stdin.addListener('data', value=>resolve(value))
})

main()
    .then(res=>console.log(`U type: ${res.toString().trim()}`))
    .catch(err=>console.error('This do not work',err))