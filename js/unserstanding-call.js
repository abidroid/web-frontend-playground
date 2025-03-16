function setUserName(username) {
    this.username = username;
}


function User(username, email, password) {
    setUserName.call(this, username);
    //this.username = username;
    this.email = email;
    this.password = password;
}

const user = new User('John', 'john@email.com', '123456');
console.log(user); // John