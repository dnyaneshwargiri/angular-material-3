import { Component, inject } from "@angular/core";
import { SectionComponent } from "../../section/section.component";
import { MatFormField, MatLabel, MatError } from "@angular/material/form-field";
import { FormControl, ReactiveFormsModule, Validators } from "@angular/forms";
import { MatInput } from "@angular/material/input";
import { InputsAppearanceService } from "../appearance.service";

@Component({
  selector: "app-input-error",
  standalone: true,
  template: `
    <app-section title="Error">
      <mat-form-field [appearance]="appearance()">
        <mat-label>Enter your email</mat-label>
        <input matInput placeholder="pat@example.com" [formControl]="email" required />
        @if (email.invalid) {
          <mat-error>{{ getErrorMessage() }}</mat-error>
        }
      </mat-form-field>
    </app-section>
  `,
  imports: [SectionComponent, MatFormField, MatLabel, ReactiveFormsModule, MatError, MatInput],
})
export class InputErrorComponent {
  appearance = inject(InputsAppearanceService).appearance;
  email = new FormControl("", [Validators.required, Validators.email]);

  getErrorMessage() {
    if (this.email.hasError("required")) {
      return "You must enter a value";
    }

    return this.email.hasError("email") ? "Not a valid email" : "";
  }
}
