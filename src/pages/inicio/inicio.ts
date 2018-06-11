import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { EssenciaListPage } from '../essencia-list/essencia-list';
import { EssenciaListService } from '../../services/essencia-list/essencia-list.service';
import { Observable } from 'rxjs/observable';
import { Essencia, Marcas } from '../../models/essencias/essencias.model';
import { ToastService } from '../../services/toast/toast.service';

import * as _ from 'lodash';
import { MarcasListaPage } from '../marcas-lista/marcas-lista';

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
  marcaLista$: Observable<Marcas[]>;
  filtro: Essencia;
  parametrosEssencia: Essencia;
  parametros: any;


  constructor(public navCtrl: NavController, public navParams: NavParams, private essencias: EssenciaListService, private toast: ToastService) {



    this.essenciaLista$ = this.essencias
      .getEssenciaList() //Retorna a lista do Banco de Dados
      .snapshotChanges() //Chave e Valor
      .map(mudancas => {
        return mudancas.map(x => ({
          key: x.payload.key, ...x.payload.val()
        })
        );
      });

      this.marcaLista$ = this.essencias
      .getMarcaList()
      .snapshotChanges()
      .map(mudancas => {
        return mudancas.map(x => ({
          key: x.payload.key, ...x.payload.val()
        })
        );
      });


  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad InicioPage');
    // this.parametrosEssencia = this.navParams.get('essencia');

    // this.filtro = _.chain(this.essencias.getEssenciaList()).filter(x => x.Marca == this.parametrosEssencia.Marca).sortBy('Marca').value();
    // this.filtro = _.chain(this.parametrosEssencia).grouBy('Marca').value();
    // console.log('Mostrando: ', this.filtro.Marca);
  }

  saveEssencia(essencia: Essencia) {
    this.essencias.editEssencia(essencia)
      .then(() => {
        this.toast.show(`${essencia.Nome} Alterado!`);
      });
  }

  // itemTapped(par) {
  //   this.navCtrl.push(MarcasListaPage, par);
  // }

}
