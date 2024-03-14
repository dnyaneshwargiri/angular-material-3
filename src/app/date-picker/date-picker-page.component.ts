import { Component } from "@angular/core";
import { BasicDatepickerComponent } from "./basic-datepicker/basic-datepicker.component";
import { AppearanceToggleComponent } from "../field-appearance-toggle/appearance-toggle.component";
import { RangeDatepickerComponent } from "./range-datepicker/range-datepicker.component";

@Component({
  selector: "app-date-picker-page",
  standalone: true,
  template: `
    <app-appearance-toggle />
    <div class="sections-wrapper">
      <app-basic-datepicker />
      <app-range-datepicker />
    </div>
  `,
  imports: [BasicDatepickerComponent, AppearanceToggleComponent, RangeDatepickerComponent],
})
export default class DatePickerPageComponent {}
