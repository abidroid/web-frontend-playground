class User {

    constructor(email, password){
        this._email = email;
        this._password = password;
    }

    get email(){
        return this._email;
    }

    set email(value){
        this._email = value;
    }
}


const ali = new User( 'ali@gmail.com', '123');
console.log(ali.email);
console.log(ali.password);

