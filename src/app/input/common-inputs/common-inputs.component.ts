import { Component, inject } from "@angular/core";
import { SectionComponent } from "../../section/section.component";
import { MatFormField, MatLabel } from "@angular/material/form-field";
import { MatSelect, MatOption, MatSelectTrigger } from "@angular/material/select";
import { MatInput } from "@angular/material/input";
import { InputsAppearanceService } from "../appearance.service";

@Component({
  selector: "app-common-inputs",
  standalone: true,
  imports: [SectionComponent, MatFormField, MatLabel, MatSelect, MatOption, MatSelectTrigger, MatInput],
  template: `
    <app-section title="Common Inputs">
      <div class="common-inputs-wrapper">
        <mat-form-field [appearance]="appearance()">
          <mat-label>Input</mat-label>
          <input matInput />
        </mat-form-field>
        <mat-form-field [appearance]="appearance()">
          <mat-label>Select</mat-label>
          <mat-select>
            <mat-option value="one">First option</mat-option>
            <mat-option value="two">Second option</mat-option>
          </mat-select>
        </mat-form-field>
        <mat-form-field [appearance]="appearance()" subscriptSizing="dynamic">
          <mat-label>Textarea</mat-label>
          <textarea matInput rows="4"></textarea>
        </mat-form-field>
      </div>
    </app-section>
  `,
  styles: `
    .common-inputs-wrapper {
      display: flex;
      flex-direction: column;
    }
  `,
})
export class CommonInputsComponent {
  appearance = inject(InputsAppearanceService).appearance;
}
