import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from "@angular/router";
import { DataService } from 'src/app/shared/services/data.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  public headerData: any;
  public subMenu: any;
  public show_mobile_menu: Boolean = false;

  constructor( public dataService: DataService, public router: Router ) {}

  ngOnInit(): void {
    this.dataService.getHeaderData().subscribe((data: any) => {
      this.headerData = data;
      this.getSubMenu();
      this.router.events.subscribe((ev) => {
        if (ev instanceof NavigationEnd) {
          this.getSubMenu();
        }
      });
    });
  }

  getSubMenu(): void {
    const item = this.headerData.menu.filter(item => item.link == this.router.url);
    this.subMenu = item[0].childs;
  }

}
