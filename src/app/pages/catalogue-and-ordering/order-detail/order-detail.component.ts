import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiServiceService } from 'src/app/services/api-service.service';
import { CommanService } from 'src/app/services/comman.service';

@Component({
  selector: 'app-order-detail',
  templateUrl: './order-detail.component.html',
  styleUrls: ['./order-detail.component.scss']
})
export class OrderDetailComponent implements OnInit {
  selectAll: any;
  partList: any = [];
  order_id: any;
  orderDetail: any = {};
  userData: any = JSON.parse(localStorage.getItem('profile') || '');
  constructor(
    private route: ActivatedRoute,
    public service: ApiServiceService,
    public comman: CommanService,
    public router: Router
  ) { }

  ngOnInit(): void {
    this.order_id = this.route.snapshot.paramMap.get('id');
    console.log("this.order_id", this.order_id);
    this.getDetail();
  }

  // selecte multi check box function
  selected() {
    console.log("selectAll", this.selectAll);
    if (this.selectAll) {
      this.partList.forEach((item: any) => {
        item.is_approve = true;
      });
    } else {
      this.partList.forEach((item: any) => {
        item.is_approve = false;
      });
    }
  }

  getDetail() {
    this.service.getOrderDetail(this.order_id).subscribe((res: any) => {
      if (res.success) {
        this.orderDetail = res.data;
        this.partList = res.data.order_details;
        this.partList.forEach((item: any) => {
          item.approve_qty = 0;
          item.part_qty = parseFloat(item.part_qty);
        });
      } else {
        this.comman.toster('warning', res.message)
      }
    })
  }

  approveOrder() {
    this.service.approve(this.order_id).subscribe((res: any) => {
      if (res.success) {
        this.getDetail();
        this.comman.toster('success', res.message);
      } else {
        this.comman.toster('warning', res.message)
      }
    })
  }

  rejectOrder() {
    this.service.reject(this.order_id).subscribe((res: any) => {
      if (res.success) {
        this.getDetail();
        this.comman.toster('success', res.message);
      } else {
        this.comman.toster('warning', res.message)
      }
    });
  }

  increment(ind: any, mainQty: any): void {
    if (this.partList[ind].approve_qty < mainQty) {
      this.partList[ind].approve_qty += 1;
    }
  }

  decrement(ind: any, mainQty: any): void {
    if (this.partList[ind].approve_qty > 0 && this.partList[ind].approve_qty <= mainQty) {
      this.partList[ind].approve_qty -= 1;
    }
  }

}
