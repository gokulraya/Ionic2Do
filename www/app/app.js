import {App, Platform, StatusBar} from 'ionic/ionic';
import {ListCtrl} from './list/list';


@App({
  template: '<ion-nav [root]="root"></ion-nav>',
})

export class AppCmp {
  constructor(platform: Platform) {
    this.platform = platform;
    this.initializeApp();
    this.root = ListCtrl;
  }

  initializeApp() {
    this.platform.ready().then(() => {
      console.log('Platform ready');
      StatusBar.setStyle(StatusBar.DEFAULT);
    });
  }
}
