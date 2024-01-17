class User {
    private _username: string;
    private _password: string;

    constructor(username: string, password: string) {
        this._username = username;
        this._password = password;
    }

    get password() {
        return this._password;
    }

    getUsername() {
        return this._username;
    }
}

const james = new User("a123","123");
console.log(james.getUsername());
console.log(james.password)

