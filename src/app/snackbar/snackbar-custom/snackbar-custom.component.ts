import { Component, inject } from "@angular/core";
import { MatButton } from "@angular/material/button";
import { MatIcon } from "@angular/material/icon";
import { MatSnackBarAction, MatSnackBarActions, MatSnackBarLabel, MatSnackBarRef } from "@angular/material/snack-bar";

@Component({
  selector: "app-snackbar-custom",
  standalone: true,
  imports: [MatSnackBarLabel, MatSnackBarActions, MatSnackBarAction, MatButton, MatIcon],
  template: `
    <span matSnackBarLabel>Angular Material 3 </span>
    <span matSnackBarActions>
      <button mat-button matSnackBarAction (click)="snackBarRef.dismissWithAction()">
        <mat-icon> celebration </mat-icon>
        Celebrate
      </button>
    </span>
  `,
  styles: `
    :host {
      display: flex;
    }
  `,
})
export class SnackbarCustomComponent {
  snackBarRef = inject(MatSnackBarRef);
}
