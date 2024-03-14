import { AfterViewInit, Component, viewChild } from "@angular/core";
import { SectionComponent } from "../../section/section.component";
import {
  MatTable,
  MatCellDef,
  MatColumnDef,
  MatHeaderRowDef,
  MatRowDef,
  MatHeaderCellDef,
  MatHeaderCell,
  MatCell,
  MatRow,
  MatTableDataSource,
  MatHeaderRow,
} from "@angular/material/table";
import { MatPaginator } from "@angular/material/paginator";
import { ELEMENT_DATA, PeriodicElement } from "../data";

@Component({
  selector: "app-table-with-pagination",
  standalone: true,
  template: `
    <app-section title="Table With Pagination">
      <div>
        <table mat-table [dataSource]="dataSource">
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

        <mat-paginator
          [pageSizeOptions]="[5, 10, 20]"
          showFirstLastButtons
          aria-label="Select page of periodic elements" />
      </div>
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
    MatPaginator,
  ],
})
export class TableWithPaginationComponent implements AfterViewInit {
  displayedColumns: string[] = ["position", "name", "weight", "symbol"];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);
  paginator = viewChild.required<MatPaginator>(MatPaginator);

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator();
  }
}
