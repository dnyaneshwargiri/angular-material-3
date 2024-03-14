import { Component, inject } from "@angular/core";
import { MatLine } from "@angular/material/core";
import { MatListItem, MatListItemTitle, MatNavList } from "@angular/material/list";
import { MatBottomSheetRef } from "@angular/material/bottom-sheet";

@Component({
  selector: "app-bottom-sheet-content",
  standalone: true,
  imports: [MatNavList, MatListItem, MatLine, MatListItemTitle],
  template: `
    <mat-nav-list>
      <a href="" mat-list-item (click)="openLink($event)">
        <span matListItemTitle>Google Keep</span>
        <span matLine>Add to a note</span>
      </a>

      <a href="" mat-list-item (click)="openLink($event)">
        <span matListItemTitle>Google Docs</span>
        <span matLine>Embed in a document</span>
      </a>

      <a href="" mat-list-item (click)="openLink($event)">
        <span matListItemTitle>Google Plus</span>
        <span matLine>Share with your friends</span>
      </a>

      <a href="" mat-list-item (click)="openLink($event)">
        <span matListItemTitle>Google Hangouts</span>
        <span matLine>Show to your coworkers</span>
      </a>
    </mat-nav-list>
  `,
})
export class BottomSheetContentComponent {
  #bottomSheetRef = inject(MatBottomSheetRef);

  openLink(e: MouseEvent): void {
    this.#bottomSheetRef.dismiss();
    e.preventDefault();
  }
}
