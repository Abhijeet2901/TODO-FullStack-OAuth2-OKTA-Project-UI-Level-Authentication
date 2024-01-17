import { Component } from '@angular/core';
import { OAuthService } from 'angular-oauth2-oidc';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  constructor(private oauthService: OAuthService ) {
  }

  /**
   * Logout of the application. Revokes the access token
   * and initiates a complete logout.
   */
  logout():boolean {
    console.log("> Calling AppComponent.logout()...")

    this.oauthService.revokeTokenAndLogout().catch(

      // This takes care of the case when revoking a token fails
      // because its already invalid. So this makes sure that we
      // still log out of the application and session cleanup is
      // done
      (error:any) => {
        console.log("> Calling just logout...")
        this.oauthService.logOut();
      }
    )

    // important
    return false
  }

}
