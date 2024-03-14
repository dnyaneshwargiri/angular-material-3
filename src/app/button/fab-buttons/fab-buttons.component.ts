import { Component } from "@angular/core";
import { SectionComponent } from "../../section/section.component";
import { MatFabButton, MatMiniFabButton } from "@angular/material/button";
import { MatIcon } from "@angular/material/icon";

@Component({
  selector: "app-fab-buttons",
  standalone: true,
  imports: [SectionComponent, MatIcon, MatFabButton, MatMiniFabButton],
  template: `
    <app-section title="FAB Buttons">
      <div class="flex-wrapper">
        <button mat-fab>
          <mat-icon>light_mode</mat-icon>
        </button>
        <button mat-fab extended>
          <mat-icon>navigation</mat-icon>
          Navigate
        </button>
        <button mat-mini-fab>
          <mat-icon>light_mode</mat-icon>
        </button>
      </div>
    </app-section>
  `,
  styles: `
    .flex-wrapper {
      align-items: center;
    }
  `,
})
export class FabButtonsComponent {}
