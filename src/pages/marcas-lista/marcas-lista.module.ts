import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MarcasListaPage } from './marcas-lista';

@NgModule({
  declarations: [
    MarcasListaPage,
  ],
  imports: [
    IonicPageModule.forChild(MarcasListaPage),
  ],
})
export class MarcasListaPageModule {}
