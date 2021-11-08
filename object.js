const user = {
    name: "",
    email: "",
    password: "",

    get name() {
        return this.name;
    },
    set name(val) {
        this.name = val;
    },
};

Object.defineProperty(user, "password", {
        writable: false,
        enumerable: false,
        configurable: false
});

user["nationality"] = "Lebanese";
console.log(user);

Object.defineProperty(user, "print", {
    value: function () {
        return (
            "Name: " + user.name + " " + "Email: " + user.email + " " + "Password: " + user.password
        );
    },
});

Object.keys(user);

delete user.nationality;
console.log(user);


function User(name, email, password) {
    this.name = name;
    this.email = email;
    this.password = password
}

const us1 = new User('hussein', 'hussein.xyz@lau.edu.lb', 'pass123');
console.log(us1);