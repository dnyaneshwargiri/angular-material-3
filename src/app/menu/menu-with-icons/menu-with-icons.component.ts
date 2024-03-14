import { Component } from "@angular/core";
import { SectionComponent } from "../../section/section.component";
import { MatIconButton } from "@angular/material/button";
import { MatMenu, MatMenuItem, MatMenuTrigger } from "@angular/material/menu";
import { MatIcon } from "@angular/material/icon";

@Component({
  selector: "app-menu-with-icons",
  standalone: true,
  template: `
    <app-section title="Menu With Icons">
      <button mat-icon-button [matMenuTriggerFor]="menu" aria-label="Example icon-button with a menu">
        <mat-icon>more_vert</mat-icon>
      </button>
      <mat-menu #menu="matMenu">
        <button mat-menu-item>
          <mat-icon>dialpad</mat-icon>
          <span>Redial</span>
        </button>
        <button mat-menu-item disabled>
          <mat-icon>voicemail</mat-icon>
          <span>Check voice mail</span>
        </button>
        <button mat-menu-item>
          <mat-icon>notifications_off</mat-icon>
          <span>Disable alerts</span>
        </button>
      </mat-menu>
    </app-section>
  `,
  imports: [MatIconButton, MatMenu, MatMenuItem, MatMenuTrigger, MatIcon, SectionComponent],
})
export class MenuWithIconsComponent {}
