import { Component, OnInit } from '@angular/core';
import { DataService } from '../shared/services/data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public TLData: any;

  constructor( public dataService: DataService ) { }

  ngOnInit(): void {

    this.dataService.getTLData().subscribe((data: any) => {
      this.TLData = data;
    });

  }

}
