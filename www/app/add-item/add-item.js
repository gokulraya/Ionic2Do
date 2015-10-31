import {Page, NavController, NavParams} from 'ionic/ionic';

@Page({
	templateUrl: 'app/add-item/add-item.html'
})

export class AddItemPage {
	constructor(nav: NavController, navParams: NavParams){
		this.nav = nav;
		this.navParams = navParams;
		
		this.title = "";
		this.description = "";
		
	}
	
	sendItem(){
		
		 let newItem = {
      		title: this.title;
      		description: this.description;
    	}
		console.log("*************Value of item is: " + newItem.title + " " + newItem.description);
		this.navParams.get('list').saveItem(newItem);
		this.nav.pop();
	}
}

