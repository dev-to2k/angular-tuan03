import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Bt01Component } from './tuan03/bt01/bt01.component';
import { Bt02Component } from './tuan03/bt02/bt02.component';
import { Bt03Component } from './tuan03/bt03/bt03.component';
import { Bt04Component } from './tuan03/bt04/bt04.component';

const routes: Routes = [
  { path: 'bt01', component: Bt01Component },
  { path: 'bt02', component: Bt02Component },
  { path: 'bt03', component: Bt03Component },
  { path: 'bt04', component: Bt04Component },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
