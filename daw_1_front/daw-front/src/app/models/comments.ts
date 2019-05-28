export class Comments{
    id:number
    content:string;
    rating:number;
    doctor_id:number;
    hide:number;
    constructor(id:number, content:string,  rating:number, doctor_id:number, hide:number) {
        this.id = id;
        this.content=content;
        this.rating=rating;
        this.doctor_id=doctor_id;
        this.hide = hide;
    }
}