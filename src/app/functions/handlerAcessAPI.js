'use server'

const Usuarios = [
    {
        name : "mendes",
        email : "isabelapicoli26@gmail.com",
        password : "mene",
        token : "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c"
},

{
    name : "vitoria",
    email : "   ",
    password : "toria",
    token : "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c"
},

{
    name : "isabel",
    email : "isabel@gmail.com",
    password : "belinha",
    token : "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c"
}


]


const getUserAuthenticated = (userLogin) => {
    let usermach = {};
    
    Usuarios.map((user) =>{
        if(user.email === userLogin.email && user.password == userLogin.password){
            usermach = user
        }
    })

    return usermach

}

const getUsers = () =>{
        return Usuarios


}




export { getUsers, getUserAuthenticated };