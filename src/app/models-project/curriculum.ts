import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

export class Curriculum {
    
    id:number;
    email: string;
    name: string;
    address: string;
    birthday: string;
    children: string;
    civil: string;
    interest: string;
    education: string;
    language: string;
    experiences: Experience[];
    userId:number;

    constructor(email: string, 
                name: string, 
                address: string, 
                birthday: string,  
                children: string,
                civil: string,
                interest: string,
                education: string,
                language: string,
                experiences: Experience[],
                userId:number
                ) {
                    
        this.email = email;
        this.name = name;
        this.address = address;
        this.birthday = birthday;
        this.children = children;
        this.civil = civil;
        this.interest = interest;
        this.education = education;
        this.language = language;
        this.experiences = experiences;
        this.userId = userId;
    }
}


export class Experience {
    
    id:number;
    companyname: string;
    functioncompany: string;
    work: string;
    dateStart: string;
    dateEnd: string;
    resume: string;

    constructor(
                id:Number,
                companyname: string,
                functioncompany: string,
                work: string,
                dateStart: string,
                dateEnd: string,
                resume: string
                ) {
                    
        this.id = null;
        this.companyname = companyname;
        this.functioncompany = functioncompany;
        this.work = work;
        this.dateStart = dateStart;
        this.dateEnd = dateEnd;
        this.resume = resume;
    }

}

