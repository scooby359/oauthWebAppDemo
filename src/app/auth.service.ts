import { Injectable } from '@angular/core';
import { OAuthService } from 'angular-oauth2-oidc';
import { JwksValidationHandler } from 'angular-oauth2-oidc';
import { AuthConfig } from 'angular-oauth2-oidc';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private auth: OAuthService) {

    const authConfig: AuthConfig = {
      issuer: `https://dev-rf8xww-i.eu.auth0.com/`, // issuer auth url
      redirectUri: `${window.location.origin}/callback`, // redirect uri
      clientId: `3nAWcHTgernH5H5OYZji7E3LD1Bqhtwj`, // client id
      scope: `openid profile email` // permission scope
    };

    console.log(`Config: ${authConfig}`);

    this.auth.configure(authConfig);
    this.auth.tokenValidationHandler = new JwksValidationHandler();
    this.auth.loadDiscoveryDocumentAndTryLogin();
  }

  login() {
    console.log(`Login called`);
    return this.auth.initImplicitFlow();
  }

  logout() {
    console.log(`Logout called`);
    this.auth.logOut();
  }

  getClaim() {
    const claims = this.auth.getIdentityClaims();
    if (!claims) {
      return claims;
    }
  }

  getToken() {
    return this.auth.getIdToken();
  }

  getRefreshToken() {
    return this.auth.getRefreshToken();
  }

  isLoggedIn() {
    return this.auth.hasValidIdToken();
  }
}

