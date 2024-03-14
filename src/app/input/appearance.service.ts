import { Injectable, signal } from "@angular/core";
import { MatFormFieldAppearance } from "@angular/material/form-field";

@Injectable({ providedIn: "root" })
export class InputsAppearanceService {
  #appearance = signal<MatFormFieldAppearance>("outline");
  appearance = this.#appearance.asReadonly();

  changeAppearance(newAppearance: MatFormFieldAppearance) {
    this.#appearance.set(newAppearance);
  }
}
