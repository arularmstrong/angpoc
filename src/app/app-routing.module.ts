import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AccountListComponent } from './account-list/account-list.component';
const routes: Routes = [
    { path:  '', redirectTo:  'accounts', pathMatch:  'full' },
{
    path:  'accounts',
    component:  AccountListComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
