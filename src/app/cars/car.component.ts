import { Component, OnInit } from '@angular/core';
import { CarService } from './car.service';
import { Car } from './car.model';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent implements OnInit {
  cars: Car[] = [];
  selectedCar: Car | null = null;

  carForm: Car = {
    brand: '',
    model: '',
    licenseNumberPlate: ''
  };

  constructor(private carService: CarService) {}

  ngOnInit(): void {
    this.loadCars();
  }

  loadCars() {
    this.carService.getAllCars().subscribe({
      next: (data) => this.cars = data,
      error: (err) => alert("Failed to fetch cars")
    });
  }

  onSubmit() {
    if (this.selectedCar) {
      this.carService.updateCar(this.selectedCar.carId!, this.carForm).subscribe({
        next: () => {
          this.loadCars();
          this.resetForm();
        },
        error: (err) => alert("Update failed")
      });
    } else {
      this.carService.addCar(this.carForm).subscribe({
        next: () => {
          this.loadCars();
          this.resetForm();
        },
        error: (err) => alert("Add failed")
      });
    }
  }

  selectCar(car: Car) {
    this.selectedCar = { ...car };
    this.carForm = { ...car };
  }

  resetForm() {
    this.selectedCar = null;
    this.carForm = {
      brand: '',
      model: '',
      licenseNumberPlate: ''
    };
  }
}
