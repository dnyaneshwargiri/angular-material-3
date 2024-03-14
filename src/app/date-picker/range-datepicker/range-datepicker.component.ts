import { Component, inject } from "@angular/core";
import {
  MatDatepicker,
  MatDatepickerToggle,
  MatDatepickerInput,
  MatDatepickerToggleIcon,
  MatDateRangeInput,
  MatDateRangePicker,
  MatStartDate,
  MatEndDate,
} from "@angular/material/datepicker";
import { MatFormField, MatLabel, MatHint, MatSuffix } from "@angular/material/form-field";
import { MatInput } from "@angular/material/input";
import { SectionComponent } from "../../section/section.component";
import { provideNativeDateAdapter } from "@angular/material/core";
import { InputsAppearanceService } from "../../input/appearance.service";

@Component({
  selector: "app-range-datepicker",
  standalone: true,
  imports: [
    MatFormField,
    MatLabel,
    MatHint,
    MatDatepicker,
    MatDatepickerToggle,
    MatInput,
    MatDatepickerInput,
    MatDatepickerToggleIcon,
    MatSuffix,
    SectionComponent,
    MatDateRangeInput,
    MatDateRangePicker,
    MatStartDate,
    MatEndDate,
  ],
  providers: [provideNativeDateAdapter()],
  template: `
    <app-section title="Range Datepicker">
      <mat-form-field [appearance]="appearance()">
        <mat-label>Enter a date range</mat-label>
        <mat-date-range-input [rangePicker]="picker">
          <input matStartDate placeholder="Start date" />
          <input matEndDate placeholder="End date" />
        </mat-date-range-input>
        <mat-hint>MM/DD/YYYY – MM/DD/YYYY</mat-hint>
        <mat-datepicker-toggle matIconSuffix [for]="picker" />
        <mat-date-range-picker #picker />
      </mat-form-field>
    </app-section>
  `,
})
export class RangeDatepickerComponent {
  appearance = inject(InputsAppearanceService).appearance;
}
