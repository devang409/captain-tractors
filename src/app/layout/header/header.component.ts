import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
declare var $: any;

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  userData:any;

  constructor(private router: Router) {

  }

  ngOnInit(): void {
    this.userData = JSON.parse(localStorage.getItem('profile') || '')
  }

  toggelSideBar() {
    $("body").toggleClass("toggle-sidebar");
  }

  signOut() {
    localStorage.clear();
    this.router.navigate(['/login'])
  }

}

