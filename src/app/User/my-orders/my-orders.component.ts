import { Component, OnInit } from '@angular/core';
import { OrderService } from 'src/app/services/order.service';
import { OrderResponse } from 'src/app/models/OrderResponse';


@Component({
  selector: 'app-my-orders',
  templateUrl: './my-orders.component.html',
  styleUrls: ['./my-orders.component.css'],
})
export class MyOrdersComponent implements OnInit {
  orderList: OrderResponse[] = [];

  constructor(private orderService: OrderService) {}

  ngOnInit(): void {
    this.loadOrders();
  }

  loadOrders() {
    this.orderService.getCurrentOrders().subscribe({
      next: (orders) => {
        this.orderList = orders;
        console.log(orders);
        
      },
      error: (err) => {
        console.error('Failed to load orders', err);
      },
    });
  }

  get hasScheduledTime(): boolean {
    return this.orderList.some(order => !!order.scheduledTime);
  }
}
