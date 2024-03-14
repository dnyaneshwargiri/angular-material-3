import { Component, inject, signal } from "@angular/core";
import { MatIcon } from "@angular/material/icon";
import { MatInput } from "@angular/material/input";
import { MatFormField, MatLabel, MatPrefix, MatSuffix } from "@angular/material/form-field";
import { SectionComponent } from "../../section/section.component";
import { MatIconButton } from "@angular/material/button";
import { InputsAppearanceService } from "../appearance.service";

@Component({
  selector: "app-prefix-suffix",
  standalone: true,
  imports: [MatFormField, MatInput, MatPrefix, MatSuffix, MatIcon, MatIconButton, MatLabel, SectionComponent],
  template: `<app-section title="Prefix & Suffix">
    <mat-form-field [appearance]="appearance()">
      <mat-label>Enter your password</mat-label>
      <input matInput [type]="hide() ? 'password' : 'text'" />
      <button
        mat-icon-button
        matSuffix
        (click)="toggleHide()"
        [attr.aria-label]="'Hide password'"
        [attr.aria-pressed]="hide">
        <mat-icon>{{ hide() ? "visibility_off" : "visibility" }}</mat-icon>
      </button>
    </mat-form-field>

    <mat-form-field floatLabel="always" [appearance]="appearance()" subscriptSizing="dynamic">
      <mat-label>Amount</mat-label>
      <input matInput type="number" class="example-right-align" placeholder="0" />
      <span matTextPrefix>$&nbsp;</span>
      <span matTextSuffix>.00</span>
    </mat-form-field>
  </app-section> `,
  styles: `
    .example-right-align {
      text-align: right;
    }

    input.example-right-align::-webkit-outer-spin-button,
    input.example-right-align::-webkit-inner-spin-button {
      display: none;
    }

    input.example-right-align {
      -moz-appearance: textfield;
    }
  `,
})
export class PrefixSuffixComponent {
  appearance = inject(InputsAppearanceService).appearance;
  hide = signal<boolean>(false);

  toggleHide() {
    this.hide.update((val) => !val);
  }
}
