// src/app/models/Order.ts

import { Car } from './Car';

export interface Order {
  orderId: number;                     // from backend: private Long id;
  customerEmail: string;
  washerEmail?: string;
  carId: number;
  status: string;
  scheduledTime?: string;        // ISO string
  createdAt?: string;            // ISO string
  paymentStatus?: string;
  cars?: Car;                    // If you are populating car info via join or extra fetch
}
