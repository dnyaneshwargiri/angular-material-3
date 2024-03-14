import { Component, inject } from "@angular/core";
import { MatButton } from "@angular/material/button";
import { THEME_OPTIONS } from "./theme-options";
import { MatDialogContent, MatDialogRef, MatDialogTitle } from "@angular/material/dialog";
import { ThemeService } from "./theme.service";
import { ThemeClass } from "./types";
import { MatIcon } from "@angular/material/icon";

@Component({
  selector: "app-theme-picker-dialog",
  template: `
    <h2 mat-dialog-title>Themes</h2>

    <mat-dialog-content>
      <div class="theme-options">
        @for (option of themeOptions; track option.light.hex) {
          <div class="grid">
            <button
              (click)="changeTheme(option.light.class)"
              mat-button
              [style]="{
                backgroundColor: activeTheme() === option.light.class ? 'white' : option.light.hex,
                color: activeTheme() === option.light.class ? option.light.hex : 'white'
              }">
              <mat-icon>light_mode</mat-icon>
              {{ option.name }}
            </button>
            <button
              (click)="changeTheme(option.dark.class)"
              mat-stroked-button
              [style]="{
                backgroundColor: activeTheme() === option.dark.class ? 'white' : option.dark.hex,
                color: activeTheme() === option.dark.class ? option.dark.hex : 'white'
              }">
              <mat-icon>dark_mode</mat-icon>
              {{ option.name }}
            </button>
          </div>
        }
      </div>
    </mat-dialog-content>
  `,
  standalone: true,
  styles: `
    .theme-options {
      display: flex;
      gap: 0.5rem;
      flex-direction: column;
    }

    .grid {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 0.5rem;
    }
  `,
  imports: [MatButton, MatDialogTitle, MatDialogContent, MatIcon],
})
export class ThemePickerDialogComponent {
  #themeService = inject(ThemeService);
  #dialogRef = inject(MatDialogRef);

  themeOptions = THEME_OPTIONS;
  activeTheme = this.#themeService.theme;

  changeTheme(newTheme: ThemeClass) {
    this.#themeService.changeTheme(newTheme);
    this.#dialogRef.close();
  }
}
