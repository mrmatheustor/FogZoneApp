import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Essencia, Marcas } from '../../models/essencias/essencias.model';
import { EssenciaListService } from '../../services/essencia-list/essencia-list.service';
import { InicioPage } from '../inicio/inicio';
import { ToastService } from '../../services/toast/toast.service';
import { Observable } from 'rxjs/observable';

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

  marcaLista$: Observable<Marcas[]>;
  essencia: Essencia = {
    Marca: '',
    Nome: '',
    desc: '',
    preco: undefined,
    checked: false
  };

  marcaTeste: Marcas = {
    Marcae: ''
  };


  constructor(public navCtrl: NavController, public navParams: NavParams, private essencias: EssenciaListService, private toast: ToastService) {
    
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
    console.log('ionViewDidLoad AddEssenciaPage');
  }
  addEssencia(essencia: Essencia) {
    this.essencias.addEssencia(essencia).then(ref => {
      this.toast.show(`${essencia.Nome} Adicionado!`);
      this.navCtrl.setRoot('InicioPage', { key: ref.key });
    });
  }

  addMarca(marca: Marcas) {
    this.essencias.addMarca(marca).then(ref => {
      this.toast.show(`Marca ${marca.Marcae} adicionada!`);
      this.navCtrl.setRoot('InicioPage', { key: ref.key });
    });
  }

}
