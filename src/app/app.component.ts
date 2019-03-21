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
    authService.handleAuthentication();
   }

// tslint:disable-next-line: use-life-cycle-interface
   ngOnInit(): void {
     if (localStorage.getItem('isLoggedIn') === 'true') {
       this.authService.renewTokens();
     }
   }

   logIdToken() {
     console.log(`ID Token: ${this.authService.idToken}`);
   }

   logAccessToken() {
     console.log(`Access token: ${this.authService.accessToken}`);
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
}
