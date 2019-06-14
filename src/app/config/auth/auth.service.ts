import { Injectable } from '@angular/core';
import { StorageKey } from '../../core/services/storage/storage.enum';
import { HttpClient } from '@angular/common/http';
import { StorageService } from '../../core/services/storage/storage.service';
import { URL_SERVER } from '../../../environments/environment';
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

    async login( auth: Auth ) {
        const url = URL_SERVER + this.endPoint;
        return this.http.post(url, auth).subscribe( res => {
            console.log(res),
            this.user = res;
        } );
    }

//   public async mockLogin() {
//     try {
//         if (!(email === 'user' && password === 'user')) {
//             throw new Error(
//                 'When using mockLogin, login with credentials: \nemail: user\npassword:user',
//             );
//         }
//         this.token = 'user';
//         this.storage.save(StorageKey.AUTH_TOKEN, this.token);
//         return this.redirectUrl;
//     } catch (e) {
//         return Promise.reject(e.message);
//     }
// }

//   public getToken(): string {
//     return this.token;
//   }

//   public logout() {
//     this.token = '';
//     this.storage.remove(AUTH_TOKEN);
//   }

//   public isLogged(): boolean {
//     return this.token.length > 0;
//   }
}

export interface Auth {
    username: string;
    password: string;
}
