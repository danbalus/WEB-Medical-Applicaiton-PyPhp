//import { Doctor } from './doctor';

export class UserDetails{
    id:number;
    user_id:number;
    name:string;
    affection:string;

    constructor( user_id:number, id:number, name:string,  affection:string) {
        this.name=name;
        this.id=id;
        this.user_id=user_id;
        this.affection=affection;
    }
}