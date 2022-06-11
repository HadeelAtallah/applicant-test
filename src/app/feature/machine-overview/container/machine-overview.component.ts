import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Machine } from 'src/app/shared/models/machine';
import { MachineService } from 'src/app/shared/services/machine.service';

@Component({
  selector: 'app-machine-overview',
  template: `
    <div class="w-full h-full m-auto flex flex-row items-center justify-center">
      <app-machines
        class="absolute top-1/2"
        [listOfMachines]="(machines$ | async) ?? []"
      ></app-machines>
    </div>
  `,
})
export class MachineOverviewComponent {
  /**
   * Constructor
   * @param machineService
   * get list of machines
   */
  constructor(private machineService: MachineService) {
    this.machines$ = this.machineService.getMachines();
  }

  /**
   * list of machine observable
   */
  machines$ = new Observable<Machine[]>();
}
