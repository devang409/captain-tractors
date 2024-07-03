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
  userData: any = JSON.parse(localStorage.getItem('profile') || '');
  getAllOrder: any = [];
  p: number = 1;
  constructor(
    public service: ApiServiceService,
    public comman: CommanService,
    public router: Router
  ) { }

  ngOnInit(): void {
    let obj: any = {}
    if (this.userData?.role_name == 'Dealer') {
      obj.dealer_id = this.userData.id;
    }
    this.getCatalogue(obj);
  }


  getCatalogue(obj: any) {
    this.service.getOrder(obj).subscribe((res: any) => {
      if (res.success) {
        this.getAllOrder = res.data;
      } else {
        this.comman.toster('warning', res.message)
      }
    })
  }

  selectedRow(item: any) {
    console.log(item);
    this.router.navigate(['/order-detail', item.id]);
  }
}
