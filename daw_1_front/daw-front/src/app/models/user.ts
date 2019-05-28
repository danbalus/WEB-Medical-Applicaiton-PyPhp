import { UserDetails } from './user-details';

export class User{
    id:number;
    
    email: string;
    password: string;
    type: string;
    userDetails:UserDetails;
    

    constructor(id:number, email:string, password:string,
                         type:string, userDetails:UserDetails) {
        this.id=id;
        this.email=email;
        this.password=password;
        this.type=type;
        this.userDetails=userDetails;
    }


}