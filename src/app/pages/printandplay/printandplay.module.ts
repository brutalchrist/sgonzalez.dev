import { NgModule } from '@angular/core';

import { PrintandplayRoutingModule } from './printandplay-routing.module';

import { PrintandplayComponent } from './printandplay.component';


@NgModule({
  imports: [PrintandplayRoutingModule],
  declarations: [PrintandplayComponent],
  exports: [PrintandplayComponent]
})
export class WelcomeModule { }
