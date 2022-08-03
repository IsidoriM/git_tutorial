import { Component, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
})
export class DashboardComponent {
  
  public itemsdetails: ItemDetails[] = [];

  constructor(http: HttpClient) {
    http.get<ItemDetails[]>('/ItemDetails').subscribe(result => {
      this.itemsdetails = result;
    }, error => console.error(error));
  }
   
}
interface ItemDetails {
  itemCode: string;
  saleCount: number;
}
