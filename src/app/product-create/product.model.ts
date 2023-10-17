//product.model.ts
export interface Product {
    id: number | null;
    code: string;
    description: string;
    price: number;
    stock: number;
    idBrand: number | null; 
  }
  