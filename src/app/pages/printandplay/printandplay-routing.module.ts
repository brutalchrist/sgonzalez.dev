import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PrintandplayComponent } from './printandplay.component';

const routes: Routes = [
  { path: '', component: PrintandplayComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PrintandplayRoutingModule { }
