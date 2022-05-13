import { Module } from '@nestjs/common';
import { StarService } from './star.service';

@Module({
  imports: [],
  providers: [StarService],
})
export class StarModule {}
