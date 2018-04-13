import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Essencia } from '../../models/essencias/essencias.model';
import { EssenciaListService } from '../../services/essencia-list/essencia-list.service';
import { ToastService } from '../../services/toast/toast.service';

/**
 * Generated class for the EditEssenciaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-edit-essencia',
  templateUrl: 'edit-essencia.html',
})
export class EditEssenciaPage {

  essencia: Essencia;

  constructor(public navCtrl: NavController, public navParams: NavParams, private essencias: EssenciaListService, private toast: ToastService) {
  }

  ionViewDidLoad() {
    this.essencia = this.navParams.get('essencia');
  }

  saveEssencia(essencia: Essencia) {
    this.essencias.editEssencia(essencia)
      .then(() => {
        this.toast.show(`${essencia.Nome} Salvo!`);
        this.navCtrl.setRoot('InicioPage');
      });
  }
  removeEssencia(essencia: Essencia) {
    this.essencias.removeEssencia(essencia)
      .then(() => {
        this.essencia.checked = false;
        this.toast.show(`${essencia.Nome} Removido!`);
        this.navCtrl.setRoot('InicioPage');
      })
  }
}
