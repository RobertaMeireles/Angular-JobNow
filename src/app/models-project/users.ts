export class User {
    
    id:number;
    name:string;
    email: string;
    password: string;
    type: string;

    constructor(email: string, password: string, type:string="applicant",name:string,id:number) {
        this.name = name;
        this.email = email;
        this.password = password;
        this.type = type;
        this.id = id;
    }
}