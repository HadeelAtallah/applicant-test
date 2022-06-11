import { NgModule } from '@angular/core';
import { MachineOverviewComponent } from './container/machine-overview.component';
import { MachinesComponent } from './components/machines/machines.component';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [CommonModule],
  exports: [MachineOverviewComponent],
  declarations: [MachineOverviewComponent, MachinesComponent],
  providers: [],
})
export class MachineOverviewModule {}
