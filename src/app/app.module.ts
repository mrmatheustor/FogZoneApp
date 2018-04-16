import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { ListPage } from '../pages/list/list';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { InicioPage } from '../pages/inicio/inicio';
import { EssenciaListPage } from '../pages/essencia-list/essencia-list';
import { EssenciaListService } from '../services/essencia-list/essencia-list.service';
import { InicioPageModule } from '../pages/inicio/inicio.module';
import { EditEssenciaPage } from '../pages/edit-essencia/edit-essencia';
import { AddEssenciaPage } from '../pages/add-essencia/add-essencia';
import { EditEssenciaPageModule } from '../pages/edit-essencia/edit-essencia.module';
import { AddEssenciaPageModule } from '../pages/add-essencia/add-essencia.module';
import { ToastService } from '../services/toast/toast.service';
import { EssenciaListPageModule } from '../pages/essencia-list/essencia-list.module';
import { DetalhesEssenciaPageModule } from '../pages/detalhes-essencia/detalhes-essencia.module';
import { DetalhesEssenciaPage } from '../pages/detalhes-essencia/detalhes-essencia';
import {ForumPage} from '../pages/forum/forum';
import {ForumPageModule} from '../pages/forum/forum.module';
import { MarcasListaPage } from '../pages/marcas-lista/marcas-lista';
import { MarcasListaPageModule } from '../pages/marcas-lista/marcas-lista.module';

@NgModule({
  declarations: [
    MyApp,
    ListPage
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp({
      apiKey: "AIzaSyAS3AUsJTMOcMeCQg_zTbHvdEDq_N1oFT4",
      authDomain: "essencias-narguile.firebaseapp.com",
      databaseURL: "https://essencias-narguile.firebaseio.com",
      projectId: "essencias-narguile",
      storageBucket: "essencias-narguile.appspot.com",
      messagingSenderId: "170881229441"
    }),
    AngularFireDatabaseModule,
    IonicModule.forRoot(MyApp),
    InicioPageModule,
    EditEssenciaPageModule,
    AddEssenciaPageModule,
    EssenciaListPageModule,
    DetalhesEssenciaPageModule,
    ForumPageModule,
    MarcasListaPageModule,

  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    InicioPage,
    EditEssenciaPage,
    AddEssenciaPage,
    EssenciaListPage,
    DetalhesEssenciaPage,
    MarcasListaPage,
    ListPage,
    ForumPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    EssenciaListService,
    ToastService,
  ]
})
export class AppModule {}
