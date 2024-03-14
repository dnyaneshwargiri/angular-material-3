import { Component } from "@angular/core";
import { MatButton } from "@angular/material/button";
import { MatMenu, MatMenuItem, MatMenuTrigger } from "@angular/material/menu";
import { SectionComponent } from "../../section/section.component";

@Component({
  selector: "app-basic-menu",
  standalone: true,
  template: `
    <app-section title="Basic Menu">
      <button mat-button [matMenuTriggerFor]="menu">Menu</button>
      <mat-menu #menu="matMenu">
        <button mat-menu-item>Item 1</button>
        <button mat-menu-item>Item 2</button>
      </mat-menu>
    </app-section>
  `,
  imports: [MatButton, MatMenu, MatMenuItem, MatMenuTrigger, SectionComponent],
})
export class BasicMenuComponent {}
