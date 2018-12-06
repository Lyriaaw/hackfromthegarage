import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {ApiService} from './api.service';
import {Medical} from '../models/medical';


@Injectable()
export class MedicalService {


  constructor(private api: ApiService) { }

  fetchData(): Observable<Medical[]> {

    // this.api.get('')

    let medics = [];



    return null;
  }


}
