export class Ratings{
    id:number;
    washerName:string;
    comments:string;
    rating: number;
    constructor(id: number,washerName: string,comments: string, rating: number){
        this.id=id;
        this.washerName=washerName;
        this.comments=comments;
        this.rating=rating;
    }
}