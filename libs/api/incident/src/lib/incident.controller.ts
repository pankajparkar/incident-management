import { Controller, Get, Query } from '@nestjs/common';
import { IncidentService } from './incident.service';

@Controller('/')
export class IncidentController {
    constructor(
        private readonly incidentServcice: IncidentService
    ) { }

    @Get()
    async getData(@Query() query) {
        return await this.incidentServcice.getData(query.limit, query.page);
    }
}
