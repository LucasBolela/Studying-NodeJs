const getUser = () => {
    return new Promise((resolve,reject)=>{

        setTimeout(()=> {
            return resolve({
                id:1,
                name:'Aladin',
                wasBorn: new Date()
            })
        },1000)
    })
}

const getPhone = (userId) => {
    return new Promise((resolve, reject)=>{

        setTimeout(()=>{
            return resolve({
                phoneNumber:'123456789',
                code:'+1'
            })
        },2000)
    })
}

const getAdress = (userId) => {
    return new Promise((resolve, reject)=>{

        setTimeout(()=>{
            return resolve({
                street:'Road of angels',
                number: 22
            })
        },2000)
    })
}

// Utilizando async - await

const main = async () => {
    try{
        console.time('Time')
        let user = await getUser();

        console.log(user, await Promise.all([getPhone(user.id), getAdress(user.id)]))
        console.timeEnd('Time')

    }
    catch(err){
        console.error('Deu erro',err)
    }
}
main()

// Utilizando as funções de callback

// const solveUser = (err, user)=>{
//     if (err){
//         console.error('Usuário incorreto!')
//         return;
//     }
//     getPhone(user.id, (err,phone)=>{
//         if(err){
//             console.error('Cell Phone wrong!')
//             return;
//         }
//         getAdress(user.id,(err,adress)=>err?console.error('Addres not match'):console.log(adress))
//         console.log(phone)
//     })
//     console.log('User:', user)
// }

// getUser(solveUser)

// Utilizando as funções com .then

// getUser()
//     .then(user=>{
//         return getPhone(user.id)
//             .then((result)=>{
//                 return {
//                     user: {
//                         name:user.name,
//                         id: user.id
//                     },
//                     phone: result
//                 }
//             })
//     })
//     .then(user=>{
//         return getAdress(user.id)
//             .then(result=>{
//                 return {
//                     user: user.user,
//                     phone: user.phone,
//                     adress:result
//                 }
//             })
//     })
//     .then(result=>{
//         console.log('Success!\n',result)
//     })
//     .catch(err=>{
//         console.error('User incorrect!',err)
//     })