export class CommentsWithDoctorName{
    id_comment:number;
    hide:number;
    doctorName: String;
    content:String;
    rating:number;
    doctor_id:number;

    constructor(id_comment:number,hide:number,doctorName:string, content:string, rating:number, doctor_id:number) {
        this.id_comment = id_comment;
        this.doctorName=doctorName;
        this.content=content;
        this.rating=rating;
        this.doctor_id=doctor_id;
        this.hide = hide;
    }
}
