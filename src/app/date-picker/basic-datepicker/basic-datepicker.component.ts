import { Component, inject } from "@angular/core";
import { MatFormField, MatHint, MatLabel, MatSuffix } from "@angular/material/form-field";
import {
  MatDatepicker,
  MatDatepickerToggle,
  MatDatepickerInput,
  MatDatepickerToggleIcon,
} from "@angular/material/datepicker";
import { MatInput } from "@angular/material/input";
import { SectionComponent } from "../../section/section.component";
import { provideNativeDateAdapter } from "@angular/material/core";
import { InputsAppearanceService } from "../../input/appearance.service";

@Component({
  selector: "app-basic-datepicker",
  standalone: true,
  providers: [provideNativeDateAdapter()],
  template: `
    <app-section title="Basic Datepicker">
      <mat-form-field [appearance]="appearance()">
        <mat-label>Choose a date</mat-label>
        <input matInput [matDatepicker]="picker" />
        <mat-hint>MM/DD/YYYY</mat-hint>
        <mat-datepicker-toggle matIconSuffix [for]="picker" />
        <mat-datepicker #picker />
      </mat-form-field>
    </app-section>
  `,
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
  ],
})
export class BasicDatepickerComponent {
  appearance = inject(InputsAppearanceService).appearance;
}
