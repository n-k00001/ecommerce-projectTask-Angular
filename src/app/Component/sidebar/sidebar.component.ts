import { Component } from '@angular/core';
import { ICatogry } from 'src/app/Models/icatogry';
import { Store } from 'src/app/Models/store';
import { IProduct } from 'src/app/Models/iproduct';
@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {
  productList:any[]=[];
  priceFilter: number=0;
  filteredProducts: any[]=[];
 
  
  
}
