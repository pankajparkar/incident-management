import { Controller, Get, Put, Query } from '@nestjs/common';
import { IncidentService } from './incident.service';

@Controller('/')
export class IncidentController {
    constructor(
        private readonly incidentServcice: IncidentService
    ) { }

    @Get('/list')
    async getAll(@Query() query) {
        return await this.incidentServcice.getList(query.limit, query.page);
    }

    @Put()
    async put() {
        return await this.incidentServcice.create({});
    }
}
