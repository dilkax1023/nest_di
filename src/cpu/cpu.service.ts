import { Injectable } from '@nestjs/common';
import { PowerService } from 'src/power/power.service';

@Injectable()
export class CpuService {
  constructor(public powerService: PowerService) {}

  compute(a: number, b: number) {
    this.powerService.supply(10);
    console.log('Cpu is working very well');
    return a + b;
  }
}
