import { Component, computed, input } from "@angular/core";
import { SectionComponent } from "../../section/section.component";
import {
  MatCell,
  MatCellDef,
  MatColumnDef,
  MatHeaderCell,
  MatHeaderCellDef,
  MatHeaderRowDef,
  MatHeaderRow,
  MatRow,
  MatRowDef,
  MatTable,
} from "@angular/material/table";
import { ELEMENT_DATA } from "../data";
import { NgClass } from "@angular/common";

@Component({
  selector: "app-basic-table",
  standalone: true,
  template: `
    <app-section [title]="title()">
      <table mat-table [dataSource]="dataSource" [ngClass]="{ 'filled-table': variant() === 'filled' }">
        <ng-container matColumnDef="position">
          <th mat-header-cell *matHeaderCellDef>No.</th>
          <td mat-cell *matCellDef="let element">{{ element.position }}</td>
        </ng-container>

        <ng-container matColumnDef="name">
          <th mat-header-cell *matHeaderCellDef>Name</th>
          <td mat-cell *matCellDef="let element">{{ element.name }}</td>
        </ng-container>

        <ng-container matColumnDef="weight">
          <th mat-header-cell *matHeaderCellDef>Weight</th>
          <td mat-cell *matCellDef="let element">{{ element.weight }}</td>
        </ng-container>

        <ng-container matColumnDef="symbol">
          <th mat-header-cell *matHeaderCellDef>Symbol</th>
          <td mat-cell *matCellDef="let element">{{ element.symbol }}</td>
        </ng-container>

        <tr mat-header-row *matHeaderRowDef="displayedColumns"></tr>
        <tr mat-row *matRowDef="let row; columns: displayedColumns"></tr>
      </table>
    </app-section>
  `,
  styles: `
    table {
      width: 100%;
    }
  `,
  imports: [
    SectionComponent,
    MatTable,
    MatCellDef,
    MatColumnDef,
    MatHeaderRowDef,
    MatRowDef,
    MatHeaderCellDef,
    MatHeaderCell,
    MatHeaderRow,
    MatCell,
    MatRow,
    NgClass,
  ],
})
export class BasicTableComponent {
  variant = input.required<"filled" | "normal">();
  title = computed(() => (this.variant() === "filled" ? "Filled Table" : "Basic Table"));
  displayedColumns: string[] = ["position", "name", "weight", "symbol"];
  dataSource = ELEMENT_DATA.slice(0, 8);
}
