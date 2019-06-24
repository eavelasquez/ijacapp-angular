import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {URL_SERVER} from '../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MemberService {

  constructor(private http: HttpClient) { }

  createMember(member: any) {
    this.http.post(URL_SERVER + '/member', member).subscribe(res => console.log(res));
  }
}
