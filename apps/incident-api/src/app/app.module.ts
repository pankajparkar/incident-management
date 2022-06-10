import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';

import { ApiIncidentModule } from '@incident-management/api/incident';
import { RouterModule } from '@nestjs/core';
import { routes } from './routes';

@Module({
  imports: [
    ApiIncidentModule,
    RouterModule.register(routes),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
