import { Component } from '@angular/core';
import {Item } from './model/Item';
import { ItemService } from './item.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
   item : Item;
  result : string;
  itemArr : Item[];
  flag : boolean;
  constructor(private service : ItemService){ //injecting own service
    this.item = new Item();
    this.result = "";
    this.itemArr = [];
    this.flag = false;
  }  //  memory allocation assigning 
  insertItem(data : any){
    this.item.itemName=data.itemName;                                 //taking value from text box model object
    this.item.id=data.itemId;
    this.item.itemQuantity=data.itemQuantity;
    this.item.itemPrice=data.itemPrice;
    alert(data.itemName+" "+data.itemId+" "+data.itemQuantity+" "+data.itemPrice);
    this.result = this.service.insertItem(this.item); // object as an arguement
     //employee service file 
  }
  updateItem(data : any){
    this.item.itemName=data.itemName;                                 //taking value from text box model object
    this.item.id=data.itemId;
    this.item.itemQuantity=data.itemQuantity;
    this.item.itemPrice=data.itemPrice;
    alert(data.itemName+" "+data.itemId+" "+data.itemQuantity+" "+data.itemPrice);
    this.result = this.service.updateItem(this.item); 
}
  deleteItem(data : any){
    this.result = this.service.deleteItem(data.itemId); 
  }
  findItem(data : any){
    this.item = this.service.findItem(data.itemId);
    this.result = this.item.itemName +" "+this.item.id+" "+this.item.itemQuantity+" "+this.item.itemPrice;
  }
  findAllItem(){
    this.itemArr = this.service.findAllItem();
    this.flag = true;
    
  }
}