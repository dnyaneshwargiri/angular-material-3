import { Component } from "@angular/core";
import { BasicMenuComponent } from "./basic-menu/basic-menu.component";
import { MenuWithIconsComponent } from "./menu-with-icons/menu-with-icons.component";
import { NestedMenuComponent } from "./nested-menu/nested-menu.component";

@Component({
  selector: "app-menu-page",
  template: `
    <div class="sections-wrapper">
      <app-basic-menu />
      <app-menu-with-icons />
      <app-nested-menu />
    </div>
  `,
  standalone: true,
  imports: [BasicMenuComponent, MenuWithIconsComponent, NestedMenuComponent],
})
export default class MenuPageComponent {}
