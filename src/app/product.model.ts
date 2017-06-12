export class Product
{
    
    constructor(
        public name: string, 
        public sku: string,
        public imageUrl: string,
        public department: Array<string>,
        public price: number
    )
    {

    }

}