import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { EssenciaListService } from '../../services/essencia-list/essencia-list.service';
import { Essencia } from '../../models/essencias/essencias.model';
import { ToastService } from '../../services/toast/toast.service';
import { InicioPage } from '../inicio/inicio';

/**
 * Generated class for the DetalhesEssenciaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-detalhes-essencia',
  templateUrl: 'detalhes-essencia.html',
})
export class DetalhesEssenciaPage {

  sobreEssencia: Essencia;

  constructor(public navCtrl: NavController, public navParams: NavParams, private essencias: EssenciaListService, private toast: ToastService) {


  }

  ionViewDidLoad() {
    console.log('DetalhesEssenciaPage ' + this.navParams.get('essencia'));
    this.sobreEssencia = this.navParams.get('essencia');
  }


  saveEssencia(essencia: Essencia) {
    this.essencias.editEssencia(essencia)
      .then(() => {
        this.toast.show(`${essencia.Nome} Salvo!`);
      });
  }

  removerEssencia(essencia: Essencia) {
    this.essencias.removeEssencia(essencia)
      .then(() => {
        // this.sobreEssencia.checked = false;
        this.toast.show(`${essencia.Nome} Deletado!`);
        this.navCtrl.setRoot('InicioPage');
      })
  }
}
