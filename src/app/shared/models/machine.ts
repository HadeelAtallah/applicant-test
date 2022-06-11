import { MachineState } from '../types/machine-state';
import { MachineType } from '../types/machine-type';

export class Machine {
  constructor(
    public id: number,
    public type: MachineType,
    public name: string,
    public machineState: MachineState
  ) {}
}
