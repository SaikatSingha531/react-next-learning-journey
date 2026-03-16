export interface Review {
  rating: number;
  comment: string;
  date: string;
  reviewerEmail: string;
  reviewerName: string;
}

export interface ProductDetails {
  id: number;
  title: string;
  description: string;
  price: number;
  discountPercentage?: number;
  availabilityStatus?: string;
  warrantyInformation?: string;
  shippingInformation?: string;
  returnPolicy?: string;
  images?: string[];
  reviews?: Review[];
}







