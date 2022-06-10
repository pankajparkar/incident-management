import { ApiIncidentModule } from "@incident-management/api/incident";
import { Routes } from "@nestjs/core";

export const routes: Routes = [
    {
        path: '/incident',
        module: ApiIncidentModule,
    },
];