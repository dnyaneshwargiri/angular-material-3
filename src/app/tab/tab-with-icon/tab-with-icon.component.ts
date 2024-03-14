import { Component } from "@angular/core";
import { MatIcon } from "@angular/material/icon";
import { MatTabGroup, MatTab, MatTabLabel } from "@angular/material/tabs";
import { SectionComponent } from "../../section/section.component";

@Component({
  selector: "app-tab-with-icon",
  standalone: true,
  template: `
    <app-section title="Tab With Icon">
      <mat-tab-group>
        <mat-tab>
          <ng-template mat-tab-label>
            <mat-icon class="example-tab-icon">thumb_up</mat-icon>
            First
          </ng-template>
          Content 1
        </mat-tab>

        <mat-tab>
          <ng-template mat-tab-label>
            <mat-icon class="example-tab-icon">thumb_up</mat-icon>
            Second
          </ng-template>
          Content 2
        </mat-tab>

        <mat-tab>
          <ng-template mat-tab-label>
            <mat-icon class="example-tab-icon">thumb_up</mat-icon>
            Third
          </ng-template>

          Content 3
        </mat-tab>
      </mat-tab-group>
    </app-section>
  `,
  styles: `
    .example-tab-icon {
      margin-right: 8px;
    }
  `,
  imports: [MatTabGroup, MatTab, MatIcon, MatTabLabel, SectionComponent],
})
export class TabWithIconComponent {}
