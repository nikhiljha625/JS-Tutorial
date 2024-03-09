
function setUsername(username){

    // complext DB calls

    this.username = username;
    console.log("called");
}

function createUser(username,email,password){
    // setUsername(username);
    // setUsername(this,username);
    setUsername.call(this,username);
    this.email = email;
    this.password = password;
}

const n1 = new createUser("nikhil" , "nikhil@google.com" , "123");

console.log(n1);