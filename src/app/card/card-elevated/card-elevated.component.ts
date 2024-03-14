import { Component } from "@angular/core";
import { MatCard } from "@angular/material/card";
import { SectionComponent } from "../../section/section.component";
import { MatButton } from "@angular/material/button";
import { CardsContentComponent } from "../cards-content/cards-content.component";

@Component({
  selector: "app-card-elevated",
  standalone: true,
  imports: [MatCard, SectionComponent, MatButton, CardsContentComponent],
  template: `
    <app-section title="Elevated Card">
      <mat-card>
        <app-cards-content />
      </mat-card>
    </app-section>
  `,
})
export class CardElevatedComponent {}
