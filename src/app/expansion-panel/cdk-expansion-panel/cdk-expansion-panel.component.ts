import { CdkAccordion, CdkAccordionItem } from "@angular/cdk/accordion";
import { Component } from "@angular/core";
import { SectionComponent } from "../../section/section.component";

@Component({
  selector: "app-cdk-expansion-panel",
  standalone: true,
  template: `
    <app-section title="Cdk Accordion">
      <cdk-accordion class="example-accordion">
        @for (item of items; track item; let index = $index) {
          <cdk-accordion-item
            #accordionItem="cdkAccordionItem"
            class="example-accordion-item"
            role="button"
            tabindex="0"
            [attr.id]="'accordion-header-' + index"
            [attr.aria-expanded]="accordionItem.expanded"
            [attr.aria-controls]="'accordion-body-' + index">
            <div
              class="example-accordion-item-header"
              (click)="accordionItem.toggle()"
              (keyup)="accordionItem.toggle()"
              tabindex="0">
              {{ item }}
              <span class="example-accordion-item-description">
                Click to {{ accordionItem.expanded ? "close" : "open" }}
              </span>
            </div>
            <div
              class="example-accordion-item-body"
              role="region"
              [style.display]="accordionItem.expanded ? '' : 'none'"
              [attr.id]="'accordion-body-' + index"
              [attr.aria-labelledby]="'accordion-header-' + index">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perferendis excepturi incidunt ipsum deleniti
              labore, tempore non nam doloribus blanditiis veritatis illo autem iure aliquid ullam rem tenetur deserunt
              velit culpa?
            </div>
          </cdk-accordion-item>
        }
      </cdk-accordion>
    </app-section>
  `,
  styles: `
    .example-accordion {
      display: block;
    }

    .example-accordion-item {
      display: block;
      border: solid 1px #ccc;
    }

    .example-accordion-item + .example-accordion-item {
      border-top: none;
    }

    .example-accordion-item-header {
      display: flex;
      align-content: center;
      justify-content: space-between;
    }

    .example-accordion-item-description {
      font-size: 0.85em;
      color: #999;
    }

    .example-accordion-item-header,
    .example-accordion-item-body {
      padding: 16px;
    }

    .example-accordion-item-header:hover {
      cursor: pointer;
      background-color: #eeeeee5b;
    }

    .example-accordion-item:first-child {
      border-top-left-radius: 4px;
      border-top-right-radius: 4px;
    }

    .example-accordion-item:last-child {
      border-bottom-left-radius: 4px;
      border-bottom-right-radius: 4px;
    }
  `,
  imports: [CdkAccordion, CdkAccordionItem, SectionComponent],
})
export class CdkExpansionPanelComponent {
  items = ["Item 1", "Item 2", "Item 3", "Item 4", "Item 5"];
}
