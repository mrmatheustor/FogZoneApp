import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Essencia } from '../../models/essencias/essencias.model';
import { EssenciaListService } from '../../services/essencia-list/essencia-list.service';
import { InicioPage } from '../inicio/inicio';
import { ToastService } from '../../services/toast/toast.service';

/**
 * Generated class for the AddEssenciaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-add-essencia',
  templateUrl: 'add-essencia.html',
})
export class AddEssenciaPage {

  essencia: Essencia = {
    Marca: '',
    Nome: '',
    desc: '',
    preco: undefined,
    checked: false
  };


  constructor(public navCtrl: NavController, public navParams: NavParams, private essencias: EssenciaListService, private toast: ToastService) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddEssenciaPage');
  }
  addEssencia(essencia: Essencia) {
    this.essencias.addEssencia(essencia).then(ref => {
      this.toast.show(`${essencia.Nome} Adicionado!`);
      this.navCtrl.setRoot('InicioPage', { key: ref.key });
    });
  }

}
