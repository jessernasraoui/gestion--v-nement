import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ActionComponent } from './action/action.component';
import { ActionListComponent } from './action/action-list/action-list.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {
    path:'add-action',component:ActionComponent
  },
  {path:'actions',component:ActionListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
