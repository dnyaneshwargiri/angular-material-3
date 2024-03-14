import { Component, inject } from "@angular/core";
import { MatNavList, MatListItem } from "@angular/material/list";
import { SIDEBAR_LINKS } from "./sidebar-options";
import { RouterLink, RouterLinkActive } from "@angular/router";
import { QuicklinkDirective } from "ngx-quicklink";
import { MatSidenav } from "@angular/material/sidenav";

@Component({
  selector: "app-sidebar",
  template: `
    <mat-nav-list>
      @for (sidebarLink of sidebarLinks; track $index) {
        <a
          mat-list-item
          [routerLink]="sidebarLink.href"
          class="sidebar-link"
          routerLinkActive="tonal"
          (click)="closeSidenav()">
          {{ sidebarLink.name }}
        </a>
      }
    </mat-nav-list>
  `,
  standalone: true,
  styles: `
    .sidebar-link {
      margin-bottom: 0.35rem;
    }
  `,
  imports: [MatNavList, MatListItem, RouterLink, RouterLinkActive, QuicklinkDirective],
})
export class SidebarComponent {
  #sidenav = inject(MatSidenav);
  sidebarLinks = SIDEBAR_LINKS;

  closeSidenav() {
    if (this.#sidenav.mode === "over") {
      this.#sidenav.close();
    }
  }
}
