import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiServiceService } from 'src/app/services/api-service.service';
import { CommanService } from 'src/app/services/comman.service';

@Component({
  selector: 'app-catalogue-and-ordering',
  templateUrl: './catalogue-and-ordering.component.html',
  styleUrls: ['./catalogue-and-ordering.component.scss']
})
export class CatalogueAndOrderingComponent implements OnInit {
  formObj: any = {};
  serchObj: any = {};
  orderList: any;
  constructor(
    public service: ApiServiceService,
    public comman: CommanService,
    public router: Router
  ) { } 

  ngOnInit(): void {

  }


  getCatalogue() {
    this.service.e_CatalogueList(this.formObj).subscribe((res: any) => {
      if (res.success) {
        this.comman.toster('success', res.message);
      } else {
        this.comman.toster('warning', res.message)
      }
    })
  }
}
