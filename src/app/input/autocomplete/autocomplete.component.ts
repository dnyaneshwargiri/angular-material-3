import { Component, inject } from "@angular/core";
import { SectionComponent } from "../../section/section.component";
import { MatFormField, MatLabel } from "@angular/material/form-field";
import { MatAutocomplete, MatOption, MatAutocompleteTrigger } from "@angular/material/autocomplete";
import { MatInput } from "@angular/material/input";
import { InputsAppearanceService } from "../appearance.service";
import { FormControl, ReactiveFormsModule } from "@angular/forms";
import { map, startWith } from "rxjs/operators";
import { AsyncPipe } from "@angular/common";

export interface User {
  name: string;
}

@Component({
  selector: "app-autocomplete",
  standalone: true,
  imports: [
    SectionComponent,
    MatFormField,
    MatLabel,
    MatAutocomplete,
    MatInput,
    MatOption,
    ReactiveFormsModule,
    AsyncPipe,
    MatAutocompleteTrigger,
  ],
  template: `
    <app-section title="Autocomplete">
      <mat-form-field [appearance]="appearance()" subscriptSizing="dynamic">
        <mat-label>Assignee</mat-label>
        <input type="text" matInput [formControl]="myControl" [matAutocomplete]="auto" />
        <mat-autocomplete #auto="matAutocomplete" [displayWith]="displayFn">
          @for (option of filteredOptions | async; track option) {
            <mat-option [value]="option">{{ option.name }}</mat-option>
          }
        </mat-autocomplete>
      </mat-form-field>
    </app-section>
  `,
})
export class AutocompleteComponent {
  appearance = inject(InputsAppearanceService).appearance;
  myControl = new FormControl<string | User>("");
  options: User[] = [{ name: "Mary" }, { name: "Shelley" }, { name: "Igor" }];

  filteredOptions = this.myControl.valueChanges.pipe(
    startWith(""),
    map((value) => {
      const name = typeof value === "string" ? value : value?.name;
      return name ? this.#filter(name as string) : this.options.slice();
    })
  );

  displayFn(user: User): string {
    return user && user.name ? user.name : "";
  }

  #filter(name: string): User[] {
    const filterValue = name.toLowerCase();

    return this.options.filter((option) => option.name.toLowerCase().includes(filterValue));
  }
}
