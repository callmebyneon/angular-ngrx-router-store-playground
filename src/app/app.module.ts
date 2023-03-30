import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { StoreRouterConnectingModule, routerReducer } from '@ngrx/router-store';
import { StoreModule } from '@ngrx/store';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListComponent } from './list/list.component';
import { BookComponent } from './book/book.component';
import { bookReducer } from './book/book.reducer';
import { BookInfoComponent } from './book-info/book-info.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    StoreModule.forRoot({
      books: bookReducer,
      router: routerReducer,
    }),
    AppRoutingModule,
    StoreRouterConnectingModule.forRoot(),
    HttpClientModule,
  ],
  providers: [HttpClient],
  declarations: [AppComponent, ListComponent, BookComponent, BookInfoComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}

/*
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://github.com/ngrx/platform
*/
