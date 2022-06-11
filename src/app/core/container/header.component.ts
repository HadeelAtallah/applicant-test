import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Machine } from 'src/app/shared/models/machine';
import { MachineService } from 'src/app/shared/services/machine.service';
import { MachineState } from 'src/app/shared/types/machine-state';

@Component({
  selector: 'app-header',
  template: `
    <div class="w-full">
      <app-navbar></app-navbar>
      <div
        class="bg-gray-300 text-white w-full h-max cursor-default shadow-sm overflow-hidden"
      >
        <div class="flex justify-left h-14 m-auto">
          <div
            class="flex flex-row justify-center"
            *ngFor="let machine of machines$ | async"
          >
            <div
              class="w-32 h-full flex flex-col items-center align-middle p-5 relative"
              [ngClass]="{
                'bg-red-500': machine.machineState === machineState.ALARM,
                'bg-gray-300 text-black':
                  machine.machineState === machineState.RUNNING,
                'bg-orange-400': machine.machineState === machineState.WARNING
              }"
            >
              <div class="absolute top-0 right-0 pt-px pr-px">
                <span
                  class="material-icons text-right"
                  [ngClass]="
                    machine.machineState == 'running'
                      ? 'text-green-500'
                      : 'text-white'
                  "
                >
                  {{ getStateIcon(machine.machineState) }}
                </span>
              </div>
              <p class="m-auto text-md">{{ machine.name }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  `,
})
export class HeaderComponent {
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

  /**
   * machine state
   */
  machineState = MachineState;

  /**
   * get machine state icon
   */
  getStateIcon(state: string): string {
    switch (state) {
      case 'running':
        return 'settings_backup_restore';
      case 'warning':
        return 'report_problem';
      case 'alarm':
        return 'error_outline';
      default:
        return '';
    }
  }
}
