import { Doctor } from './doctor';

export class MedicalUnit{
    id:number;
    name:string;
    type:string;
    location:string;
    logo:string;
    doctors:Array<Doctor>;
    latitude:number;
    longitude:number;

    constructor(id:number, name:string,  type:string, location:string, logo:string, doctors:Array<Doctor>, latitude:number,longitude:number) {
        this.id=id;
        this.name=name;
        this.type=type;
        this.location=location;
        this.logo=logo;
        this.doctors=doctors;
        this.latitude = latitude;
        this.longitude = longitude;
       

    }
}
