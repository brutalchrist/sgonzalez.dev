import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MicetownComponent } from './micetown.component';

const routes: Routes = [
  { path: '', component: MicetownComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MicetownRoutingModule { }
