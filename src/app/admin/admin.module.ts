import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SocialLoginModule, AuthServiceConfig, FacebookLoginProvider } from 'angularx-social-login';

import { AdminRoutingModule } from './admin-routing.module';
import { LoginPanelComponent } from './login-panel/login-panel.component';
import { RegisterFormComponent } from './register-form/register-form.component';

const config = new AuthServiceConfig([
  {
    id: FacebookLoginProvider.PROVIDER_ID,
    provider: new FacebookLoginProvider('')
  }
]);

export function provideConfig() {
  return config;
}

@NgModule({
  declarations: [LoginPanelComponent, RegisterFormComponent],
  imports: [
    CommonModule,

    SocialLoginModule,

    AdminRoutingModule
  ],
  providers: [
    {
      provide: AuthServiceConfig,
      useFactory: provideConfig
    }
  ],
})
export class AdminModule { }
