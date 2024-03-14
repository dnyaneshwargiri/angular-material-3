import { Component, ElementRef, inject, viewChild } from "@angular/core";
import { SectionComponent } from "../../section/section.component";
import { InputsAppearanceService } from "../../input/appearance.service";
import { MatFormField, MatLabel } from "@angular/material/form-field";
import { MatInput } from "@angular/material/input";
import {
  MatAutocomplete,
  MatAutocompleteSelectedEvent,
  MatAutocompleteTrigger,
  MatOption,
} from "@angular/material/autocomplete";
import { MatChipGrid, MatChipInput, MatChipInputEvent, MatChipRemove, MatChipRow } from "@angular/material/chips";
import { MatIcon } from "@angular/material/icon";
import { FormControl, ReactiveFormsModule } from "@angular/forms";
import { map, startWith } from "rxjs";
import { COMMA, ENTER } from "@angular/cdk/keycodes";
import { AsyncPipe } from "@angular/common";
import { LiveAnnouncer } from "@angular/cdk/a11y";
import { AppearanceToggleComponent } from "../../field-appearance-toggle/appearance-toggle.component";

@Component({
  selector: "app-chips-autocomplete",
  standalone: true,
  template: `
    <app-section title="Chips Autocomplete">
      <app-appearance-toggle />
      <form>
        <mat-form-field [appearance]="appearance()">
          <mat-label>Favorite Fruits</mat-label>
          <mat-chip-grid #chipGrid aria-label="Fruit selection">
            @for (fruit of fruits; track fruit) {
              <mat-chip-row (removed)="remove(fruit)">
                {{ fruit }}
                <button matChipRemove [attr.aria-label]="'remove ' + fruit">
                  <mat-icon>cancel</mat-icon>
                </button>
              </mat-chip-row>
            }
          </mat-chip-grid>
          <input
            placeholder="New Fruit..."
            #fruitInput
            [formControl]="fruitCtrl"
            [matChipInputFor]="chipGrid"
            [matAutocomplete]="auto"
            [matChipInputSeparatorKeyCodes]="separatorKeysCodes"
            (matChipInputTokenEnd)="add($event)" />
          <mat-autocomplete #auto="matAutocomplete" (optionSelected)="selected($event)">
            @for (fruit of filteredFruits | async; track fruit) {
              <mat-option [value]="fruit">{{ fruit }}</mat-option>
            }
          </mat-autocomplete>
        </mat-form-field>
      </form>
    </app-section>
  `,
  imports: [
    SectionComponent,
    MatFormField,
    MatLabel,
    MatInput,
    MatAutocomplete,
    MatChipRow,
    MatChipGrid,
    MatChipRemove,
    MatIcon,
    ReactiveFormsModule,
    MatChipInput,
    MatAutocompleteTrigger,
    AsyncPipe,
    MatOption,
    AppearanceToggleComponent,
  ],
})
export class ChipsAutocompleteComponent {
  appearance = inject(InputsAppearanceService).appearance;
  announcer = inject(LiveAnnouncer);
  separatorKeysCodes: number[] = [ENTER, COMMA];
  fruitCtrl = new FormControl("");
  fruits: string[] = ["Lemon"];
  allFruits: string[] = ["Apple", "Lemon", "Lime", "Orange", "Strawberry"];
  fruitInput = viewChild.required<HTMLInputElement, ElementRef>("fruitInput", { read: ElementRef });

  filteredFruits = this.fruitCtrl.valueChanges.pipe(
    startWith(null),
    map((fruit: string | null) => (fruit ? this._filter(fruit) : this.allFruits.slice()))
  );

  add(event: MatChipInputEvent): void {
    const value = (event.value || "").trim();

    if (value) {
      this.fruits.push(value);
    }

    event.chipInput!.clear();

    this.fruitCtrl.setValue(null);
  }

  remove(fruit: string): void {
    const index = this.fruits.indexOf(fruit);

    if (index >= 0) {
      this.fruits.splice(index, 1);

      this.announcer.announce(`Removed ${fruit}`);
    }
  }

  selected(event: MatAutocompleteSelectedEvent): void {
    this.fruits.push(event.option.viewValue);
    this.fruitInput().nativeElement.value = "";
    this.fruitCtrl.setValue(null);
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.allFruits.filter((fruit) => fruit.toLowerCase().includes(filterValue));
  }
}
