import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html'
})
export class ItemsComponent {
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
