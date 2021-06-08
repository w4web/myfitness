import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddComponent } from './home/add/add.component';
import { HomeComponent } from './home/home.component';
import { InnerPage1Component } from './inner-page1/inner-page1.component';
import { LayoutComponent } from './layout/layout.component';
import { Page2Component } from './page2/page2.component';
import { Page3Component } from './page3/page3.component';
import { Page4Component } from './page4/page4.component';
import { PageNotFoundComponent } from './shared/components/page-not-found/page-not-found.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: 'home', component: HomeComponent },
      { path: 'add', component: AddComponent },
      { path: 'page2', component: Page2Component },
      { path: 'page3', component: Page3Component },
      { path: 'page4', component: Page4Component },
      { path: 'innerPage1', component: InnerPage1Component }
    ]
  },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }



