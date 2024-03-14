import { Component, inject } from "@angular/core";
import { BasicDialogComponent } from "./basic-dialog/basic-dialog.component";
import { MatDialog } from "@angular/material/dialog";
import { MatButton } from "@angular/material/button";
import { ScrollableDialogComponent } from "./scrollable-dialog/scrollable-dialog.component";

@Component({
  selector: "app-dialog-page",
  template: `
    <div class="flex-wrapper">
      <button mat-button (click)="openBasicDialog()">Open Basic Dialog</button>
      <button mat-button (click)="openScrollableDialog()">Open Scrollable Dialog</button>
    </div>
  `,
  standalone: true,
  imports: [BasicDialogComponent, MatButton],
})
export default class DialogPageComponent {
  #dialog = inject(MatDialog);

  openBasicDialog() {
    this.#dialog.open(BasicDialogComponent);
  }

  openScrollableDialog() {
    this.#dialog.open(ScrollableDialogComponent);
  }
}
