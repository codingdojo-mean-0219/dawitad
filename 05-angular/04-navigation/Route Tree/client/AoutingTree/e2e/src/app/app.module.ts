import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ProductsComponent } from './products/products.component';
import { ProductDetailsComponent } from './products/product-details/product-details.component';
import { CategoryComponent } from './products/category/category.component';
import { BrandComponent } from './products/brand/brand.component';


import { DetailsComponent } from './details/details.component';
import { AuthorComponent } from './details/author/author.component';
import { AllComponent } from './details/all/all.component';
import { ReviewDetailsComponent } from './details/review-details/review-details.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    DetailsComponent,
    BrandComponent,
    CategoryComponent,
    ProductDetailsComponent,
    AuthorComponent,
    AllComponent,
    ReviewDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
