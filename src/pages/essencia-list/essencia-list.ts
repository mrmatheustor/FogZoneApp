import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { EssenciaListService } from '../../services/essencia-list/essencia-list.service';
import { Observable } from 'rxjs/observable';
import { Essencia } from '../../models/essencias/essencias.model';
import { ToastService } from '../../services/toast/toast.service';
import * as _ from 'lodash';

/**
 * Generated class for the EssenciaListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-essencia-list',
  templateUrl: 'essencia-list.html',
})
export class EssenciaListPage {

  essenciaLista$: Observable<Essencia[]>;
  teste: Essencia;

  constructor(public navCtrl: NavController, public navParams: NavParams, private essencias: EssenciaListService, private toast: ToastService) {
    this.teste = this.navParams.get('essencia');


    this.essenciaLista$ = this.essencias
      .getEssenciaList()
      .snapshotChanges()
      .map(mudancas => {
        return mudancas.map(x => ({
          key: x.payload.key, ...x.payload.val()
        })
        );
      });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EssenciaListPage');
  }

  saveEssencia(essencia: Essencia) {
    this.essencias.editEssencia(essencia)
      .then(() => {
        this.toast.show(`${essencia.Nome} Salvo!`);
      });
  }
  filtrarItems(termo) {

    this.essenciaLista$ = this.essencias
      .getEssenciaList()
      .snapshotChanges()
      .map(mudancas => {
        return mudancas.map(x => ({
          key: x.payload.key, ...x.payload.val()
        })
        );
      });


    var q = termo.srcElement.value;
    if (!q) {
      return;
    }

    this.essenciaLista$ = _.chain(this.essenciaLista$).filter((v) => {
      if (v.Nome && q.Nome) {
        if (v.Nome.toLowerCase().indexOf(q.toLowerCase()) > -1) {
          return true;
        }
        return false;
      }
    }).value();


  }
}


