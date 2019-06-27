import { Injectable } from '@angular/core';
import { StorageKey } from '../storage/storage.enum';
import { HttpClient } from '@angular/common/http';
import { StorageService } from '../storage/storage.service';
import { URL_SERVER } from '../../../../environments/environment';
import { map } from 'rxjs/operators';

const { AUTH_TOKEN } = StorageKey;

@Injectable({
    providedIn: 'root'
})
export class AuthService {
    endPoint = '/auth';
    token: string;
    user: any;
    redirectUrl: string;

    constructor(private http: HttpClient, private storage: StorageService) {
      this.token = this.storage.read(AUTH_TOKEN) || '';
    }

    public async userLogin(auth: Auth) {
        const url = URL_SERVER + this.endPoint;
        try {
          return await this.http.post(url, auth).pipe(map((res: any) => {
            this.token = res.token;
            this.user = res.validate;
            this.storage.save(StorageKey.AUTH_TOKEN, this.token);
            return this.redirectUrl;
          }));
        } catch (error) {
          console.error('Error durante la petición login', error);
          return Promise.reject(error.message);
        }
    }

  public getToken(): string {
    return this.token;
  }

  public userLogout() {
    this.token = '';
    this.storage.remove(AUTH_TOKEN);
  }

  public isLogged(): boolean {
    return this.token.length > 0;
  }
}

export interface Auth {
    username: string;
    password: string;
}
