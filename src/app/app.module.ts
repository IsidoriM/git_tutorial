import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';


import { Injectable,  CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule } from '@angular/router';



import { HomeComponent } from './home/home.component';
import { FooterComponent } from './UIComponents/Layouts/footer/footer.component';
import { SideBarComponent } from './UIComponents/Layouts/sidebar/sidebar.component';
import { NavBarComponent } from './UIComponents/Layouts/navbar/navbar.component';
import { DashboardComponent } from './UIComponents/dashboard/dashboard.component';
import { ItemsComponent } from './UIComponents/items/items.component';


import * as CanvasJSAngularChart from '../assets/canvasjs.angular.component';
var CanvasJSChart = CanvasJSAngularChart.CanvasJSChart;

@NgModule({
  declarations: [
    AppComponent,
	CanvasJSChart,
  AppComponent,
  HomeComponent,
  FooterComponent,
  SideBarComponent,
  NavBarComponent,
  DashboardComponent,
  ItemsComponent,
  ],
  imports: [
    BrowserModule, HttpClientModule,
    
     

    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    }),
    RouterModule.forRoot([
      { path: 'home', component: HomeComponent, pathMatch: 'full' },
      { path: 'home', component: HomeComponent },
      { path: 'footer', component: FooterComponent },
      { path: 'sidebar', component: SideBarComponent },
      { path: 'navbar', component: NavBarComponent },
      { path: 'dashboard', component: DashboardComponent },
      { path: 'items', component: ItemsComponent },
    ])
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }


// AoT requires an exported function for factories
export function HttpLoaderFactory(httpClienst: HttpClient) {
  /*return new TranslateHttpLoader(httpClient);*/
  return new TranslateHttpLoader(httpClienst, './assets/i18n/', '.json');
}
