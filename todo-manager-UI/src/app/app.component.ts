import { Component } from '@angular/core';
import { OAuthService } from 'angular-oauth2-oidc';
import { oauthConfig } from './todo.config';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'todo-manager';

  constructor(private oauthService: OAuthService ) {
  }

  ngOnInit(): void {
    console.log("> Calling AppComponent.ngOnInit()...")

    // Initiate the authorize request to the Authorization
    // Server.
    this.oauthService.configure(oauthConfig);
    this.oauthService.loadDiscoveryDocumentAndLogin();
  }
}
