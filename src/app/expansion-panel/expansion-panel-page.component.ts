import { Component } from "@angular/core";
import { BasicExpansionPanelComponent } from "./basic-expansion-panel/basic-expansion-panel.component";
import { CdkExpansionPanelComponent } from "./cdk-expansion-panel/cdk-expansion-panel.component";

@Component({
  selector: "app-expansion-panel-page",
  standalone: true,
  template: `
    <div class="sections-wrapper">
      <app-basic-expansion-panel title="Default Display Mode" mode="default" />
      <app-basic-expansion-panel title="Flat Display Mode" mode="flat" />
      <app-cdk-expansion-panel />
    </div>
  `,
  imports: [BasicExpansionPanelComponent, CdkExpansionPanelComponent],
})
export default class ExpansionPanelPageComponent {
  panelOpenState = false;
}
