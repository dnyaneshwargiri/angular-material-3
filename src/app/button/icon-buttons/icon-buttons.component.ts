import { Component } from "@angular/core";
import { SectionComponent } from "../../section/section.component";
import { MatIcon } from "@angular/material/icon";
import { MatIconButton } from "@angular/material/button";
import { MatTooltip } from "@angular/material/tooltip";

@Component({
  selector: "app-icon-buttons",
  standalone: true,
  imports: [SectionComponent, MatIcon, MatIconButton, MatTooltip],
  template: `
    <app-section title="Icon Buttons">
      <div class="flex-wrapper">
        <button mat-icon-button matTooltip="Surface">
          <mat-icon>light_mode</mat-icon>
        </button>
        <button mat-icon-button matTooltip="Primary">
          <mat-icon class="primary-icon">light_mode</mat-icon>
        </button>
        <button mat-icon-button class="secondary-icon" matTooltip="Secondary">
          <mat-icon>light_mode</mat-icon>
        </button>
        <button mat-icon-button class="warn-icon" matTooltip="Warn">
          <mat-icon>light_mode</mat-icon>
        </button>
        <button mat-icon-button class="tonal" matTooltip="Tonal">
          <mat-icon>dark_mode</mat-icon>
        </button>
      </div>
    </app-section>
  `,
})
export class IconButtonsComponent {}
