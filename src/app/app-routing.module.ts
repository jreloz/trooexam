import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateProfileComponent } from './profile/create-profile/create-profile.component';
import { ListProfileComponent } from './profile/list-profile/list-profile.component';
import { ViewProfileComponent } from './profile/view-profile/view-profile.component';

const routes: Routes = [
  {
    path:'', component:ListProfileComponent
  },
  {
    path:'profile', component:ListProfileComponent
  },
  {
    path:'profile/create', component:CreateProfileComponent
  },
  {
    path: 'profile/:id', component:ViewProfileComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
