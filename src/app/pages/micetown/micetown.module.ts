import { NgModule } from '@angular/core';
import { GsPlayerModule} from 'gs-player';

import { MicetownRoutingModule } from './micetown-routing.module';

import { MicetownComponent } from './micetown.component';


@NgModule({
  imports: [MicetownRoutingModule, GsPlayerModule],
  declarations: [MicetownComponent],
  exports: [MicetownComponent]
})
export class MicetownModule { }
