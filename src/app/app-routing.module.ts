import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/me' },
  { path: 'me', loadChildren: () => import('./pages/welcome/welcome.module').then(m => m.WelcomeModule) },
  { path: 'printandplay', loadChildren: () => import('./pages/printandplay/printandplay.module').then(m => m.WelcomeModule) },
  { path: 'micetown', loadChildren: () => import('./pages/micetown/micetown.module').then(m => m.MicetownModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
