import { Component, inject } from "@angular/core";
import { MatIconButton } from "@angular/material/button";
import { MatDialog } from "@angular/material/dialog";
import { MatIcon } from "@angular/material/icon";
import { ThemePickerDialogComponent } from "./theme-picker-dialog.component";
import { MatTooltip } from "@angular/material/tooltip";

@Component({
  selector: "app-theme-toggle",
  template: `
    <button mat-icon-button (click)="openThemePicker()" matTooltip="Themes">
      <mat-icon> palette </mat-icon>
    </button>
  `,
  standalone: true,
  imports: [MatIcon, MatIconButton, MatTooltip],
})
export class ThemeToggleComponent {
  #dialog = inject(MatDialog);

  openThemePicker() {
    this.#dialog.open(ThemePickerDialogComponent);
  }
}
