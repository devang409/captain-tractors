import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiServiceService } from 'src/app/services/api-service.service';
import { CommanService } from 'src/app/services/comman.service';

@Component({
  selector: 'app-add-catalogue',
  templateUrl: './add-catalogue.component.html',
  styleUrls: ['./add-catalogue.component.scss']
})
export class AddCatalogueComponent implements OnInit {
  formObj: any = {};
  assemblyList: any;
  modaldataList: any;
  productTypeList: any;
  constructor(
    public service: ApiServiceService,
    public comman: CommanService,
    public router: Router
  ) {

  }
  ngOnInit(): void {
    this.getproductsTypeMaster();
    this.getassemblyList();
    this.modalList();
  }


  //========// Get All assembly //========//
  getassemblyList() {
    this.service.AssemblyList({}).subscribe((res: any) => {
      if (res.success) {
        this.assemblyList = res.data
      }
    })
  }

  //========// Get All Modal //========//
  modalList() {
    this.service.ModalList({}).subscribe((res: any) => {
      if (res.success) {
        this.modaldataList = res.data
      }
    })
  }

  //========// Get All Products Type //========//
  getproductsTypeMaster() {
    this.service.ProductTypeList({}).subscribe((res: any) => {
      if (res.success) {
        this.productTypeList = res.data
      }
    })
  }

}
