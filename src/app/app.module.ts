import { VoterComponent } from './voter/voter.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { VotersComponent } from './voters/voters.component';
import { FormsModule } from '@angular/forms';
import { CreateCMComponent } from './create-cm/create-cm.component';
import { LoginAdminComponent } from './login-admin/login-admin.component';
import { LoginCmComponent } from './login-cm/login-cm.component';
import { LoginVoterComponent } from './login-voter/login-voter.component';
import { NewPassComponent } from './new-pass/new-pass.component';

@NgModule({
  declarations: [
    AppComponent, VoterComponent, VotersComponent, CreateCMComponent, LoginAdminComponent, LoginCmComponent, LoginVoterComponent, NewPassComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
