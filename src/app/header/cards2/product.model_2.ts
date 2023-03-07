export class ProductModel {
    title: string;
    description: string;
    img: string;
    imgDescription: string;

    constructor(imgDescription: string, description: string, img: string, title:string){
        this.title = title;
        this.img = img;
        this.imgDescription = imgDescription;
        this.description = description;
    }
}