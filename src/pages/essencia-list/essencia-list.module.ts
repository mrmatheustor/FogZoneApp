import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EssenciaListPage } from './essencia-list';

@NgModule({
  declarations: [
    EssenciaListPage,
  ],
  imports: [
    IonicPageModule.forChild(EssenciaListPage),
  ],
})
export class EssenciaListPageModule {}
