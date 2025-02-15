type Product = {
  id: string;
  name: string;
  price: number;
};

type Discount = {
  id: string;
  productId: string;
  discountPct: number;
};

const getProductDiscountPct = (discounts: Discount[], product: Product) => {
  const discount = discounts.find((disc) => disc.productId === product.id);

  return discount ? discount.discountPct : 0;
};

const products: Product[] = [
  {
    id: "a",
    name: "Wonderful perfume",
    price: 10,
  },
  {
    id: "b",
    name: "Washing liquid",
    price: 3,
  },
  {
    id: "d",
    name: "Vacuum cleaner",
    price: 50,
  },
];

const discounts: Discount[] = [
  {
    id: "dA",
    productId: "a",
    discountPct: 0.4,
  },
  {
    id: "dB",
    productId: "b",
    discountPct: 0.1,
  },
  {
    id: "dC",
    productId: "c",
    discountPct: 0.55,
  },
];

const calculateDiscountedPrice = (discounts: Discount[], product: Product) => {
  const discount = getProductDiscountPct(discounts, product);
  return product.price * (1 - discount);
};

console.log(calculateDiscountedPrice(discounts, products[1]));
console.log(calculateDiscountedPrice(discounts, products[2]));
console.log("Some super important stuff!!");

export {};
