import { Injectable } from '@angular/core';
import {Owner} from './owner.model';

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
        {id: '005', name: 'tztz', email: 'tztz@pipo.org', dateOfBirth: '05/05/1975'}
    ];
  }

}
