import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DetalhesEssenciaPage } from './detalhes-essencia';

@NgModule({
  declarations: [
    DetalhesEssenciaPage,
  ],
  imports: [
    IonicPageModule.forChild(DetalhesEssenciaPage),
  ],
})
export class DetalhesEssenciaPageModule {}
