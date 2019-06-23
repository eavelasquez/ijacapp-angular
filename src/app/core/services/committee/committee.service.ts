import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {URL_SERVER} from '../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CommitteeService {

  url = URL_SERVER + '/committee';
  constructor(private http: HttpClient) { }

  createCommittee(committee: any) {
    this.http.post(this.url, committee).subscribe(res => console.log(res));
  }

  showCommittees() {
    return this.http.get(this.url);
  }
}
