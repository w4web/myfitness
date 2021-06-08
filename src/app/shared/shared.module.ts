import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [PageNotFoundComponent],
  imports: [
    CommonModule,
    NgbModule,
    ReactiveFormsModule
  ],
  exports: [
    PageNotFoundComponent,
    NgbModule,
    ReactiveFormsModule
  ]
})
export class SharedModule { }
