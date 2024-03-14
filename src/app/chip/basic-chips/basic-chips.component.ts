import { Component } from "@angular/core";
import { MatChipListbox, MatChipOption } from "@angular/material/chips";
import { SectionComponent } from "../../section/section.component";

@Component({
  selector: "app-basic-chips",
  standalone: true,
  imports: [MatChipListbox, MatChipOption, SectionComponent],
  template: `
    <app-section title="Basic Chips">
      <mat-chip-listbox aria-label="Fish selection">
        <mat-chip-option>One fish</mat-chip-option>
        <mat-chip-option>Two fish</mat-chip-option>
        <mat-chip-option color="accent" selected>Accent fish</mat-chip-option>
        <mat-chip-option color="warn">Warn fish</mat-chip-option>
      </mat-chip-listbox>
    </app-section>
  `,
})
export class BasicChipsComponent {}
