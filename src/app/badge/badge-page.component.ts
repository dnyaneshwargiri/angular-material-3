import { Component, signal } from "@angular/core";
import { MatIcon } from "@angular/material/icon";
import { MatBadge } from "@angular/material/badge";
import { MatButton } from "@angular/material/button";

@Component({
  selector: "app-badge-page",
  standalone: true,
  imports: [MatIcon, MatBadge, MatButton],
  template: `
    <div matBadge="4" matBadgeOverlap="false" class="demo-section">Text with a badge</div>

    <div matBadge="1" matBadgeSize="large" class="demo-section">Text with large badge</div>

    <div class="demo-section">
      Button with a badge on the left
      <button mat-raised-button color="primary" matBadge="8" matBadgePosition="before" matBadgeColor="accent">
        Action
      </button>
    </div>

    <div class="demo-section">
      Button toggles badge visibility
      <button mat-raised-button matBadge="7" [matBadgeHidden]="hidden()" (click)="toggleBadgeVisibility()">Hide</button>
    </div>

    <div class="demo-section">
      Icon with a badge
      <mat-icon matBadge="15" matBadgeColor="warn">home</mat-icon>
      <!-- Include text description of the icon's meaning for screen-readers -->
      <span class="cdk-visually-hidden"> Example with a home icon with overlaid badge showing the number 15 </span>
    </div>
  `,
  styles: `
    :host {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
    }

    .demo-section + .demo-section {
      margin-top: 16px;
    }
  `,
})
export default class BadgePageComponent {
  hidden = signal<boolean>(false);

  toggleBadgeVisibility() {
    this.hidden.update((val) => !val);
  }
}
