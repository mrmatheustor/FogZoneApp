import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { ListPage } from '../pages/list/list';
import { InicioPage } from '../pages/inicio/inicio';
import { EssenciaListPage } from '../pages/essencia-list/essencia-list';
import { EditEssenciaPage } from '../pages/edit-essencia/edit-essencia';
import { AddEssenciaPage } from '../pages/add-essencia/add-essencia';
import { DetalhesEssenciaPage } from '../pages/detalhes-essencia/detalhes-essencia';
import { ToastService } from '../services/toast/toast.service';
import {ForumPage} from '../pages/forum/forum';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = InicioPage;

  pages: Array<{title: string, component: any}>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Início', component: InicioPage },
      {title: 'Forum', component: ForumPage }
      
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}
