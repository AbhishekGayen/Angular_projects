import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import {DashboardService} from "./dasboard/dasboard.service";
import {HttpClient, HttpHandler} from "@angular/common/http";

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes),
    DashboardService, HttpClient]
};
