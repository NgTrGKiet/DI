import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DiskModule } from './disk/disk.module';
import { PowerModule } from './power/power.module';
import { CpuModule } from './cpu/cpu.module';
import { ComputerModule } from './computer/computer.module';

@Module({
  imports: [DiskModule, PowerModule, CpuModule, ComputerModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
