import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiServiceService } from 'src/app/services/api-service.service';
import { CommanService } from 'src/app/services/comman.service';

@Component({
  selector: 'app-my-profile',
  templateUrl: './my-profile.component.html',
  styleUrls: ['./my-profile.component.scss']
})
export class MyProfileComponent implements OnInit {
  formObj: any = {}
  passwordObj: any = {}
  userData: any;

  constructor(
    public service: ApiServiceService,
    public comman: CommanService,
    public router: Router
  ) {

  }

  ngOnInit(): void {
    this.userData = JSON.parse(localStorage.getItem('profile') || '');
    if (this.userData) {
      this.formObj.first_name = this.userData.first_name;
      this.formObj.last_name = this.userData.last_name;
      this.formObj.phone = this.userData.phone;
      this.formObj.email = this.userData.email;
      this.formObj.password = this.userData.password;
      this.formObj.address = this.userData.address;
      this.formObj.city = this.userData.city;
      this.formObj.state = this.userData.state;
      this.formObj.role_id = this.userData.role_id;
      // this.formObj.is_active = this.userData.is_active;
    }
  }

  onSubmitPassword(form: any) {
    if (this.passwordObj.new_password_confirmation && this.passwordObj.new_password != this.passwordObj.new_password_confirmation) {
      this.comman.toster('error', 'New Password and Confirm Password dose not match.')
      return
    }

    if (form.form.valid) {
      this.service.changePassword(form.form.value).subscribe((res: any) => {
        if (res.success) {
          this.comman.toster('success', res.message);
          this.passwordObj = {};
        } else {
          this.comman.toster('warning', res.message)
        }
      }, (err: any) => {
        this.comman.toster('error', 'ops! something went wrong please try again later')
      })
    }
  }
}
