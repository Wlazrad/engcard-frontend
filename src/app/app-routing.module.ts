import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { BoardUserComponent } from './board-user/board-user.component';
import { BoardModeratorComponent } from './board-moderator/board-moderator.component';
import { BoardAdminComponent } from './board-admin/board-admin.component';
import {WordComponent} from "./word/word.component";
import {WordListComponent} from "./word/word-list/word-list.component";
import {WordListAllUsersComponent} from "./word/word-list-all-users/word-list-all-users.component";
import {WordListTeachComponent} from "@src/app/word/word-list-teach/word-list-teach.component";


const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'user', component: BoardUserComponent },
  { path: 'mod', component: BoardModeratorComponent },
  { path: 'admin', component: BoardAdminComponent },
  { path: 'word', component: WordComponent },
  { path: 'wordlist', component: WordListComponent },
  { path: 'wordlistallusers', component: WordListAllUsersComponent },
  { path: 'wordlistteach', component: WordListTeachComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

