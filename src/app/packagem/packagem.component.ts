import { Component, OnInit } from '@angular/core';

import { FormsModule }   from '@angular/forms';

export class Package {
  id: number;
  name: string;
  version: string;
  readme: string;
}

@Component({

  selector: 'app-packagem',
  templateUrl: './packagem.component.html',
  styleUrls: ['./packagem.component.css']
})
export class PackagemComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

 cartList: Array<Package> = [];

 searchText;
 packages = [
   { id: 11, name: "Mr. Nice", readme: "India", version:"4.3" },
   { id: 12, name: "Narco", readme: "USA", version:"7.3" },
   { id: 13, name: "Bombasto", readme: "UK", version:"4.63" },
   { id: 14, name: "Celeritas", readme: "Canada", version:"4.3" },
   { id: 15, name: "Magneta", readme: "Russia", version:"4.5.3" },
   { id: 16, name: "RubberMan", readme: "China" , version:"6.3"},
   { id: 17, name: "Dynama", readme: "Germany", version:"4.0.3" },
   { id: 18, name: "Dr IQ", readme: "Hong Kong" , version:"3.3"},
   { id: 19, name: "Magma", readme: "South Africa", version:"4.9" },
   { id: 20, name: "Tornado", readme: "Sri Lanka" , version:"0.3"},
   { id: 21, name: "Angular", readme: "Sri Lanka" , version:"5.3"},
   { id: 22, name: "NPM", readme: "Sri Lanka", version:"1.3" }
 ];

 selectedPackage: Package;


 onSelect(packagea: Package): void {
   this.selectedPackage = packagea;
 }

addToCart(packagea: Package): void {
  this.cartList.push(packagea);
}

removeFromCart(packagea: Package): void {
  this.cartList.splice(this.cartList.indexOf(packagea), 1);
}

}
