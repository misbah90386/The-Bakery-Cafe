export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number; // in PKR (Rs.)
  image: string;
  category: 'bakery' | 'breakfast' | 'pizza' | 'main-course' | 'desserts' | 'beverages';
  tags?: string[];
  isBestSeller?: boolean;
}

export interface CartItem {
  menuItem: MenuItem;
  quantity: number;
  notes?: string;
}

export interface Reservation {
  name: string;
  phone: string;
  email: string;
  guests: number;
  date: string;
  time: string;
  message?: string;
}

export interface ContactMessage {
  name: string;
  email: string;
  phone: string;
  message: string;
}

export interface SpecialOffer {
  id: string;
  title: string;
  description: string;
  discountCode?: string;
  badge?: string;
  image: string;
  price?: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'bakery' | 'cakes' | 'pizza' | 'steaks' | 'coffee' | 'desserts' | 'dining';
  image: string;
}

export interface Review {
  id: string;
  name: string;
  rating: number;
  text: string;
  date: string;
}
