import { Component, OnInit } from '@angular/core';

import { FormsModule }   from '@angular/forms';

export class Package {
  name: string;
  version: string;
  readme: string;
  size: number;
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
   { name: "Beispielszene", readme: "npm install Beispielszene ", version:"1.4", size: 105 },
   { name: "ChaseCam", readme: "npm install ChaseCam", version:"4.3", size: 214 },
   { name: "Daydream_Elements", readme: "npm install Daydream_Elements", version:"0.0.1", size: 458 },
   { name: "Google_VR_SDK", readme: "npm install Google_VR_SDK", version:"3.0", size: 45 },
   { name: "GvrControllerMain", readme: "npm install GvrControllerMain", version:"2.0", size: 124 },
   { name: "GvrEditorEmulator", readme: "npm install GvrEditorEmulator" , version:"2.3", size: 178},
   { name: "GvrEventSystem", readme: "npm install GvrEventSystem", version:"1.3" , size: 154},
   { name: "P2OLab", readme: "npm install P2OLab" , version:"0.0.2", size: 745},
   { name: "Player", readme: "npm install Player", version:"0.0.1", size: 184 },
   { name: "Teleport", readme: "npm install Teleport0.0.1" , version:"0.0.5", size: 325},
   { name: "Teleport", readme: "npm install Teleport0.0.2" , version:"0.0.2", size: 400},
   { name: "Tunneling", readme: "npm install Tunneling", version:"0.0.1", size: 361 }
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
