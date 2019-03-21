import { Component } from '@angular/core';
import { AuthService } from './auth.service';
import { HttpService } from './http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'oAuthWebAppDemo';

  constructor(
    public authService: AuthService,
    public httpService: HttpService
  ) {
   }

// tslint:disable-next-line: use-life-cycle-interface

   logIdToken() {
     console.log(`ID Token: ${this.authService.getToken()}`);
   }

   get() {
     this.httpService.getTest()
     .subscribe(res => console.log(res));
   }

   put() {
     this.httpService.putTest()
     .subscribe(res => console.log(res));
   }

   post() {
     this.httpService.postTest()
     .subscribe(res => console.log(res));
   }

   getRefreshToken() {
     console.log(`Refresh token: `, this.authService.getRefreshToken());
   }

   isLoggedIn() {
     console.log(`Is logged in: `, this.authService.isLoggedIn());
   }
}
