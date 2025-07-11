
import { Component, OnInit } from '@angular/core';
import { Order } from 'src/app/models/Order';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { WasherService } from 'src/app/services/WasherService';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-unassigned-washer-view',
  templateUrl: './unassigned-washer-view.component.html',
  styleUrls: ['./unassigned-washer-view.component.css'],
})
export class UnassignedWasherViewComponent implements OnInit {
  OrderList: Order[] = [];
  washerName: string = '';

  constructor(
    private ws: WasherService,
    private as: AuthenticationService
  ) {}

  ngOnInit(): void {
    this.getUnassignedOrders();
    this.washerName = this.as.currentUserValue?.name || ''; // if available
  }

  getUnassignedOrders(): void {
    this.ws.getUnassignedOrders().subscribe({
      next: (data) => {
        this.OrderList = data;
        console.log(data);
        
      },
      error: (err) => {
        console.error('Error fetching orders', err);
        Swal.fire('Error', 'Failed to fetch orders', 'error');
      },
    });
  }

  acceptOrder(orderId: number): void {
    console.log(orderId);
    
    Swal.fire({
      title: `Accept Order #${orderId}?`,
      icon: 'question',
      showCancelButton: true,
      confirmButtonText: 'Yes, Accept',
      cancelButtonText: 'Cancel',
    }).then((result) => {
      if (result.isConfirmed) {
        this.ws.acceptOrder(orderId).subscribe({
          next: () => {
            Swal.fire('Accepted!', `Order #${orderId} has been accepted.`, 'success');
            this.getUnassignedOrders();
          },
          error: (err) => {
            console.error(err);
            Swal.fire('Error', `Failed to accept order #${orderId}`, 'error');
          },
        });
      }
    });
  }

  declineOrder(orderId: number): void {
    Swal.fire({
      title: `Decline Order #${orderId}?`,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, Decline',
      cancelButtonText: 'Cancel',
    }).then((result) => {
      if (result.isConfirmed) {
        this.ws.declineOrder(orderId).subscribe({
          next: () => {
            Swal.fire('Declined', `Order #${orderId} has been declined.`, 'info');
            this.getUnassignedOrders();
          },
          error: (err) => {
            console.error(err);
            Swal.fire('Error', `Failed to decline order #${orderId}`, 'error');
          },
        });
      }
    });
  }
}
