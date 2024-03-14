import { Component } from "@angular/core";
import { BasicTableComponent } from "./basic-table/basic-table.component";
import { TableWithPaginationComponent } from "./table-with-pagination/table-with-pagination.component";

@Component({
  selector: "app-table-page",
  template: `<div class="sections-wrapper">
    <app-basic-table variant="normal" />
    <app-table-with-pagination />
    <app-basic-table variant="filled" />
  </div>`,
  styles: `
    .sections-wrapper {
      width: 100%;
    }
  `,
  standalone: true,
  imports: [BasicTableComponent, TableWithPaginationComponent],
})
export default class TablePageComponent {}
