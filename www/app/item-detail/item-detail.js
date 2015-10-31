import {Page, NavParams} from 'ionic/ionic';

@Page({
	templateUrl: 'app/item-detail/item-detail.html',
})

export class ItemDetailPage {
	constructor(nav:NavParams){
		this.nav = nav;
		this.title = this.nav.get('item').title;
		this.description = this.nav.get('item').description;
		}
}