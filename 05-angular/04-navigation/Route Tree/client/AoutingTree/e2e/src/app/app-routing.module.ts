import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';


import { ProductsComponent } from './products/products.component';
import { ProductDetailsComponent } from './products/product-details/product-details.component';
import { CategoryComponent } from './products/category/category.component';
import { BrandComponent } from './products/brand/brand.component';


import { DetailsComponent } from './details/details.component';
import { AuthorComponent } from './details/author/author.component';
import { AllComponent } from './details/all/all.component';
import { ReviewDetailsComponent } from './details/review-details/review-details.component';



const routes: Routes = [
  {
    path:'products', 
    component: ProductsComponent,
    children:[
      {
        path:'details/:id',
        component: ProductDetailsComponent
      },
      {
        path:'category/:cat',
        component: CategoryComponent
      },
      {
        path:'brand/:brand',
        component:BrandComponent
      }
    ]
  },
  {
    path:'reviews',
    component:DetailsComponent,
    children:[
      {
        path:'all/:id',
        component:AllComponent
      },
      {
        path:'details/:id',
        component:ReviewDetailsComponent
      },
      {
        path:'author/:id',
        component:AuthorComponent
      }     
    ]
  },
  {
    path:'**',
    redirectTo:'/products'
  },
  {
    path:'',
    pathMatch:'full',
    redirectTo:'/products'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
