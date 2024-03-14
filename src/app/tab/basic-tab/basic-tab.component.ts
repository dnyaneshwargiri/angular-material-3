import { Component } from "@angular/core";
import { SectionComponent } from "../../section/section.component";
import { MatTabGroup, MatTab } from "@angular/material/tabs";

@Component({
  selector: "app-basic-tab",
  standalone: true,
  template: `
    <app-section title="Basic Tab">
      <mat-tab-group>
        <mat-tab label="First"> Content 1 </mat-tab>
        <mat-tab label="Second"> Content 2 </mat-tab>
        <mat-tab label="Third"> Content 3 </mat-tab>
      </mat-tab-group>
    </app-section>
  `,
  imports: [SectionComponent, MatTabGroup, MatTab],
})
export class BasicTabComponent {}
