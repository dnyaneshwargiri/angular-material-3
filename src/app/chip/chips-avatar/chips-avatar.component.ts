import { Component } from "@angular/core";
import { SectionComponent } from "../../section/section.component";
import { MatChip, MatChipAvatar, MatChipSet } from "@angular/material/chips";

@Component({
  selector: "app-chips-avatar",
  standalone: true,
  template: `
    <app-section title="Chips Avatar">
      <mat-chip-set>
        <mat-chip>
          <img
            matChipAvatar
            src="https://material.angular.io/assets/img/examples/shiba1.jpg"
            alt="Photo of a Shiba Inu" />
          Dog one
        </mat-chip>
        <mat-chip color="primary">
          <img
            matChipAvatar
            src="https://material.angular.io/assets/img/examples/shiba1.jpg"
            alt="Photo of a Shiba Inu" />
          Dog two
        </mat-chip>
        <mat-chip color="accent">
          <img
            matChipAvatar
            src="https://material.angular.io/assets/img/examples/shiba1.jpg"
            alt="Photo of a Shiba Inu" />
          Dog three
        </mat-chip>
      </mat-chip-set>
    </app-section>
  `,
  imports: [SectionComponent, MatChip, MatChipSet, MatChipAvatar],
})
export class ChipsAvatarComponent {}
