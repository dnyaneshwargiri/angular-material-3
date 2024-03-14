import { InputsAppearanceService } from "../input/appearance.service";
import { Component, computed, inject } from "@angular/core";
import { MatSlideToggle, MatSlideToggleChange } from "@angular/material/slide-toggle";

@Component({
  selector: "app-appearance-toggle",
  template: `
    <mat-slide-toggle [checked]="appearance() === 'outline'" (change)="changeAppearance($event)">
      {{ slideToggleLabel() }}
    </mat-slide-toggle>
  `,
  standalone: true,
  styles: `
    mat-slide-toggle {
      margin-bottom: 1.2rem;
    }
  `,
  imports: [MatSlideToggle],
})
export class AppearanceToggleComponent {
  #appearanceService = inject(InputsAppearanceService);

  appearance = this.#appearanceService.appearance;
  slideToggleLabel = computed(() => (this.appearance() === "outline" ? "Outlined Inputs" : "Filled Inputs"));

  changeAppearance(toggleChange: MatSlideToggleChange) {
    if (toggleChange.checked) {
      this.#appearanceService.changeAppearance("outline");
    } else {
      this.#appearanceService.changeAppearance("fill");
    }
  }
}
