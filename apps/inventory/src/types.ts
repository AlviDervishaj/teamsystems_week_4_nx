export type ProductType = {
  id: number,
  title: string,
  price: number,
  description: string,
  category: string,
  image: string,
  rating: {
    rate: number,
    count: number,
  },
}

export type CartProductType = {
  quantity: number,
  productId: number,
  price: number,
};

export type CartProducts = {
  quantity: number,
} & ProductType;

export type FetchProductsType = {
  data?: ProductType[],
  errors?: Array<{ message: string }>
}

export type ProductsContextType = {
  products: ProductType[],
  getProduct: (id: number) => ProductType | null,
  addToCart: (product: ProductType) => boolean;
  removeFromCart: (product: ProductType) => boolean;
}
