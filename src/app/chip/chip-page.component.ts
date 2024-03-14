import { Component } from "@angular/core";
import { ChipsAvatarComponent } from "./chips-avatar/chips-avatar.component";
import { BasicChipsComponent } from "./basic-chips/basic-chips.component";
import { ChipsDragAndDropComponent } from "./chips-drag-and-drop/chips-drag-and-drop.component";
import { ChipsAutocompleteComponent } from "./chips-autocomplete/chips-autocomplete.component";

@Component({
  selector: "app-chip-page",
  template: `<div class="sections-wrapper">
    <app-chips-avatar />
    <app-basic-chips />
    <app-chips-drag-and-drop />
    <app-chips-autocomplete />
  </div>`,
  standalone: true,
  imports: [ChipsAvatarComponent, BasicChipsComponent, ChipsDragAndDropComponent, ChipsAutocompleteComponent],
})
export default class ChipPageComponent {}
