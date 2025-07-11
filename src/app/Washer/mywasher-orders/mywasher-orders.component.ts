import { Component, OnInit } from '@angular/core';
import { OrderService } from 'src/app/services/order.service';
import { OrderResponse } from 'src/app/models/OrderResponse';

@Component({
  selector: 'app-mywasher-orders',
  templateUrl: './mywasher-orders.component.html',
  styleUrls: ['./mywasher-orders.component.css']
})
export class MywasherOrdersComponent implements OnInit {

  washerOrders: OrderResponse[] = [];
  loading = false;
  error = '';

  constructor(private orderService: OrderService) { }

  ngOnInit(): void {
    this.fetchWasherPastOrders();
  }

  fetchWasherPastOrders(): void {
    this.loading = true;
    this.orderService.getPastOrders().subscribe({
      next: (orders) => {
        this.washerOrders = orders;
        this.loading = false;
      },
      error: (err) => {
        this.error = 'Failed to load past orders';
        console.error(err);
        this.loading = false;
      }
    });
  }
}
