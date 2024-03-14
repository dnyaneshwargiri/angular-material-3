import { Component } from "@angular/core";
import { MatCard } from "@angular/material/card";
import { SectionComponent } from "../../section/section.component";
import { MatButton } from "@angular/material/button";
import { CardsContentComponent } from "../cards-content/cards-content.component";

@Component({
  selector: "app-card-outlined",
  standalone: true,
  imports: [MatCard, SectionComponent, MatButton, CardsContentComponent],
  template: `
    <app-section title="Outlined Card">
      <mat-card appearance="outlined">
        <app-cards-content />
      </mat-card>
    </app-section>
  `,
})
export class CardOutlinedComponent {}
