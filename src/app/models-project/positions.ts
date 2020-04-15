export class Position {
    
    id:number;
    email:string;
    name:string;
    title: string;
    category: string;
    city: string;
    resume: string;

    constructor(email:string, name: string, title: string, category: string, city:string, resume:string) {
        this.email = email;
        this.name = name;
        this.title = title;
        this.category = category;
        this.city = city;
        this.resume = resume;
    }
}