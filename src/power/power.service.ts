import { Injectable } from '@nestjs/common';

@Injectable()
export class PowerService {
  supply(num: number): void {
    console.log(`Supply ${num} amout of power`);
  }
}
