

import {Routes, RouterModule} from "@angular/router";
import {ModuleWithProviders} from "@angular/core";
import {storageRoutes} from "./storage/storage.routes";
import {HomeComponent} from "./home/home.component";


export const routes: Routes = [
    { path:'', redirectTo:'home', pathMatch: 'full'}, { path:'home', component: HomeComponent}, ...storageRoutes
];

export const routings: ModuleWithProviders = RouterModule.forRoot(routes);
