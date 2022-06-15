import { Routes } from "@nestjs/core";
import { ApiIncidentModule } from "@incident-management/api/incident";

export const routes: Routes = [
    {
        path: '/incident',
        module: ApiIncidentModule,
    },
];
