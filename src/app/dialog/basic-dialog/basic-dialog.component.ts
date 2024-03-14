import { Component } from "@angular/core";
import { MatDialogActions, MatDialogClose, MatDialogContent, MatDialogTitle } from "@angular/material/dialog";
import { MatIcon } from "@angular/material/icon";
import { MatDivider } from "@angular/material/divider";
import { MatList, MatListItem, MatListItemAvatar } from "@angular/material/list";
import { MatButton } from "@angular/material/button";
import { NgClass } from "@angular/common";

@Component({
  selector: "app-basic-dialog",
  standalone: true,
  imports: [
    MatDialogContent,
    MatDialogActions,
    MatIcon,
    MatDivider,
    MatList,
    MatListItem,
    MatListItemAvatar,
    MatButton,
    MatDialogClose,
    NgClass,
    MatDialogTitle,
  ],
  template: `
    <div class="icon-wrapper">
      <mat-icon>refresh</mat-icon>
    </div>
    <mat-dialog-content>
      <h2>Reset settings?</h2>
      <p>
        This will reset your app preferences back to their default settings. The following accounts will also be signed
        out:
      </p>
      <mat-divider />
      <mat-list>
        <mat-list-item>
          <img
            matListItemAvatar
            src="https://material.angular.io/assets/img/examples/shiba1.jpg"
            alt="Photo of a Shiba Inu" />
          testing&#64;gmail.com
        </mat-list-item>
        <mat-list-item>
          <img
            matListItemAvatar
            src="https://material.angular.io/assets/img/examples/shiba1.jpg"
            alt="Photo of a Shiba Inu" />
          testing&#64;gmail.com
        </mat-list-item>
        <mat-list-item>
          <img
            matListItemAvatar
            src="https://material.angular.io/assets/img/examples/shiba1.jpg"
            alt="Photo of a Shiba Inu" />
          testing&#64;gmail.com
        </mat-list-item>
      </mat-list>
      <mat-divider />
    </mat-dialog-content>
    <mat-dialog-actions align="end">
      <button mat-button mat-dialog-close>Cancel</button>
      <button mat-button cdkFocusInitial mat-dialog-close>Accept</button>
    </mat-dialog-actions>
  `,
  styles: `
    .icon-wrapper {
      display: flex;
      justify-content: center;
      align-items: center;
      padding-top: 20px;

      color: var(--mdc-dialog-supporting-text-color);
    }

    h2,
    p {
      text-align: center;
      max-width: 300px;
    }
  `,
})
export class BasicDialogComponent {}
