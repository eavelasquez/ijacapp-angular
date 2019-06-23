import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {URL_SERVER} from '../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AffilService {

  constructor(private http: HttpClient) { }

  createAffil(affil: any) {
    return this.http.post(URL_SERVER + '/affiliate', affil).subscribe(res => console.log(res));
  }

  showAffils() {
    return this.http.get(URL_SERVER + '/affiliate');
  }
}
