import { Injectable } from "@angular/core";
import { AngularFireDatabase } from "angularfire2/database";
import { Essencia } from "../../models/essencias/essencias.model";

@Injectable()
export class EssenciaListService {

    private essenciaListRef = this.db.list<Essencia>('essencia-list');
    constructor(private db : AngularFireDatabase) {

    }

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