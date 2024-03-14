import { Component } from "@angular/core";
import { AppearanceToggleComponent } from "../field-appearance-toggle/appearance-toggle.component";
import { AutocompleteComponent } from "./autocomplete/autocomplete.component";
import { CommonInputsComponent } from "./common-inputs/common-inputs.component";
import { PrefixSuffixComponent } from "./prefix-suffix/prefix-suffix.component";
import { InputErrorComponent } from "./input-error/input-error.component";

@Component({
  selector: "app-input-page",
  template: `<app-appearance-toggle />
    <div class="sections-wrapper">
      <app-common-inputs />
      <app-autocomplete />
      <app-prefix-suffix />
      <app-input-error />
    </div> `,
  standalone: true,
  styles: `
    .sections-wrapper {
      width: 100%;
      max-width: 420px;
    }
  `,
  imports: [
    AppearanceToggleComponent,
    AutocompleteComponent,
    CommonInputsComponent,
    PrefixSuffixComponent,
    InputErrorComponent,
  ],
})
export default class InputPageComponent {}
