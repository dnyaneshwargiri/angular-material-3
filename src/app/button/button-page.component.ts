import { Component } from "@angular/core";
import { CommonButtonsComponent } from "./common-buttons/common-buttons.component";
import { SegmentedButtonsComponent } from "./segmented-buttons/segmented-buttons.component";
import { IconButtonsComponent } from "./icon-buttons/icon-buttons.component";
import { FabButtonsComponent } from "./fab-buttons/fab-buttons.component";

@Component({
  selector: "app-button-page",
  template: ` <div class="sections-wrapper">
    <app-common-buttons />
    <app-segmented-buttons />
    <app-icon-buttons />
    <app-fab-buttons />
  </div>`,
  standalone: true,
  imports: [CommonButtonsComponent, SegmentedButtonsComponent, IconButtonsComponent, FabButtonsComponent],
})
export default class ButtonPageComponent {}
