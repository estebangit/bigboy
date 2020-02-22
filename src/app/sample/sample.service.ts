import { Injectable } from '@angular/core';
import {Owner} from './owner.model';
import {ProjectStatus} from './projectstatus.model';

@Injectable({
  providedIn: 'root'
})
export class SampleService {

  constructor() { }

  public getOwners(): Owner[] {
    return [
        {id: '001', name: 'toto', email: 'toto@pipo.org', dateOfBirth: '01/01/1971'},
        {id: '002', name: 'titi', email: 'titi@pipo.org', dateOfBirth: '02/02/1972'},
        {id: '003', name: 'tutu', email: 'tutu@pipo.org', dateOfBirth: '03/03/1973'},
        {id: '004', name: 'tsts', email: 'tsts@pipo.org', dateOfBirth: '04/04/1974'},
        {id: '005', name: 'tztz', email: 'tztz@pipo.org', dateOfBirth: '05/05/1975'},
        {id: '006', name: 'tztz', email: 'tztz@pipo.org', dateOfBirth: '06/06/1976'},
        {id: '007', name: 'tztz', email: 'tztz@pipo.org', dateOfBirth: '07/07/1977'},
        {id: '008', name: 'tztz', email: 'tztz@pipo.org', dateOfBirth: '08/08/1978'},
        {id: '009', name: 'tztz', email: 'tztz@pipo.org', dateOfBirth: '09/09/1979'},
        {id: '010', name: 'tztz', email: 'tztz@pipo.org', dateOfBirth: '10/10/1980'},
        {id: '011', name: 'tztz', email: 'tztz@pipo.org', dateOfBirth: '11/11/1981'},
        {id: '012', name: 'tztz', email: 'tztz@pipo.org', dateOfBirth: '12/12/1982'},
        {id: '013', name: 'tztz', email: 'tztz@pipo.org', dateOfBirth: '13/03/1983'},
        {id: '014', name: 'tztz', email: 'tztz@pipo.org', dateOfBirth: '14/04/1984'},
        {id: '015', name: 'tztz', email: 'tztz@pipo.org', dateOfBirth: '15/05/1985'}
    ];
  }

  public getProjectsStatus(): ProjectStatus[] {
    const status: ProjectStatus[] = new Array(10);

    for(let i = 0; i < 10; i++) {
        const b: number = this.getRndInteger(0, 9);
        status[i] = {id: '0' + i, name: 'toto' + i, step1: 'ok', step2: 'nok' + b, step3: 'nok' + b};
    }

    return status;
  }

  private getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min) ) + min;
  }

}
