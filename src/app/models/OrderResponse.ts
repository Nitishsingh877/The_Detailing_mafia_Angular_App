export interface Car {
    carId: number;
    brand: string;
    model: string;
    licenseNumberPlate: string;
  }
  
  export interface OrderResponse {
    carId: number;
    customerEmail: string;
    phoneNo: string;
    areapincode: string;
    washerEmail?: string;
    washpack?: string;
    status: string;
    cars: Car;
    scheduledTime?: string;
      // present if scheduled wash
      createdAt?: string;
    
  }
  