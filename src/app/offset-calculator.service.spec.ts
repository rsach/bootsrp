/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { OffsetCalculatorService } from './offset-calculator.service';

describe('OffsetCalculatorService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [OffsetCalculatorService]
    });
  });

  it('should ...', inject([OffsetCalculatorService], (service: OffsetCalculatorService) => {
    expect(service).toBeTruthy();
  }));
});
