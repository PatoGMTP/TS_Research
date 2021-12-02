
let topic6 = document.getElementById('topic6') as HTMLElement


topic6.addEventListener('click',(event)=>{
    event.preventDefault()
    let text_area=document.getElementById("text")as HTMLElement ;
    let code =document.createElement('code')
    text_area.innerText = 'Here just not present '
    

})



// Type Aliases 
type StringOrNumber = string|number; 
// Type aliases with an object 
type objWithName = {name:string , id: StringOrNumber};
interface User {
    name: string,
    id: Number
}
let user ={
    name: 'joe',
    id: 2316736,
}

// With no type Aliases 
// const logDetails= (user: string , id: string| number)  => {
//     console.log(`Hey ${user} your id is ${id}`)
// }

const logDetails= (user: StringOrNumber , id: StringOrNumber)  => {
    console.log(`Hey ${user} your id is ${id}`)
}

//Object with no type Aliases 
// const  greetings = (user: {name: string, id: string|number}) => {
//     console.log(`Hey ${user.name} your partner numbers is US${user.id}`)
// }

const  greetings = (user: objWithName) => {
    console.log(`Hey ${user.name} your partner numbers is ${user.id}`)
}


// logDetails('Joe',12345)

greetings(user)