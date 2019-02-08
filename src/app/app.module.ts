import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { NodeComponent } from './node/node.component';
import { ManagementComponent } from './management/management.component';
import { NodesService } from './shared/services/nodes.service';

@NgModule({
  declarations: [
    AppComponent,
    NodeComponent,
    ManagementComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [NodesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
