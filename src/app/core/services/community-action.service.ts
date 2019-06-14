import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { URL_SERVER } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CommunityActionService {

  constructor(private http: HttpClient) { }
  community: any;
  registerC(community) {
    const url = URL_SERVER + '/community-action';
    return this.http.post(url, community);
  }

  load() {
    const url = URL_SERVER + '/community-action';
    return this.http.get(url).subscribe(data => {
      this.community = data;
      console.log(this.community);
    });
  }
}
