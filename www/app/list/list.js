import {Page, NavController} from 'ionic/ionic';
import {AddItemPage} from '../add-item/add-item';
import {ItemDetailPage} from '../item-detail/item-detail';

@Page({
  templateUrl: 'app/list/list.html',
})

export class ListCtrl {
  constructor(nav: NavController) {
    this.nav = nav;
    this.items = [];
  }
  addItem(){
    this.nav.push(AddItemPage,{list:this});
  }
  saveItem(item){
    this.items.push(item);
    confirm("Data Added !");
  }
  
  viewItem(item){
    this.nav.push(ItemDetailPage, {item: item});
    
  }
}
