export enum Category{
    Food="food",
    Cosmetics="cosmetic",
    Clothing="clothing",
    Furniture="furniture",
    All="everything"
};
export interface IProduct{
    id:number;
    name:string;
    category:Category;
    price:number;
    image:string;
    rating:number;
}