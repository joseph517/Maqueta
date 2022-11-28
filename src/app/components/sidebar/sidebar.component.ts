import { Component } from '@angular/core';
import { faFileInvoiceDollar, faFile, faHandHoldingDollar, faBatteryFull, faUsers, faUser, faGear, faCircleInfo, faRightFromBracket } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {
  faFileInvoiceDollar = faFileInvoiceDollar
  faFile = faFile
  faHandHoldingDollar = faHandHoldingDollar
  faBatteryFull = faBatteryFull
  faUsers = faUsers
  faUser = faUser
  faGear = faGear
  faCircleInfo = faCircleInfo
  faRightFromBracket = faRightFromBracket
}
