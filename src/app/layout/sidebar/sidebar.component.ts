import { Component, OnInit } from '@angular/core';
import { NavserviceService } from 'src/app/services/navservice.service';
declare var $: any;

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  menuItems: any;
  permissionsList: any = JSON.parse(localStorage.getItem('permissions') || '[]');
  constructor(private navServices: NavserviceService,) {

  }

  ngOnInit(): void {
    this.checkNavActiveOnLoad();
  }


  // To set Active on Load
  checkNavActiveOnLoad() {
    this.navServices.role_Menu.subscribe((menuItems: any) => {
      this.menuItems = menuItems;
      let allPermision: any = []
      this.permissionsList.filter((item: any) => {
        allPermision.push(item.title);
        if (item.children) {
          item.children.filter((chaildItem: any) => {
            allPermision.push(chaildItem.title);
          })
        }
      })
      console.log("allPermision", allPermision);

      this.menuItems = this.filterRoleMenu([...allPermision], this.menuItems);
      console.log("filteredRoleMenu", this.menuItems);
    });
  }

  // Permission wise data filter 
  filterRoleMenu(permission: any, rolemenu: any) {
    return rolemenu.filter((menuItem: any) => {
      const permissionIndex = permission.indexOf(menuItem.title);
      if (permissionIndex !== -1) {
        permission.splice(permissionIndex, 1);
        if (menuItem.children) {
          menuItem.children = this.filterRoleMenu(permission, menuItem.children);
        }
        return true;
      }
      return false;
    });
  }

  formatTitle(title: string): string {
    return title.replace(/\s+/g, '-');
  }

  toggelRemove() {
    // $("body").addClass("toggle-sidebar");
  }
}
