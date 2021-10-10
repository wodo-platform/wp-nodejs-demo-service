import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { PrismaService } from '../../service/prisma.service';
import { DemoService } from '../../service/demo/demo.service';
import { DemoController } from '../../controller/demo/demo.controller';

@Module({
  imports: [ 
  ],
  providers: [
    PrismaService,
    DemoService
  ],
  controllers: [
    DemoController
  ],
  exports: [DemoService]
})
export class DemoModule implements NestModule {
  public configure(consumer: MiddlewareConsumer) {
  }
}