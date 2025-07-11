import { Component, OnInit } from '@angular/core';
import { OrderService } from 'src/app/services/order.service';
import { OrderResponse } from 'src/app/models/OrderResponse';

@Component({
  selector: 'app-past-orders',
  templateUrl: './past-orders.component.html',
  styleUrls: ['./past-orders.component.css'],
})
export class PastOrdersComponent implements OnInit {
  orderList: OrderResponse[] = [];

  constructor(private orderService: OrderService) {}

  ngOnInit(): void {
    this.loadPastOrders();
  }

  loadPastOrders() {
    this.orderService.getPastOrders().subscribe({
      next: (orders) => (this.orderList = orders),
      error: (err) => console.error('Failed to load past orders:', err),
    });
  }
}
