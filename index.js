// let a = 'This is a text test',
// b = 'Did it work?',
// c = 'Yes, did it!';

// let conversation = arr => arr.forEach(el => console.log('-',el))

// conversation([a,b,c])

const getUser = (callback) => {
    setTimeout(()=> {
        return callback(null,{
            id:1,
            name:'Aladin',
            wasBorn: new Date()
        })
    },1000)
}

const getPhone = (userId,callback) => {
    setTimeout(()=>{
        return callback(null,{
            phone:'123456789',
            code:'+1'
        })
    },2000)
}

const solveUser = (err, user)=>{
    if (err){
        console.error('Usuário incorreto!')
        return;
    }
    getPhone(user.id, (err,phone)=>err?console.error('Cell Phone wrong!'):console.log(phone))
    
    console.log('User:', user)
}
// let user = getUser(),
// phoneNumber = getPhone(user.id);

getUser(solveUser)
// console.log('User:', user)
// console.log('Phone:', phoneNumber)
