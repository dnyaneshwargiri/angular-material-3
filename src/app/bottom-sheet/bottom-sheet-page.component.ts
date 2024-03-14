import { Component, inject } from "@angular/core";
import { MatButton } from "@angular/material/button";
import { BottomSheetContentComponent } from "./bottom-sheet-content/bottom-sheet-content.component";
import { MatBottomSheet } from "@angular/material/bottom-sheet";

@Component({
  selector: "app-bottom-page",
  template: ` <button mat-button (click)="openBottomSheet()">Open Bottom Sheet</button> `,
  standalone: true,
  imports: [MatButton, BottomSheetContentComponent],
})
export default class BottomSheetPageComponent {
  #bottomSheet = inject(MatBottomSheet);

  openBottomSheet() {
    this.#bottomSheet.open(BottomSheetContentComponent);
  }
}
