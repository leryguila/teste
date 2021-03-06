import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { TabsPage } from '../pages/tabs/tabs';
import { IntroPage } from '../pages/intro/intro';
import { configProvider } from '../providers/config/config';

@Component({
  templateUrl: 'app.html',
  providers: [
    configProvider
  ]
})
export class MyApp {
  rootPage:any = IntroPage;

  constructor(
    platform: Platform, 
    statusBar: StatusBar, 
    splashScreen: SplashScreen,
    configProvider: configProvider
  
  ) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      let config = configProvider.getConfig();

      if(config==null){
        this.rootPage = IntroPage;
        configProvider.setConfig(false);
      }else{
        this.rootPage = TabsPage;
      }
 

      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
}
