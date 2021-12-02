var user = {
    name: 'joe',
    id: 2316736
};
// With no type Aliases 
// const logDetails= (user: string , id: string| number)  => {
//     console.log(`Hey ${user} your id is ${id}`)
// }
var logDetails = function (user, id) {
    console.log("Hey ".concat(user, " your id is ").concat(id));
};
//Object with no type Aliases 
// const  greetings = (user: {name: string, id: string|number}) => {
//     console.log(`Hey ${user.name} your partner numbers is US${user.id}`)
// }
var greetings = function (user) {
    console.log("Hey ".concat(user.name, " your partner numbers is ").concat(user.id));
};
// logDetails('Joe',12345)
greetings(user);
