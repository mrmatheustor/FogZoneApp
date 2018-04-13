import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AddEssenciaPage } from './add-essencia';

@NgModule({
  declarations: [
    AddEssenciaPage,
  ],
  imports: [
    IonicPageModule.forChild(AddEssenciaPage),
  ],
})
export class AddEssenciaPageModule {}
