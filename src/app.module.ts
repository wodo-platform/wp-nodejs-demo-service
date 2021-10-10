import { Module } from '@nestjs/common';
import { ScheduleModule } from '@nestjs/schedule';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DemoModule } from './module/demo/demo.module';

@Module({
  imports: [
    ScheduleModule.forRoot(),
    DemoModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}