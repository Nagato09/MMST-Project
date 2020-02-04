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
   { name: "Beispielszene", readme: "npm install Beispielszene ", version:"0.0.1" },
   { name: "ChaseCam", readme: "npm install ChaseCam", version:"0.0.1" },
   { name: "Daydream_Elements", readme: "npm install Daydream_Elements", version:"0.0.1" },
   { name: "Google_VR_SDK", readme: "npm install Google_VR_SDK", version:"0.0.1" },
   { name: "GvrControllerMain", readme: "npm install GvrControllerMain", version:"0.0.1" },
   { name: "GvrEditorEmulator", readme: "npm install GvrEditorEmulator" , version:"0.0.1"},
   { name: "GvrEventSystem", readme: "npm install GvrEventSystem", version:"0.0.1" },
   { name: "P2OLab", readme: "npm install P2OLab" , version:"0.0.1"},
   { name: "Player", readme: "npm install Player", version:"0.0.1" },
   { name: "Teleport", readme: "npm install Teleport0.0.1" , version:"0.0.1"},
   { name: "Teleport", readme: "npm install Teleport0.0.2" , version:"0.0.2"},
   { name: "Tunneling", readme: "npm install Tunneling", version:"0.0.1" }
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
