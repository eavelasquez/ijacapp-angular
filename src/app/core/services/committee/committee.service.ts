import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {URL_SERVER} from '../../../../environments/environment';
import {CommunityActionService} from '../community-action.service';

@Injectable({
  providedIn: 'root'
})
export class CommitteeService {

  url = URL_SERVER + '/committee';
  constructor(private http: HttpClient, private communityActionService: CommunityActionService) { }

  async createCommittee(committee: any) {
    const communityAction = this.communityActionService.community[0]._id;
    console.log('JAC', communityAction);
    return await this.http.post(this.url, committee).subscribe(async (res: any) => {
      console.log('Comité', res._id);
      if (res) {
        await this.http.put(`${URL_SERVER}/community-action/committee/${communityAction}`, [res._id]).subscribe(value => {
          console.log(value);
          this.communityActionService.load();
        });
      }
    });
  }

  registerAffiliates(committee, affiliates) {
    this.createCommittee(committee).then((value: any) => {
      this.http.put(`${URL_SERVER}/committee/affiliate/${value._id}`, [affiliates._id]).subscribe(value1 => {
        return value1;
      });
    });
  }

  showCommittees() {
    return this.http.get(this.url);
  }
}
