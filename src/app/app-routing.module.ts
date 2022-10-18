import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AuthenticationComponent } from "./components/authentication/authentication.component";
import { ProfileComponent } from "./components/profile/profile.component";
import { ProfileAccessGuard } from "./shared/guards/profile-access.guard";

const routes: Routes = [
  {
    path: 'auth',
    component: AuthenticationComponent
  },
  {
    path: 'profile',
    component: ProfileComponent,
    canActivate: [ProfileAccessGuard]
  },
  {
    path: '**',
    redirectTo: 'auth'
  }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AuthenticationRoutingModule { }
