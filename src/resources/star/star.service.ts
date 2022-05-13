import { Injectable } from '@nestjs/common';
import { Rating } from '../../';
import type { ISumRatingItem } from '../../';

@Injectable()
export class StarService {
  private rating: Rating;
  constructor() {
    this.rating = new Rating();
  }
  public calculate(item: ISumRatingItem[]) {
    this.rating.calculate(item);
  }
}
