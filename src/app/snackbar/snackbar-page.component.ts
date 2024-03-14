import { Component, inject } from "@angular/core";
import { MatButton } from "@angular/material/button";
import { MatSnackBar } from "@angular/material/snack-bar";
import { SnackbarCustomComponent } from "./snackbar-custom/snackbar-custom.component";

@Component({
  selector: "app-snackbar-page",
  standalone: true,
  imports: [MatButton],
  template: ` <button mat-button (click)="openSnackbar()">Open Snackbar</button> `,
})
export default class SnackbarPageComponent {
  #snackbar = inject(MatSnackBar);

  openSnackbar() {
    this.#snackbar.openFromComponent(SnackbarCustomComponent, { duration: 2000 });
  }
}
