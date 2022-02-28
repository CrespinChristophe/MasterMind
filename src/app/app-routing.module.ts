import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MastermindComponent } from './mastermind/mastermind.component';

const routes: Routes = [
  { path:"", redirectTo: "mastermind", pathMatch: 'full' },
  { path : "mastermind", component: MastermindComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
