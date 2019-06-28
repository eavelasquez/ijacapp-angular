import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {URL_SERVER} from '../../../../environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AffilService {

  url = `${URL_SERVER}/affiliate`;
  constructor(private http: HttpClient) { }

  createAffil(affil: any) {
    return this.http.post(URL_SERVER + '/affiliate', affil).subscribe(res => console.log(res));
  }

  getAffils(sort?: string, order?: string, page?: number) {
    return this.http.get(this.url);
  }
}
