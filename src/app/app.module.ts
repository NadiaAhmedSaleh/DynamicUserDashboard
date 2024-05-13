import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { DetailsComponent } from './components/details/details.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgxSpinnerModule } from "ngx-spinner";
import { LoadingInterceptor } from './interceptor/loading.interceptor';
import { SearchPipe } from './search.pipe';
import { FormsModule } from '@angular/forms';
import {NgxPaginationModule} from 'ngx-pagination'; 
import { httpCacheInterceptor } from './interceptor/http-cache-interceptor.interceptor';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DetailsComponent,
    NotfoundComponent,
    SearchPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NgxSpinnerModule,
    FormsModule,
    NgxPaginationModule,
    


  ],
  providers: [{provide:HTTP_INTERCEPTORS, useClass:LoadingInterceptor, multi:true},

  
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
