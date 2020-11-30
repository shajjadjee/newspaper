export class User{
    id;
    name;
    username;
    password;
    email;
    mobile;
    role;
    // pid;
    constructor( id, name, username, password, email, mobile, role){
        this.id = id;
        this.name = name;
        this.username = username;
        this.password = password;
        // this.dob = dob;
        this.email = email;
        this.mobile = mobile;
        this.role = role;
        // this.pid = pid;

    }
}
