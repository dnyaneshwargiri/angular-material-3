import { Component, input, signal } from "@angular/core";
import {
  MatAccordion,
  MatExpansionPanel,
  MatExpansionPanelHeader,
  MatExpansionPanelDescription,
  MatExpansionPanelTitle,
  MatExpansionPanelActionRow,
  MatAccordionDisplayMode,
} from "@angular/material/expansion";
import { SectionComponent } from "../../section/section.component";
import { MatButton } from "@angular/material/button";

@Component({
  selector: "app-basic-expansion-panel",
  standalone: true,
  template: `
    <app-section [title]="title()">
      <mat-accordion [displayMode]="mode()">
        <mat-expansion-panel hideToggle>
          <mat-expansion-panel-header>
            <mat-panel-title> Title </mat-panel-title>
            <mat-panel-description> Description </mat-panel-description>
          </mat-expansion-panel-header>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Mollitia, numquam? Voluptatem beatae magnam
            excepturi adipisci ducimus quidem quae tempore itaque error, alias laboriosam necessitatibus aperiam id cum
            repellendus blanditiis impedit?
          </p>
        </mat-expansion-panel>

        <mat-expansion-panel (opened)="panelOpenState.set(true)" (closed)="panelOpenState.set(false)" #panel>
          <mat-expansion-panel-header>
            <mat-panel-title> Title </mat-panel-title>
            <mat-panel-description> {{ panelOpenState() ? "Open" : "Closed" }} </mat-panel-description>
          </mat-expansion-panel-header>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Mollitia, numquam? Voluptatem beatae magnam
            excepturi adipisci ducimus quidem quae tempore itaque error, alias laboriosam necessitatibus aperiam id cum
            repellendus blanditiis impedit?
          </p>
          <mat-action-row>
            <button mat-button (click)="panel.close()">Cancel</button>
            <button mat-button (click)="panel.close()">Save</button>
          </mat-action-row>
        </mat-expansion-panel>
      </mat-accordion>
    </app-section>
  `,
  imports: [
    MatAccordion,
    MatExpansionPanel,
    MatExpansionPanelHeader,
    MatExpansionPanelDescription,
    MatExpansionPanelTitle,
    MatExpansionPanelActionRow,
    MatButton,
    SectionComponent,
  ],
})
export class BasicExpansionPanelComponent {
  panelOpenState = signal<boolean>(false);
  mode = input.required<MatAccordionDisplayMode>();
  title = input.required<string>();
}
