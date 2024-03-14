import { Component } from "@angular/core";
import { SectionComponent } from "../../section/section.component";
import { MatButtonToggle, MatButtonToggleGroup } from "@angular/material/button-toggle";

@Component({
  selector: "app-segmented-buttons",
  standalone: true,
  imports: [SectionComponent, MatButtonToggle, MatButtonToggleGroup],
  template: ` <app-section title="Segmented Buttons">
    <div class="segmented-buttons-wrapper">
      <mat-button-toggle-group value="day">
        <mat-button-toggle value="day"> Day </mat-button-toggle>
        <mat-button-toggle value="week"> Week </mat-button-toggle>
        <mat-button-toggle value="month"> Month </mat-button-toggle>
      </mat-button-toggle-group>
      <mat-button-toggle-group [value]="['day', 'week']" multiple>
        <mat-button-toggle value="day"> Day </mat-button-toggle>
        <mat-button-toggle value="week"> Week </mat-button-toggle>
        <mat-button-toggle value="month"> Month </mat-button-toggle>
      </mat-button-toggle-group>
    </div>
  </app-section>`,
  styles: `
    .segmented-buttons-wrapper {
      display: flex;
      flex-direction: column;
      gap: 0.75rem;
      width: fit-content;
    }
  `,
})
export class SegmentedButtonsComponent {}
