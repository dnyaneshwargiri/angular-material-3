import { Component } from "@angular/core";
import { MatChip, MatChipSet } from "@angular/material/chips";
import { CdkDragDrop, moveItemInArray, CdkDrag, CdkDropList } from "@angular/cdk/drag-drop";
import { SectionComponent } from "../../section/section.component";

export interface Vegetable {
  name: string;
}

@Component({
  selector: "app-chips-drag-and-drop",
  standalone: true,
  template: `
    <app-section title="Chips Drag and Drop">
      <mat-chip-set cdkDropList cdkDropListOrientation="horizontal" (cdkDropListDropped)="drop($event)">
        @for (vegetable of vegetables; track vegetable) {
          <mat-chip cdkDrag>{{ vegetable.name }}</mat-chip>
        }
      </mat-chip-set>
    </app-section>
  `,
  imports: [MatChipSet, MatChip, CdkDropList, CdkDrag, SectionComponent],
})
export class ChipsDragAndDropComponent {
  vegetables: Vegetable[] = [
    { name: "apple" },
    { name: "banana" },
    { name: "strawberry" },
    { name: "orange" },
    { name: "kiwi" },
    { name: "cherry" },
  ];

  drop(event: CdkDragDrop<Vegetable[]>) {
    moveItemInArray(this.vegetables, event.previousIndex, event.currentIndex);
  }
}
