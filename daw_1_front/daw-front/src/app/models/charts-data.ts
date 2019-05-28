export class MyChartsData{
    id:number;
    medical_unit_name: String;
    medical_unit_rating:number;

    constructor( id:number,medical_unit_name:string, medical_unit_rating:number) {
        this.id=id;
        this.medical_unit_name = medical_unit_name;
        this.medical_unit_rating=medical_unit_rating;
    }
}
