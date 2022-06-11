import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { MachineOverviewModule } from './feature/machine-overview/machine-overview.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    CoreModule,
    CommonModule,
    HttpClientModule,
    MachineOverviewModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
