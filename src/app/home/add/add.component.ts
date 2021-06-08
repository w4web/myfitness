import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormlyFormOptions, FormlyFieldConfig } from '@ngx-formly/core';
import { DataService } from '../../shared/services/data.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent implements OnInit {

  editForm = new FormGroup({});
  model: any = {};
  options: FormlyFormOptions = {};
  fields: FormlyFieldConfig[] = [];

  constructor( public dataService: DataService ) {

    this.dataService.getProductFields().subscribe((fields: any) => {
      this.editForm = new FormGroup({});
      this.fields = fields;
    });

  }

  ngOnInit(): void {
  }

  previousState(): void {
    window.history.back();
  }

  save(): void {
    console.log(this.model);
  }

}
