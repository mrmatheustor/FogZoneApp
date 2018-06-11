import { Injectable } from "@angular/core";
import { AngularFireDatabase } from "angularfire2/database";
import { Essencia, Marcas } from "../../models/essencias/essencias.model";

@Injectable()
export class EssenciaListService {

    private essenciaListRef = this.db.list<Essencia>('essencia-list');
    private marcasListRef = this.db.list<Marcas>('marcas-list');
    constructor(private db : AngularFireDatabase) {

    }

    //Marcas
    addMarca(marca: Marcas) {
        return this.marcasListRef.push(marca);
    }
    getMarcaList() {
        return this.marcasListRef;
    }

    //Essencias
    getEssenciaList() {
        return this.essenciaListRef;
    }

    addEssencia(essencia: Essencia) {
        return this.essenciaListRef.push(essencia);
    }
    
    

    editEssencia(essencia: Essencia) {
        return this.essenciaListRef.update(essencia.key, essencia);
    }

    removeEssencia(essencia: Essencia) {
        return this.essenciaListRef.remove(essencia.key);
    }

}