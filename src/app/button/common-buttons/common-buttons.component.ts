import { Component } from "@angular/core";
import { SectionComponent } from "../../section/section.component";
import { MatButton } from "@angular/material/button";
import { MatIcon } from "@angular/material/icon";

@Component({
  selector: "app-common-buttons",
  standalone: true,
  imports: [SectionComponent, MatButton, MatIcon],
  template: `
    <app-section title="Common Buttons">
      <div class="wrapper">
        <div class="flex-wrapper">
          <button mat-button>Primary</button>
          <button mat-button class="secondary-button">Secondary</button>
          <button mat-button class="warn-button">Warn</button>
        </div>
        <div class="flex-wrapper">
          <button mat-raised-button>Primary Raised</button>
          <button mat-raised-button class="secondary-button">Secondary Raised</button>
          <button mat-raised-button class="warn-button">Warn Raised</button>
        </div>
        <div class="flex-wrapper">
          <button mat-flat-button>Primary Flat</button>
          <button mat-flat-button class="secondary-button">Secondary Flat</button>
          <button mat-flat-button class="warn-button">Warn Flat</button>
        </div>
        <div class="flex-wrapper">
          <button mat-stroked-button>Primary Stroked</button>
          <button mat-stroked-button class="secondary-button">Secondary Stroked</button>
          <button mat-stroked-button class="warn-button">Warn Stroked</button>
        </div>
        <div class="flex-wrapper">
          <button mat-button class="tonal">Tonal</button>
          <button mat-stroked-button class="tonal">Tonal Stroked</button>
          <button mat-flat-button class="tonal">Tonal Flat</button>
          <button mat-raised-button class="tonal">Tonal Raised</button>
        </div>
        <div class="flex-wrapper">
          <button mat-button>
            <mat-icon>navigation</mat-icon>
            Navigate
          </button>
          <button mat-raised-button>
            <mat-icon>navigation</mat-icon>
            Navigate
          </button>
          <button mat-flat-button>
            <mat-icon>navigation</mat-icon>
            Navigate
          </button>
          <button mat-raised-button class="tonal">
            <mat-icon>navigation</mat-icon>
            Navigate
          </button>
          <button mat-stroked-button>
            <mat-icon>navigation</mat-icon>
            Navigate
          </button>
        </div>
      </div>
    </app-section>
  `,
  styles: `
    .wrapper {
      display: flex;
      flex-direction: column;
      gap: 1.5rem;
    }
  `,
})
export class CommonButtonsComponent {}
