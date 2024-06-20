import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {

  constructor(private http: HttpClient) { }

  login(data: any) {
    return this.http.post(environment.apiUrl + 'login', data);
  }

  forgetPasswordMailSend(data: any) {
    return this.http.post(environment.apiUrl + 'forget-password-mail-send', data);
  }

  resetPassword(data: any) {
    return this.http.post(environment.apiUrl + 'reset-password', data);
  }

  changePassword(data: any) {
    return this.http.post(environment.apiUrl + 'change-password', data);
  }

  //=====// User Master Start//=====//
  addUser(data: any) {
    return this.http.post(environment.apiUrl + 'user/store', data);
  }

  editUser(data: any, id: any) {
    return this.http.post(environment.apiUrl + `user/${id}/update`, data);
  }

  deleteUser(data: any) {
    return this.http.post(environment.apiUrl + `user/${data.id}/delete`, {});
  }

  userList(data: any) {
    return this.http.post(environment.apiUrl + 'user/list', data);
  }
  //=====// User Master End //=====//

  //=====// Modal Master Start//=====//
  addModal(data: any) {
    return this.http.post(environment.apiUrl + 'model_master/store', data);
  }

  editModal(data: any, id: any) {
    return this.http.post(environment.apiUrl + `model_master/${id}/update`, data);
  }

  deleteModal(data: any) {
    return this.http.post(environment.apiUrl + `model_master/${data.id}/delete`, {});
  }

  ModalList(data: any) {
    return this.http.post(environment.apiUrl + 'model_master/list', data);
  }
  //=====// Modal Master End//=====//

  //=====// Assembly Master Star //=====//
  addAssembly(data: any) {
    return this.http.post(environment.apiUrl + 'assembly_master/store', data);
  }

  editAssembly(data: any, id: any) {
    return this.http.post(environment.apiUrl + `assembly_master/${id}/update`, data);
  }

  deleteAssembly(data: any) {
    return this.http.post(environment.apiUrl + `assembly_master/${data.id}/delete`, {});
  }

  AssemblyList(data: any) {
    return this.http.post(environment.apiUrl + 'assembly_master/list', data);
  }
  //=====// Assembly Master End //=====//

  //=====// Dealer Master Start //=====//
  DealerList(data: any) {
    return this.http.post(environment.apiUrl + 'dealer/list', data);
  }

  DealerDetail(data: any) {
    return this.http.post(environment.apiUrl + 'dealer/model/list', data);
  }

  assignDealer(data: any) {
    return this.http.post(environment.apiUrl + 'dealer/model/add', data);
  }
  //=====// Dealer Master End //=====//

  //=====// Product Type Master Star //=====//
  addProductType(data: any) {
    return this.http.post(environment.apiUrl + 'product_type_master/store', data);
  }

  editProductType(data: any, id: any) {
    return this.http.post(environment.apiUrl + `product_type_master/${id}/update`, data);
  }

  deleteProductType(data: any) {
    return this.http.post(environment.apiUrl + `product_type_master/${data.id}/delete`, {});
  }

  ProductTypeList(data: any) {
    return this.http.post(environment.apiUrl + 'product_type_master/list', data);
  }
  //=====// Product Type Master End //=====//


  //=====// Role Master Start //=====//
  addRole(data: any) {
    return this.http.post(environment.apiUrl + 'role/store', data);
  }

  editRole(data: any, id: any) {
    return this.http.post(environment.apiUrl + `role/${id}/update`, data);
  }

  roleList(data: any) {
    return this.http.post(environment.apiUrl + 'role/list', data);
  }
  //=====// Role Master End //=====//
}
