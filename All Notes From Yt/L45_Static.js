// static functionality

class User {
    constructor(username ,email) {
        this.username =username;
        this.email= email;
    }

    static createId(){
        return `123`;
    }

}

const nikhil = new User("nikhil","nikhil@google.com");

// nikhil.createId();   ///  cann't access this method

