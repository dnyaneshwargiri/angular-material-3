import { Component } from "@angular/core";
import { BasicTabComponent } from "./basic-tab/basic-tab.component";
import { TabWithIconComponent } from "./tab-with-icon/tab-with-icon.component";

@Component({
  selector: "app-tab-page",
  standalone: true,
  template: `
    <div class="sections-wrapper">
      <app-basic-tab />
      <app-tab-with-icon />
    </div>
  `,
  imports: [BasicTabComponent, TabWithIconComponent],
})
export default class TabPageComponent {}
