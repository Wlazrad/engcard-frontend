import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from '@src/app/app-routing.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';

import {AppComponent} from '@src/app/app.component';
import {LoginComponent} from '@src/app/login/login.component';
import {RegisterComponent} from '@src/app/register/register.component';
import {HomeComponent} from '@src/app/home/home.component';
import {ProfileComponent} from '@src/app/profile/profile.component';
import {BoardAdminComponent} from '@src/app/board-admin/board-admin.component';
import {BoardModeratorComponent} from '@src/app/board-moderator/board-moderator.component';
import {BoardUserComponent} from '@src/app/board-user/board-user.component';

import {authInterceptorProviders} from '@src/app/_helpers/auth.interceptor';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {WordComponent} from '@src/app/word/word.component';
import {WordListComponent} from '@src/app/word/word-list/word-list.component';
import {WordListAllUsersComponent} from '@src/app/word/word-list-all-users/word-list-all-users.component';
import {MatAutocompleteModule} from "@angular/material/autocomplete";
import {AutoGeneratedComponent} from '@src/app/auto-generated/auto-generated.component';
import {WordListTeachComponent} from '@src/app/word/word-list-teach/word-list-teach.component';
import {WordGuessComponent} from '@src/app/word-guess/word-guess.component';
import {FooterComponent} from '@src/app/footer/footer.component';
import {HeaderComponent} from '@src/app/header/header.component';
import {SignatureFieldComponent} from "@src/app/signature-field/signature-field.component";
import {SignaturePadModule} from "angular2-signaturepad";


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    ProfileComponent,
    BoardAdminComponent,
    BoardModeratorComponent,
    BoardUserComponent,
    WordComponent,
    WordListComponent,
    WordListAllUsersComponent,
    AutoGeneratedComponent,
    WordListTeachComponent,
    WordGuessComponent,
    FooterComponent,
    HeaderComponent,
    SignatureFieldComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MatAutocompleteModule,
    SignaturePadModule
  ],
  providers: [authInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
