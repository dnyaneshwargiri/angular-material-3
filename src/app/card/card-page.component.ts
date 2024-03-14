import { Component } from "@angular/core";
import { CardElevatedComponent } from "./card-elevated/card-elevated.component";
import { CardOutlinedComponent } from "./card-outlined/card-outlined.component";
import { CardFilledComponent } from "./card-filled/card-filled.component";

@Component({
  selector: "app-card-page",
  template: `
    <div class="cards-wrapper">
      <app-card-outlined />
      <app-card-filled />
      <app-card-elevated />
    </div>
  `,
  styles: `
    .cards-wrapper {
      display: grid;
      grid-template-columns: 1fr;
      gap: 1.85rem;
      max-width: 1280px;

      @media (min-width: 640px) {
        grid-template-columns: repeat(2, 1fr);
      }

      @media (min-width: 1024px) {
        grid-template-columns: repeat(3, 1fr);
      }
    }
  `,
  standalone: true,
  imports: [CardElevatedComponent, CardOutlinedComponent, CardFilledComponent],
})
export default class CardPageComponent {}
