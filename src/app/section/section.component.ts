import { Component, input } from "@angular/core";

@Component({
  selector: "app-section",
  standalone: true,
  template: `
    <section>
      <h3>{{ title() }}</h3>
      <ng-content />
    </section>
  `,
  styles: `
    h3 {
      margin-top: 0;
      margin-bottom: 0.8rem;
    }
  `,
})
export class SectionComponent {
  title = input.required<string>();
}
