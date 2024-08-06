import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Item } from './model/Item';

@Injectable({
  providedIn: 'root'
})
export class ItemService {
  url :string;
   item : Item;
  itemArr :Item[];
constructor(private http : HttpClient) { //predefined service for http
  this.url = "http://localhost:3005/employees";
    this.item= new Item();
    this.itemArr =[];
}
insertItem(item : Item){
  this.http.post<Item>(this.url,item).subscribe(); //post-->update method is called by http client <Employee says where ii is saving
  return "Item Details Added"; //subscribe==>commit
}
updateItem(item : Item){
  this.http.put<Item>(this.url+"/"+item.id,item).subscribe(); //post-->update method is called by http client <Employee says where ii is saving
  return "Item Details Updated"; //subscribe==>commit
}
deleteItem(itemId : number){
  this.http.delete<Item>(this.url+"/"+itemId).subscribe(); //post-->update method is called by http client <Employee says where ii is saving
  return "Item Details Deleted";
}

findItem(itemId : number){
  this.http.get<Item>(this.url+"/"+itemId).subscribe(data =>this.item=data); //post-->update method is called by http client <Employee says where ii is saving
   return this.item;
}
findAllItem(){
  this.http.get<Item[]>(this.url).subscribe(data =>this.itemArr=data); 
  return this.itemArr;
}
}