import { MedicalUnit } from './medical-unit';
import {Comments} from './comments';

export class Doctor{
    id:number;
    name:string;
    specialization:string;
    graduationYear:string;
    profilePicture:string;
    medical_units:Array<MedicalUnit>;
    comments:Array<Comments>;

    constructor(id:number,name:string,  specialization:string,  graduationYear:string, 
                    profilePicture:string, medical_units:Array<MedicalUnit>,
                    comments:Array<Comments>) {
        this.id = id;
        this.name=name;
        this.specialization=specialization;
        this.graduationYear=graduationYear;
        this.profilePicture=profilePicture;
        this.medical_units=medical_units;
        this.comments=comments;
    }
}
