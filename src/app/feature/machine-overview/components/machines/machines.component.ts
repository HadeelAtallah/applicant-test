import { Component, Input, OnInit } from '@angular/core';
import { Machine } from 'src/app/shared/models/machine';
import { MachineState } from 'src/app/shared/types/machine-state';
import { MachineType } from 'src/app/shared/types/machine-type';

@Component({
  selector: 'app-machines',
  templateUrl: 'machines.component.html',
})
export class MachinesComponent {
  /**
   * list of machines setter
   */
  @Input() set listOfMachines(listOfMachines: Machine[]) {
    this.machines = listOfMachines;
  }

  /**
   * machine state
   */
  machineState = MachineState;

  /**
   * list of machines
   */
  machines: Machine[] = [];

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

  /**
   * get machine  icon
   */
  getMachineIcon(type: MachineType): string {
    switch (type) {
      case 'Attacher':
        return 'chrome_reader_mode';
      case 'Closer':
        return 'view_comfy';
      case 'Packer':
        return 'call_to_action';
      case 'Scale':
        return 'system_update_alt';
      default:
        return '';
    }
  }
}
