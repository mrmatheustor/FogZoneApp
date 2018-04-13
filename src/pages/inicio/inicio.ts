import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { EssenciaListPage } from '../essencia-list/essencia-list';
import { EssenciaListService } from '../../services/essencia-list/essencia-list.service';
import { Observable } from 'rxjs/observable';
import { Essencia } from '../../models/essencias/essencias.model';
import { ToastService } from '../../services/toast/toast.service';

/**
 * Generated class for the InicioPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-inicio',
  templateUrl: 'inicio.html',
})
export class InicioPage {

  essenciaLista$: Observable<Essencia[]>;

  constructor(public navCtrl: NavController, public navParams: NavParams, private essencias: EssenciaListService, private toast : ToastService) {
    
    this.essenciaLista$ = this.essencias
    .getEssenciaList() //Retorna a lista do Banco de Dados
    .snapshotChanges() //Chave e Valor
    .map(mudancas => {
      return mudancas.map(x => ({
        key: x.payload.key, ...x.payload.val()
      })
    );
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad InicioPage');
  }

  saveEssencia(essencia: Essencia) {
    this.essencias.editEssencia(essencia)
      .then(() => {
        this.toast.show(`${essencia.Nome} Alterado!`);
      });
  }

}
