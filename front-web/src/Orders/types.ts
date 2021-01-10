export type Product ={
    id:number,
    name:string,
    price:number,
    description:string,
    imageUri:string,
}

export type OrderLocationData = {
   latitude: number;
   longitude:number;
   address:String;
}

 type ProductId = {
    id: number;
}

export type orderPayload = {
    products: ProductId[];
}& OrderLocationData