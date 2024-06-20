import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';

@Injectable({
  providedIn: 'root'
})
export class NavserviceService {

  constructor() { }


  ROLEMENU: any[] = [
    {
      path: '/dashboard',
      title: 'Dashboard',
      type: 'link',
      icon: 'bi bi-grid',
      children: []
    },
    {
      path: '/user-master',
      title: 'User Master',
      type: 'link',
      icon: 'bi bi-people',
      children: []
    },
    {
      path: '/role-master',
      title: 'Role Master',
      type: 'link',
      icon: 'bi bi-person-gear',
      children: []
    },
    {
      path: '',
      title: 'Products Parts',
      type: 'link',
      icon: 'bi bi-menu-button-wide',
      children: [
        {
          path: '/products-type-master',
          title: 'Products Type Master',
          type: 'link',
          icon: 'bi bi-circle',
        },
        {
          path: '/modal-master',
          title: 'Modal Master',
          type: 'link',
          icon: 'bi bi-circle',
        },
        {
          path: '/assembly-master',
          title: 'Assembly Master',
          type: 'link',
          icon: 'bi bi-circle',
        }
      ]
    },
    {
      path: '/catalogue-and-ordering',
      title: 'Catalogue & Ordering',
      type: 'link',
      icon: 'bi bi-cart4',
      children: []
    },
    {
      path: '/dealer-assign-model',
      title: 'Dealer Assign Model',
      type: 'link',
      icon: 'bi bi-person-lines-fill',
      children: []
    },
  ]

  role_Menu = new BehaviorSubject<any[]>(this.ROLEMENU);

}
