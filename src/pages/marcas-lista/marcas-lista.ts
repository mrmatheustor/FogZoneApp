import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { EssenciaListService } from '../../services/essencia-list/essencia-list.service';
import { Essencia } from '../../models/essencias/essencias.model';
import { ToastService } from '../../services/toast/toast.service';
import * as _ from 'lodash';
import { Observable } from 'rxjs/observable';

/**
 * Generated class for the MarcasListaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-marcas-lista',
  templateUrl: 'marcas-lista.html',
})
export class MarcasListaPage {

  essenciaSabor: Essencia;
  essenciaLista$: Observable<Essencia[]>;
  pegarMarca: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, private essencias: EssenciaListService, private toast: ToastService) {




  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MarcasListaPage');
    this.pegarMarca = this.navParams.get('string');

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

  saveEssencia(essencia: Essencia) {
    this.essencias.editEssencia(essencia)
      .then(() => {
        this.toast.show(`${essencia.Nome} Alterado!`);
      });
  }

}
