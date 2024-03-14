import { Component } from "@angular/core";
import { MatCard } from "@angular/material/card";
import { SectionComponent } from "../../section/section.component";
import { MatButton } from "@angular/material/button";
import { CardsContentComponent } from "../cards-content/cards-content.component";

@Component({
  selector: "app-card-filled",
  standalone: true,
  imports: [MatCard, SectionComponent, MatButton, CardsContentComponent],
  template: `
    <app-section title="Filled Card">
      <mat-card appearance="outlined" class="tonal">
        <app-cards-content />
      </mat-card>
    </app-section>
  `,
})
export class CardFilledComponent {}
